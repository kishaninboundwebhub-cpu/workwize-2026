var count_elements = $('.blglisting-pagnumber').length;
$(".blglisting-pagnumber > span").append(" of  " + count_elements);




$(document).ready(function(){
  // Remove elements with 'hide-post' class
  $(".blglisting-cols.hide-post").remove();

  // Initially hide all posts and show the first 9
  $(".blglisting-cols").hide();
  $(".blglisting-cols").slice(0, 9).fadeIn(300);

  // Set up load more functionality
  $(".blog-load-more button").on("click", function(e){
    e.preventDefault();
    $(".blglisting-cols:hidden").slice(0, 6).fadeIn(300);
    
    // Hide load more button if no more hidden elements
    if($(".blglisting-cols:hidden").length == 0) {
      $(".blog-load-more").hide();
    }
  });
  if($(".blglisting-cols:hidden").length == 0) {
      $(".blog-load-more").hide();
  }
  
  $(function(){
    var cUrl = window.location.href;
    $(".blglisting-tags ul li a").each(function(){
     if ($(this).attr("href") == cUrl){
       $(this).addClass("is-selected");
     }
    });
  });

  $(".fillDrops label").on("click", function(e){
    e.preventDefault();
     $(this).next().slideToggle();
  });
  
  
  
  
});