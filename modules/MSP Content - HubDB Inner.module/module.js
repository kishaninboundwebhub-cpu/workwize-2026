jQuery(document).ready(function($) {
  $('.ship-lapt-text').each(function() {
    var $h1 = $(this).find('h1');
    if ($h1.length) {
      $h1.replaceWith(function() {
        return $('<h2>', {
          html: $(this).html()
        });
      });
    }
  });
  
  
  $('.msp-content h2 ~ h2').each(function () {
  const $h2 = $(this);
  const h3 = $('<h3>', {
    html: $h2.html(),
    class: $h2.attr('class') // keep classes if needed
  });
  $h2.replaceWith(h3);
});

  $('.msp-content a').attr('target', '_blank');
  
});
