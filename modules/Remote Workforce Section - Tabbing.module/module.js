$(document).ready(function(){
  $('.rwtab-list ul a').click(function() {

    // Check for active
    $('.rwtab-list ul li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.rwtab-cols').removeClass('active');
    $(currentTab).addClass('active');

    return false;
  });
    $('.rwtab-list ul li:first-child a').trigger('click');
});