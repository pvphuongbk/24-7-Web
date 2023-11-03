(function (a) { var d = a.event, b, c; b = d.special.debouncedresize = { setup: function () { a(this).on("resize", b.handler) }, teardown: function () { a(this).off("resize", b.handler) }, handler: function (a, f) { var g = this, h = arguments, e = function () { a.type = "debouncedresize"; d.dispatch.apply(g, h) }; c && clearTimeout(c); f ? e() : c = setTimeout(e, b.threshold) }, threshold: 150 } })(jQuery);

var reloadWhenClosePopupViewer = false;
// bien toan cuc dung de kiem soat viec hien thi loading khi goi ajax
var _isShowLoadingAjax = true;
// biến toàn cục dùng để đếm thời gian reload lại trang khi 1 hành động hoàn tất
var _timerReloadPage = 5;

$(function () {
    $(".modal button").removeAttr("disabled");

    // default tooltips, popovers iniy
    tooltips_popovers.init();
    selectsMultiVm.Init();

    $("[data-iframe-url]").click(function () {
        //$('#popup_viewer').modal({ backdrop: 'static' });
        //$('#popupIframe').attr("src", $(this).attr("data-iframe-url"));
        
        var href = $(this).attr("data-iframe-url");
        if (href.indexOf("?") >= 0) {
            href += "&opener=" + curUrl;
        }
        else {
            href += "?opener=" + curUrl;
        }
        
        $('#popupIframe').attr("src", href);

        if ($(this).attr("title") !== undefined) {
            $('#popup_viewer .title-popup').text($(this).attr("title"));
        } else if ($(this).attr("data-iframe-title") !== undefined) {
            $('#popup_viewer .title-popup').text($(this).attr("data-iframe-title"));
        }

        if ($(this).attr("data-iframe-height") !== undefined) {
            $('#popup_viewer #popupIframe').attr("height", $(this).attr("data-iframe-height"));
        }

        if ($(this).attr("data-iframe-size") !== undefined) {
            $('#popup_viewer .modal-dialog').addClass('modal-lg');
        } else {
            $('#popup_viewer .modal-dialog').removeClass('modal-lg');
        }
    });

    /* hàm dùng để show power tip */
    if ($('.Tip_mouse_on').length) {
        $.fn.powerTip.smartPlacementLists.n = ['n', 's', 'e', 'w'];
        $('.Tip_mouse_on').powerTip({
            placement: 'n',
            smartPlacement: true
        });
    }

    if ($('.pTip_top').length) {
        $(".pTip_top").powerTip({ placement: 'n' });
    }

    if ($('.linkURL, .pagination li:not(.disabled):not(.active)').length) {
        $('.linkURL, .pagination li:not(.disabled):not(.active)').click(function (e) {
            if (e.ctrlKey || e.which == 2) {
                return;
            }
            if ($(".ui-ios-overlay").length == 0) {
                iosOverlay({
                    text: "Loading",
                    icon: "fa fa-spinner fa-spin",
                    //duration: 2000,
                    shadow: true
                });
            }
        });
    }

    $('#popup_viewer').on('hidden.bs.modal', function (e) {
        // do something...
        if (reloadWhenClosePopupViewer == true) {
            window.location.reload();
        } else {
            $('#popupIframe').attr("src", "");
        }
    })

    if ($('.linkURL, .pagination li:not(.disabled):not(.active)').length) {
        $('.linkURL, .pagination li:not(.disabled):not(.active)').click(function (e) {

            if (e.ctrlKey || e.which == 2) {
                return;
            }
            if ($(".ui-ios-overlay").length == 0) {
                iosOverlay({
                    text: "Loading",
                    icon: "fa fa-spinner fa-spin",
                    //duration: 2000,
                    shadow: true
                });
            }
        });
    }

    $("form").submit(function () {
        if (!$(this).attr('data-validate') == 'false') {
            if ($(this).attr("data-unshowloading") == "undefined") {
                console.log('show loading');
                ShowOverlay(true);
            }

            $(this).find("input[data-html-denied='true'], textarea[data-html-denied='true']").each(function () {
                var val = $(this).val();
                val = val.replace(/</g, "< ");
                val = val.replace(/ ( )*/g, " ");
                val = val.replace(/^ /, "");
                val = val.replace(/ $/, "");
                $(this).val(val);
            });

            $(this).parsley().validate();
            if (!$(this).parsley().isValid()) {
                return false;
            }
        }
    });

    if ($('.number').length) {
        $(".number").keypress(function (n) {
            n.which != 8 && isNaN(String.fromCharCode(n.which)) && n.preventDefault()
        });
    }


    if ($('.floatnumber').length) {
        $(".floatnumber").keypress(function (n) {
            n.which != 8 && (n.which != 44 || $(this).val().indexOf(",") != -1) && (n.which < 48 || n.which > 57) && n.preventDefault()
        });
    }

    //prototype validate form
    $.fn.clearForm = function (options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.

            formId: this.closest('form')

        }, options);

        var $form = $(settings.formId);

        //reset jQuery Validate's internals
        $form.validate().resetForm();

        //reset unobtrusive validation summary, if it exists
        $form.find("[data-valmsg-summary=true]")
            .removeClass("validation-summary-errors")
            .addClass("validation-summary-valid")
            .find("ul").empty();

        //reset unobtrusive field level, if it exists
        $form.find("[data-valmsg-replace]")
            .removeClass("field-validation-error")
            .addClass("field-validation-valid")
            .empty();

        return $form;
    };
});

