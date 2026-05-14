function isCounterElementVisible($element) {
  var topView = $(window).scrollTop();
  var botView = topView + $(window).height();
  var topElement = $element.offset().top;
  var botElement = topElement + $element.height();
  return ((botElement <= botView) && (topElement >= topView));
}

// Listen for scroll events
$(window).scroll(function() {
  $(".counter").each(function() {
    isOnView = isCounterElementVisible($(this));
    if (isOnView && !$(this).hasClass('visibled')) {
      $(this).addClass('visibled');
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1500,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      }); 
    }
  });
});