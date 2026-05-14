$(document).ready(function(){
  
  $('.hmegaMenu').each(function(){
    var getv = $(this).attr('data-value');
    $('.header-menu .hs-menu-wrapper > ul > li:nth-child('+getv+')').addClass('megaChildMenu');
    $(this).insertAfter($('.header-menu .hs-menu-wrapper > ul li.megaChildMenu:nth-child('+getv+') > a'));  
  });
  
  $('.header-menu .megaChildMenu > a').after('<div class="childTrigger"></div>'); 
  $('.mobileTrigger').on('click',function(){
    $('body').toggleClass('menuOpen');
  });
  $('.childTrigger').on('click',function(){
    $(this).parent().siblings().find('.childTrigger').removeClass('childOpen');
    $(this).toggleClass('childOpen');
    $(this).parent().siblings().find('.hmegaMenu').slideUp(200);
    $(this).next('.hmegaMenu').slideToggle(200);
  });
  
 
  
});