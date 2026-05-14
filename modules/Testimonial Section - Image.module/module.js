$(document).ready(function(){
 $('.testimg-rw').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   
 });
  $(".prev-btn").click(function () {
		$(".testimg-rw").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".testimg-rw").slick("slickNext");
	});
});