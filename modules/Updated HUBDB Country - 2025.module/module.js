$(document).ready(function($) {
    $('.triggBtn a[href^="#"]').bind('click', function(e) {
        e.preventDefault();
        var target = this.hash;        
        $('html, body').stop().animate({
            'scrollTop' : $(target).offset().top 
        }, 1500);
    });
  
    $(".dynamic-data-box").hide();
    $(".dynamic-data-box").slice(0, 18).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".dynamic-data-box:hidden").slice(0, 6).slideDown('250');
      if($(".dynamic-data-box:hidden").length == 0) {
        $("#loadMore").hide();
      }
    });  
});