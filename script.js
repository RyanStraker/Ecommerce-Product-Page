window.addEventListener('DOMContentLoaded', function() {
    //Code to get basket menu to show on click of cart icon//

    console.log("loaded pet");

    var basketMenu = document.getElementById('basket-menu-container');
    var cartIcon = document.getElementById('basket-icon-clickable');

    cartIcon.addEventListener('click', function () {
        basketMenu.setAttribute('style', 'display: block');
    });

    //Code to get opacity to change on click on images underneath main, and to introduce an orange solid border of 2px//

    var mainUnderneath = document.getElementsByClassName('non-lightbox-images-underneath');

    var mainUnderneaths = document.getElementById('images-underneath-main');

    var mainUnderneathsContainers = document.querySelectorAll('#main-underneath-container > div.col-3');
    
    mainUnderneath[0].addEventListener('click', function() {
        mainUnderneath[0].setAttribute('style', 'opacity: 0.5');
    });

    mainUnderneathsContainers[0].addEventListener('click', function() {
        mainUnderneathsContainers[0].setAttribute('style', 'border: 2px solid hsl(26, 100%, 55%');
    });

    //Code to get lightbox image to change on clicks//

    var lightboxImagesUnderneath = document.querySelectorAll('div > div > div > a > img');

    lightboxImagesUnderneath[0].addEventListener('click', function () {
        console.log('clicked pet, theres nothing wrong with lightboxImagesUnderneath');
    })

    var imageLocations = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg'];

    var lightboxImage = document.getElementById('lightbox-main-image');

    var imageChangeClickArea = document.getElementById('images-underneath-row');

    imageChangeClickArea.addEventListener('click', function (event) {
        console.log("clicked pet");
        for (var i = 0; i < lightboxImagesUnderneath.length; i++) {
            if (lightboxImagesUnderneath[i] == event.target) {
                lightboxImage.setAttribute('src', imageLocations[i]);
            }
        }
    })

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