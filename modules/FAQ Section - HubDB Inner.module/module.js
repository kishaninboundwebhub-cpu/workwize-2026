$(function(){
  var cUrl = window.location.href;
  $(".faqcolstxt.faqcolstxt-a table a").each(function(){
  if ($(this).attr("href") == cUrl){
   $(this).addClass("active");
  }
  });
});