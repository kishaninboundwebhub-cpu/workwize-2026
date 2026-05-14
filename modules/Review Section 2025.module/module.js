$(document).ready(function(){
  $(".glrevieItem").hide();
  $(".glrevieItem").slice(0, 3).show();
  $(".review-load-more-btn button").on("click", function(e){
    e.preventDefault();
    $(".glrevieItem:hidden").slice(0, 6).show();
    if($(".glrevieItem:hidden").length == 0) {
      $(".review-load-more-btn").hide();
    }
  });  
  if($(".glrevieItem:hidden").length == 0) {
    $(".review-load-more-btn").hide();
  }
  
});