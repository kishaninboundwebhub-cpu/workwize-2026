$(document).ready(function(){
$(document).on('click', '.arrowup > a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 10,
    }, 900);
});
  
  $(document).on('click', 'a[href^="#"].twimgbtns-smothscrolling', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top ,
    }, 900);
});
});