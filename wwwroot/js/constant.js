//Function
const validateEmail = (email) => {
    var validate_email = String(email)
        .toLowerCase()
        .match
        (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (validate_email == null || validate_email == undefined || validate_email == '') {
        return false;
    }
    return true;
};

function validatePhoneNumber(phoneNumber) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (phoneNumber.match(phoneno)) {
        return true;
    }
    else {
        return false;
    }
}

function isNullOrEmpty(value) {
    var result = false;

    if (value == null || value == undefined || value == '') {
        result = true;
    }
    return result;

}

function fomatToTypeMoney(price) {
    var strPrice = price + "";
    var result = price;
    if (strPrice.length == 4) {
        result = strPrice.substring(0, 1) + "." + strPrice.substring(1);
    }
    else if (strPrice.length == 5) {
        result = strPrice.substring(0, 2) + "." + strPrice.substring(2);
    }
    else if (strPrice.length == 6) {
        result = strPrice.substring(0, 3) + "." + strPrice.substring(3);
    }
    else if (strPrice.length == 7) {
        result = strPrice.substring(0, 1) + "." + strPrice.substring(1, 4) + "." + strPrice.substring(4);
    }
    else if (strPrice.length == 8) {
        result = strPrice.substring(0, 2) + "." + strPrice.substring(2, 5) + "." + strPrice.substring(5);
    }
    else if (strPrice.length == 9) {
        result = strPrice.substring(0, 3) + "." + strPrice.substring(3, 6) + "." + strPrice.substring(6);
    }
    return result + " đ";
}

/*Notification-Toastinette*/
// position
// "top - left".
// "top-center".(default)
// "top-right".
// "bottom-left".
// "bottom-center".
// "bottom-right".
// type
// "error".
// "success".(default)
// "info".
// "warning".
function showToasinette_Success_Top_Right(content) {
    if (isNullOrEmpty(content)) {
        content = 'Qúa trình xử lý thành công'
    }
    Toastinette.init({
        position: 'top-right',
        title: '',
        message: content,
        type: 'success',
        //autoClose: false,
        autoClose: 5000,
        progress: true
    });
}
function showToasinette_Success_Bottom_Right(content) {
    if (isNullOrEmpty(content)) {
        content = 'Qúa trình xử lý thành công'
    }
    Toastinette.init({
        position: 'bottom-right',
        title: '',
        message: content,
        type: 'success',
        //autoClose: false,
        autoClose: 5000,
        progress: true
    });
}
function showToasinette_Success_Top_Center(content) {
    if (isNullOrEmpty(content)) {
        content = 'Qúa trình xử lý thành công'
    }
    Toastinette.init({
        position: 'top-center',
        title: '',
        message: content,
        type: 'success',
        //autoClose: false,
        autoClose: 5000,
        progress: true
    });
}
function showToasinette_Success_Bottom_Center(content) {
    if (isNullOrEmpty(content)) {
        content = 'Qúa trình xử lý thành công'
    }
    Toastinette.init({
        position: 'bottom-center',
        title: '',
        message: content,
        type: 'success',
        //autoClose: false,
        autoClose: 5000,
        progress: false
    });
}
function showToasinette_Error_Top_Right(content) {
    if (isNullOrEmpty(content)) {
        content = 'Có lỗi trong quá trình xử lý'
    }
    Toastinette.init({
        position: 'top-right',
        title: '',
        message: content,
        type: 'error',
        autoClose: 5000,
        progress: true
    });
}
function showToasinette_Error_Bottom_Right(content) {
    if (isNullOrEmpty(content)) {
        content = 'Có lỗi trong quá trình xử lý'
    }
    Toastinette.init({
        position: 'bottom-right',
        title: '',
        message: content,
        type: 'error',
        autoClose: 5000,
        progress: true
    });
}
function showToasinette_Error_Top_Center(content) {
    if (isNullOrEmpty(content)) {
        content = 'Có lỗi trong quá trình xử lý'
    }
    Toastinette.init({
        position: 'top-center',
        title: '',
        message: content,
        type: 'error',
        autoClose: 5000,
        progress: true
    });
}
function showToasinette_Error_Bottom_Center(content) {
    if (isNullOrEmpty(content)) {
        content = 'Có lỗi trong quá trình xử lý'
    }
    Toastinette.init({
        position: 'bottom-center',
        title: '',
        message: content,
        type: 'error',
        autoClose: 5000,
        progress: true
    });
}
/*Notification-Prompt-Boxes-master*/
function showPrompt_Success_Top_Right(content) {
    if (isNullOrEmpty(content)) {
        content = 'Qúa trình xử lý thành công'
    }
    var prompt = new PromptBoxes({
        // top or bottom
        toastDir: 'top',
        // max number of toasts to display
        toastMax: 5,
        // auto dismiess after 5 seconds
        // 0 = never
        toastDuration: 5000,
        // is dissmissable
        toastClose: false,
        // shows prompt as position absolute
        promptAsAbsolute: true,
        // animation speed
        animationSpeed: 500
    });
    prompt.success('Success toast');
    //prompt.error('Error toast');
    //prompt.alert('Alert toast');
    //prompt.info('Info toast');
}
function showPrompt_Error_Top_Right(content) {
    if (isNullOrEmpty(content)) {
        content = 'Có lỗi trong quá trình xử lý'
    }
    var prompt = new PromptBoxes({
        // top or bottom
        toastDir: 'top',
        // max number of toasts to display
        toastMax: 5,
        // auto dismiess after 5 seconds
        // 0 = never
        toastDuration: 5000,
        // is dissmissable
        toastClose: false,
        // shows prompt as position absolute
        promptAsAbsolute: true,
        // animation speed
        animationSpeed: 500
    });
    prompt.error(content);
}
/*Notification-awesome*/
function showToasinette_AwesomeAlert(header, type, title, message, img) {
    // type
    // success(default )
    // info
    // warning
    // error
    // dark
    // question (xử dụng khi type là question: buttonConfirm: 'Yes',buttonCancel: 'No',)
    if (isNullOrEmpty(header)) {
        header = true;
    }
    if (isNullOrEmpty(type)) {
        type = 'success';
    }
    if (isNullOrEmpty(title)) {
        title = 'Thành công!';
    }
    if (isNullOrEmpty(message)) {
        message = 'Cập nhật thông tin thành công.';
    }
    if (isNullOrEmpty(img)) {
        img = '/assets/images/icon/success.svg';
    }
    awesomeAlert({
        header: header,
        type: type,
        title: title,
        message: message,
        //bgColor: '#2dd284',
        img: img,
        buttonOK: 'Xong!',
        closeStyle: 'circle'
    }).then(res => window.location.reload())
}
