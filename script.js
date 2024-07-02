window.addEventListener('DOMContentLoaded', function() {
    console.log("Am only testin peh ignore me");

    var clickablePicturesRevealAll = document.querySelectorAll('.col-6 > .row > .col-12 > .row > .col-3');
    var mainContainer = document.querySelector('.container-fluid');
    var body = document.getElementsByTagName('body')[0];

    clickablePicturesRevealAll[0].addEventListener('click', function() {
        console.log("oh my god!");
        body.style.backgroundColor = "hsl(0, 0%, 0%)";
        body.style.opacity = 75%;
    });

    clickablePicturesRevealAll[1].addEventListener('click', function() {
        console.log("oh my god!");
    });

    clickablePicturesRevealAll[2].addEventListener('click', function() {
        console.log("oh my god!");
    });

    clickablePicturesRevealAll[3].addEventListener('click', function() {
        console.log("oh my god!");
    });

    
})