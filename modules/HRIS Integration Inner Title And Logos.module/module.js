$(document).ready(function(){

  $('.hrisit-logo-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    pauseOnHover: true,
    cssEase: 'linear',
    arrows:false,
    responsive: [{
    breakpoint: 1200,
      settings: {
      slidesToShow: 5
    }
    },{
    breakpoint: 991,
      settings: {
      slidesToShow: 5
    }
    },{
      breakpoint: 520,
      settings: {
      slidesToShow: 3
      }
    }]
  });
  
});