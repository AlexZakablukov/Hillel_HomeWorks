$(document).ready(function(){
  $('.information__carousel').owlCarousel({
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
        576:{
            items:2,
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
  $('.services__carousel').owlCarousel({
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

        576:{
            items:2,
            dots: true
        },
        790:{
            items:3,
            dots: false,
            loop: false,
            mouseDrag: false,
        }
    
        }
    });
  $('.paysystems__carousel').owlCarousel({
    loop:true,
    nav: true,
    autoWidth:true,
    items: 2,
    dots: false,

    responsive:{
        0:{
            items:1,
        },
        766:{
            items:1,
            center: true,
        },
        992:{
            items:2,
            dots: false,
        },
        1200:{
            items:3,
            dots: false,
        }
    }
    });
});