function ShowOverlay(shadow, container) {
    if (typeof shadow == 'undefined') shadow = false;

    if (typeof container == 'undefined')
        container = "";
    else
        container = "#" + container;

    if (!$(".ui-ios-overlay.ios-overlay-show").is(":visible")) {

        if ($(container + " .parsley-errors-list.filled").length == 0) {
            var adrOverlay = iosOverlay({
                text: "Loading",
                icon: "fa fa-spinner fa-spin",
                shadow: shadow,
                id: 'LoadingOverlay'
            });
        }
    }
}

function hideOverlay(time) {
    if (typeof time == 'undefined') time = 100;

    window.setTimeout(function () {
        if ($('.ui-ios-overlay.ios-overlay-show .fa-check').length == 0) {
            $(".ui-ios-overlay.ios-overlay-show").fadeOut(function () { $(this).remove() });
            $(".ui-ios-overlay-shadow").remove();
        }
    }, time);
}
/**/

// default tooltips, popovers init
tooltips_popovers = {
    init: function () {
        $('[data-toggle=tooltip]').tooltip({
            container: "body"
        })
        $('[data-toggle=popover]').popover({
            container: "body"
        });
    }
}

function ShowNotify(type, text, timeout, position) {
    if (typeof timeout == 'undefined') timeout = 5000;
    if (position == undefined) position = 'bottomRight';

    noty({
        text: text,
        type: type,
        theme: 'ad_theme',
        layout: position,
        closeWith: ['button'],
        maxVisible: 10,
        killer: true,
        timeout: timeout
    });
}

var selectsMultiVm = {
    Init: function () {
        if ($('.select2').length > 0) {
            var placeHolder = $('.select2').data('placeholder');
            if (placeHolder == '') placeHolder = 'Nhập từ khóa...';
            $('.select2').select2({
                placeholder: placeHolder,
                allowClear: true
            });
        }

        if ($('.select2-nosearch').length > 0) {
            var placeHolder = $('.select2-nosearch').data('placeholder');
            if (placeHolder == '') placeHolder = 'Nhập từ khóa...';
            $('.select2-nosearch').select2({
                placeholder: placeHolder,
                allowClear: true,
                minimumResultsForSearch: -1
            });
        }
    }
};
