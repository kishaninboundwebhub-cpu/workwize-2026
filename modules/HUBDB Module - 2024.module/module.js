 $(".dynamic-data-box").hide();
  $(".dynamic-data-box").slice(0, 9).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".dynamic-data-box:hidden").slice(0, 6).slideDown('250');
    if($(".dynamic-data-box:hidden").length == 0) {
      $("#loadMore").hide();
    }
  });  