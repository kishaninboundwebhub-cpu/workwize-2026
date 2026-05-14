function syncHeaderHeight() {
    var secHeight = $('.header-sec.bgsec.headerdark-blue-text-with-blue-logo, .header-sec.bgsec.headershow-logo-and-sign-in').outerHeight();
    $('.header-outer-sec').css('height', secHeight + 'px');
}

// Run on page load
$(document).ready(function() {
    syncHeaderHeight();
});

// Run on window resize
$(window).on('resize', function() {
    syncHeaderHeight();
});
$(window).scroll(function() {
if ($(this).scrollTop() > 0){  
    $('.header-sec').addClass("sticky");
  }
  else{
    $('.header-sec').removeClass("sticky");
  }
});