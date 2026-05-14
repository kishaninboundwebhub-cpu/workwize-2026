$(document).ready(function () {
  function getSlidesToShow() {
    const windowWidth = $(window).width();

    // Adjust slidesToShow based on responsive breakpoints
    if (windowWidth < 520) {
      return 3;
    } else if (windowWidth < 991) {
      return 5;
    } else if (windowWidth < 1200) {
      return 5;
    } else {
      return 7;
    }
  }

  // Initialize Slick slider
  function initializeSlider() {
    $('.hrisit-logo-slider').slick({
      slidesToShow: getSlidesToShow(),
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 6000,
      pauseOnHover: true,
      cssEase: 'linear',
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  }

  // Check slides count and initialize or destroy Slick
  function checkSlides() {
    const slideCount = $('.hrisit-logo-slider > div').length; // Total slides
    const slidesToShow = getSlidesToShow();

    if (slideCount <= slidesToShow) {
      if ($('.hrisit-logo-slider').hasClass('slick-initialized')) {
        $('.hrisit-logo-slider').slick('unslick'); // Destroy slider
      }
    } else {
      if (!$('.hrisit-logo-slider').hasClass('slick-initialized')) {
        initializeSlider(); // Initialize slider if not already initialized
      }
    }
  }

  // Run on page load
  checkSlides();

  // Recheck on window resize
  $(window).resize(function () {
    checkSlides();
  });
});
