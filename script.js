window.addEventListener('DOMContentLoaded', function() {
    //Code to get basket menu to show on click of cart icon//

    var basketMenu = document.getElementById('basket-menu-container');
    var cartIcon = document.getElementById('basket-icon-clickable');

    cartIcon.addEventListener('click', function () {
        basketMenu.setAttribute('style', 'display: block');
    })
})