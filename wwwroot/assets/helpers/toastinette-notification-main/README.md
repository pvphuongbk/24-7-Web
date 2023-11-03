# Toastinette Notification
<b>EN:</b> Toastinette Notification is a JavaScript library for make toast notifications for your own web apps.<br>
<b>FR:</b> Toastinette Notification est une librairie JavaScript pour créer des notifications toast pour vos applications web.

## Summary <br>
1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Credit](#credit)

<hr>

## <a name="installation">1. Installation</a>
- <b>EN:</b> Toastinette is really easy to install if you are familiar with other JS libraries. :sunglasses:<br>
<b>FR:</b> Toastinette est vraiment facile à installer si vous êtes familier aux autres librairie JS. :sunglasses:<br><br>
<b>EN:</b> To start, get the Toastinette CSS and JS file available above.  Put these two files in your project and import the CSS via the HTML tag `<link>`.<br>
<b>FR:</b> Pour commencer, procurez vous le fichier CSS et JS de Toastinette disponible plus haut. Mettre ces deux fichiers dans votre projet et importer le CSS via la balise HTML `<link>`.<br>

```html
<link rel="stylesheet" href="path/to/toastinette.min.css">
```
- <b>EN:</b> Then, insert its small lines of code to call the toast. Don't forget to import JS file.<br>
<b>FR:</b> Ensuite, insérez ses petites lignes de code pour appeler le toast. N'oubliez pas d'importer le fichier JS.<br>
```html
<script>
    import Toast from "path/to/toastinette.min.js";

    let toast = new Toastinette({
        message: 'My first notification.',
    });
</script>
```
<b>EN:</b> That's all. Enjoy notifications ! :stuck_out_tongue_winking_eye:<br>
<b>FR:</b> C'est tout. Profitez des notifications ! :stuck_out_tongue_winking_eye:<br>

## 2. <a name="configuration">Configuration</a>
<b>EN:</b> Here is the list of options available to personalize your notifications.<br>
<b>FR:</b> Voici la liste des options disponible pour personnalisé vos notifications.<br>

| Option | Type | Required | Default value | Possible values |
| :---: | :---: | :---: | :---: | :---: |
| `title` | string | No | - | - |
| `message` | string | Yes | "message" | - |
| `position` | string | No | "top-center" | "top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right" |
| `autoClose` | number, boolean | No | - | false, any number (millisecond) |
| `type` | string | No | "success" | "success", "error", "info", "warning" |
| `progress` | boolean | No | - | true, false |

## 3. <a name="credit">Credit</a>
- Developped with [Visual Studio Code](https://code.visualstudio.com/). <br>
- All icons are made by [Remix Icon](https://remixicon.com/)

Thank you very much for support. :blush: