window.addEventListener('DOMContentLoaded', function() {
    //Code to get basket menu to show on click of cart icon//

    var basketMenu = document.getElementById('basket-menu-container');
    var cartIcon = document.getElementById('basket-icon-clickable');

    cartIcon.addEventListener('click', function () {
        basketMenu.setAttribute('style', 'display: block');
    });

    //Code to get opacity to change on click on images underneath main, and to introduce an orange solid border of 2px//

    var mainUnderneath = document.querySelectorAll('div > div > div > a > img');

    var mainUnderneaths = document.getElementById('images-underneath-main');

    var mainUnderneathsContainers = document.querySelectorAll('#main-underneath-container > div.col-3');
    
    mainUnderneath[0].addEventListener('click', function() {
        mainUnderneath[0].setAttribute('style', 'opacity: 0.5');
    });

    mainUnderneathsContainers[0].addEventListener('click', function() {
        mainUnderneathsContainers[0].setAttribute('style', 'border: 2px solid hsl(26, 100%, 55%');
    });

    //code to get the quantity buying update every time + or - button is clicked//

    var quantityBuying = document.getElementById('amount-buying');
    var plus = document.getElementById('morePlease');
    var less = document.getElementById('lessPlease');

    var theQuantity = 0;

    plus.addEventListener('click', function() {
        theQuantity++;
        quantityBuying.innerHTML = theQuantity;
    })

    less.addEventListener('click', function() {
        theQuantity--;
        quantityBuying.innerHTML = theQuantity;
    })



    
    

})