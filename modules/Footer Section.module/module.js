var datalg = $(".lang_list_class > li:first-child a").data("language");
$(".lang_list_class").before('<label class="active-language '+ datalg +'"><span>'+ datalg +'</span></label>');

$(".lang_list_class li a").each(function(){
	var Class = $(this).data("language");
	$(this).addClass(Class);
  $(this).text(Class);
});

// Ensure the DOM is fully loaded
$(document).ready(function() {
    var $langList = $('.footer-clang ul.lang_list_class');
    
    // Calculate the height of the element
    var currentHeight = $langList.outerHeight(); 
    
    // Set the top property to height + 22px
    $langList.css('top', '-' + (currentHeight + 22) + 'px');
});