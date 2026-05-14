$(document).ready(function(){
  function startCounter(){
	$('.countno').each(function (index) {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 3000,
	        easing: 'swing',
	        step: function (now) {
	           $(this).text(parseFloat(now).toFixed(size).replace(/\B(?=(?:\d{3})+(?!\d))/g, ','));
	        }
	    });
	});
  }	

  var a = 0;
  $(window).on('load scroll', function() {
    var oTop = $(".counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      startCounter();
        a = 1;
    }
  });
});