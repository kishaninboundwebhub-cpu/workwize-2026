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
    var $this = $(this);
    var isOnView = isCounterElementVisible($this);
    
    if (isOnView && !$this.hasClass('visibled')) {
      $this.addClass('visibled');

      var finalValue = parseFloat($this.text().replace(/,/g, '')); // Remove commas, convert to number
      var decimalPlaces = (finalValue % 1 !== 0) ? finalValue.toString().split('.')[1].length : 0; // Detect exact decimals

      $this.prop('Counter', 0).animate({
        Counter: finalValue
      }, {
        duration: 1500,
        easing: 'swing',
        step: function(now) {
          var formattedNumber = now.toLocaleString(undefined, {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces
          });
          $this.text(formattedNumber);
        }
      });
    }
  });
});

