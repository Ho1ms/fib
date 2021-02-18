let menu = document.getElementById("menu-open")
menu.addEventListener('click', onMenuClick, false)
let menuContent = document.getElementById('menu-content')
function onMenuClick() {
    console.log(menu.className)
    if (!menu.className.endsWith('-active')) {
        menu.className += '-active'
        menuContent.className = 'open'
    } else {
        menu.className ='menu-button'
        menuContent.className = 'hidden'
    }
}