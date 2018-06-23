$(document).ready(function(){
  $('#information__carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    center: false,
    items: 2,

    responsive:{
        0:{
            items:1,
            dots: true
        },
        766:{
                items:2,
            dots: true
        },
        992:{
            items:4,
            dots: false,
            loop: false,
            mouseDrag: false,
        }
    }
    });
});