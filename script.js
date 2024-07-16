window.addEventListener('DOMContentLoaded', function() {
    

    console.log("loaded pet");

     //code to get the quantity buying update every time + or - button is clicked//

     var quantityBuying = document.getElementById('amount-buying');
     var plus = document.getElementById('morePlease');
     var less = document.getElementById('lessPlease');
 
     var theQuantity = 0;
 
     plus.addEventListener('click', function() {
         theQuantity++;
         quantityBuying.innerHTML = theQuantity;
     });
 
     less.addEventListener('click', function() {
         if (theQuantity > 0) {
            theQuantity--;
            quantityBuying.innerHTML = theQuantity;
        } else {}
     });

    //Code to get basket menu to show on click of cart icon//

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
        mainUnderneath[1].setAttribute('style', 'opacity: 1');
        mainUnderneath[2].setAttribute('style', 'opacity: 1');
        mainUnderneath[3].setAttribute('style', 'opacity: 1');

    });

    mainUnderneath[1].addEventListener('click', function() {
        mainUnderneath[0].setAttribute('style', 'opacity: 1');
        mainUnderneath[1].setAttribute('style', 'opacity: 0.5');
        mainUnderneath[2].setAttribute('style', 'opacity: 1');
        mainUnderneath[3].setAttribute('style', 'opacity: 1');
    });

    mainUnderneath[2].addEventListener('click', function() {
        mainUnderneath[0].setAttribute('style', 'opacity: 1');
        mainUnderneath[1].setAttribute('style', 'opacity: 1');
        mainUnderneath[2].setAttribute('style', 'opacity: 0.5');
        mainUnderneath[3].setAttribute('style', 'opacity: 1');
    });

    mainUnderneath[3].addEventListener('click', function() {
        mainUnderneath[0].setAttribute('style', 'opacity: 1');
        mainUnderneath[1].setAttribute('style', 'opacity: 1');
        mainUnderneath[2].setAttribute('style', 'opacity: 1');
        mainUnderneath[3].setAttribute('style', 'opacity: 0.5');
    });

    //Code to get all opacities to reset to 1 after user clicks close button of modal//

    var closeModalButton = document.getElementById('modal-close');

    closeModalButton.addEventListener('click', function() {

        for (var i = 0; i < mainUnderneath.length; i++) {
            mainUnderneath[i].setAttribute('style', 'opacity: 1');
        }

    });

    //Code to get lightbox image to change on clicks - WITHIN lightbox//

    var lightboxImagesUnderneath = document.getElementsByClassName('lightbox-thumbnails');

    var imageLocations = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg'];

    var lightboxImage = document.getElementById('lightbox-main-image');

    var imageChangeClickArea = document.getElementById('images-underneath-row');

    imageChangeClickArea.addEventListener('click', function (event) {
        for (var i = 0; i < lightboxImagesUnderneath.length; i++) {
            if (lightboxImagesUnderneath[i] == event.target) {
                lightboxImage.setAttribute('src', imageLocations[i]);
            }
        }
    })
    
    //code to set lightbox load image as the one which the user has clicked//

    mainUnderneaths.addEventListener('click', function(event) {
        for (var i = 0; i < mainUnderneath.length; i++) {
            if (event.target == mainUnderneath[i]) {
                lightboxImage.setAttribute('src', imageLocations[i]);
            }
        }
    })
})