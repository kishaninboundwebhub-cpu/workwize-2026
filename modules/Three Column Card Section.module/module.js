$('.moreless-button').click(function(event) {
   event.preventDefault();
  $(this).closest('.ThreeColumnCardBoxCnt').find('.moretext').slideToggle().closest('.ThreeColumnCardBox').siblings('.ThreeColumnCardBox').find('.moretext').slideUp();

});


