$(document).ready(function(){
     $('.explanation__carousel').owlCarousel({
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
  $('.paysystems__carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    loop:true,
    nav: true,
    autoWidth:true,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        766:{
            center: true,
            items: 5,
            nav: false
        },
        992:{
            dots: false,
            nav: false
        },
        1200:{
            dots: false,
            nav: false,
        }
    }
  });
});
  // CHARTS =================================================================
  var chart1 = new Chartist.Bar('.ct-chart1', {
  labels: ['2016', '2017', '2018'],
  series: [
    [900, 600, 250],
    [420, 1050, 800]
  ]
},{
  seriesBarDistance:24,
  width: '330px',
  height: '330px',
});

  chart1.on('draw', function(data) {
    if(data.type == 'bar') {
      data.element.animate({
        y2: {
            dur: 3000,
            from: data.y1,
            to: data.y2,
            easing: Chartist.Svg.Easing.easeOutQuint
        },
        opacity: {
          dur: 3000,
          from: 0,
          to: 1,
          easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  });

  var chart2 = new Chartist.Bar('.ct-chart2', {
    labels: ['Стоимость валют', 'Деловая активность', 'Уровень инфляции'],
    series: [
      [70, 80, 60]
    ]
  }, {
    seriesBarDistance: 40,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 180
    },
    width: "980px",
    height: "260px",
    low: 0,
    high: "100"
  });

 chart2.on('draw', function(data) {
    if(data.type == 'bar') {
      data.element.animate({
        x2: {
          dur: 3000,
          from: data.x1,
          to: data.x2,
          easing: Chartist.Svg.Easing.easeOutQuint
        },
        opacity: {
          dur: 3000,
          from: 0,
          to: 1,
          easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  });

  var data = {
  labels: ['Окт `15', 'Янв `16', 'Апр`16', 'Июл`16', 'Окт `16', 'Янв `17', 'Апр`17', 'Июл`17', 'Окт `17', 'Янв `18', 'Июл`18', 'Апр`18'],
  series: [
    [0.2, 0.5, 0.5, 0.5, 0.5, 0.7, 1,  1.2, 1.2, 1.5, 1.7, 2],
    [0.2, 0.5, 0.5, 0.5, 0.5, 0.7, 1,  1.2, 1.2, 1.5, 1.7, 2]
    ]
  };

  var options = {
    seriesBarDistance: 40,
    width: "1000px",
    height: "350px"
  };

  var chart3 = new Chartist.Bar('.ct-chart3', data, options);
  chart3.on('draw', function(data) {
    if(data.type == 'bar') {
      data.element.animate({
        y2: {
            dur: 2000,
            from: data.y1,
            to: data.y2,
            easing: Chartist.Svg.Easing.easeOutQuint
        },
        opacity: {
          dur: 2000,
          from: 0,
          to: 1,
          easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  });

  // CHARTS =================================================================

  // SCROLL ANIMATION =======================================================
  var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".ct-chart1",
      triggerHook: 1,
      reverse: false,
    })
    .on("start", function(){
      chart1.update();
    })
    // .addIndicators()
    .addTo(controller)


    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".ct-chart2",
      triggerHook: 1,
      reverse: false,
    })
    .on("start", function(){
      chart2.update();
    })
    // .addIndicators()
    .addTo(controller)


    var scene3 = new ScrollMagic.Scene({
      triggerElement: ".ct-chart3",
      triggerHook: 1,
      reverse: false,
    })
    .on("start", function(){
      chart3.update();
    })
    // .addIndicators()
    .addTo(controller)

    var scene4 = new ScrollMagic.Scene({
      triggerElement: ".knowledge__card",
      triggerHook: 0.8,
    })
  .setClassToggle(".knowledge__card", "fade-in")
  // .addIndicators()
  .addTo(controller)

  var scene5 = new ScrollMagic.Scene({
      triggerElement: ".advantages__card",
      triggerHook: 0.8,
    })
  .setClassToggle(".advantages__card", "fade-in")
  // .addIndicators()
  .addTo(controller)
// SCROLL ANIMATION =======================================================