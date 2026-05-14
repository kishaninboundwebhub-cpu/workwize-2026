$('.faqtab li:first-child').addClass('active-tab');
$(function () {
  var activeIndex = $('.active-tab').index(),
      $contentlis = $('.faqtab-inn .faqrw'),
      $tabslis = $('.faqtab li');
  
  // Show content of active tab on loads
  $contentlis.eq(activeIndex).show();

  $('.faqtab').on('click', 'li', function (e) {
    var $current = $(e.currentTarget),
        index = $current.index();
    
    $tabslis.removeClass('active-tab');
    $current.addClass('active-tab');
    $contentlis.hide().eq(index).show();
	 });
});