var links = document.getElementsByTagName('a');

for (var i =0; i < links.length; i++){
    if(links[i].href.indexOf("https://passport.yandex.ru/auth") > -1) {
        links[i].href += "?retpath=https://dialogs.yandex.ru/developer"
    }
}