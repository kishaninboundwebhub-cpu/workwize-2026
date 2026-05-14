$(document).ready(function(){	
	$('ul.hrroots li a').click(function(){
     var tab = $(this).attr('href');
		 $(tab).addClass('active').siblings().removeClass('active');
	});
 
});

$(document).ready(function() {
  setTimeout(function() {
  $('.wrkglos-cols').each(function() { 
    var $column = $(this);
    var $postBoxes = $column.find('.blglisting-cltitle');
    var totalCount = $postBoxes.length;
    var itemsToShowInitially = 8;
    var itemsPerLoad = 100;

    // Hide all items beyond the initial count using CSS
    $postBoxes.slice(itemsToShowInitially).addClass('hidden');

    // Append total count
//     $column.append('<span class="totalnumber">' + totalCount + '</span>'); 
    $column.find('.wrkalph').append('<span class="totalnumber">' + totalCount + '</span>'); 

    // Attach click event to show more button
    $column.append('<button class="showMore">Show More</button>');
    $column.find('.showMore').on("click", function(e){
      e.preventDefault();
      $column.find('.blglisting-cltitle.hidden').slice(0, itemsPerLoad).removeClass('hidden').slideDown(250);
      if($column.find('.blglisting-cltitle.hidden').length == 0) {
        $(this).hide();
        $column.find('.showLess').show();
      }
    });
   
    // Attach click event to show less button
    $column.append('<button class="showLess" style="display:none;">Show Less</button>');
    $column.find('.showLess').on("click", function(e){
      e.preventDefault();
      var $hiddenItems = $column.find('.blglisting-cltitle:not(.hidden)');
      var numItemsToHide = $hiddenItems.length - itemsToShowInitially;
      $hiddenItems.slice(-numItemsToHide).addClass('hidden').slideUp(250);
      $(this).hide();
      $column.find('.showMore').show();
    });
    if ($column.find('.blglisting-cltitle.hidden').length === 0) {
      $column.find('.showMore').hide();
    } else {
      $column.find('.showLess').hide();
    }
    
    
  });
}, 800);

  
  
  
    $('.blglisting-cltitle').each(function() {
       
        var title = $(this).data('text'); 
        var firstLetter = title.charAt(0).toLowerCase();  
        var correspondingColumn = $('#' + firstLetter + ' .wrkglos-content');

        if (correspondingColumn.length > 0) {
            $(this).appendTo(correspondingColumn); // Move the element to the corresponding column
          
        } else {
            // If the column doesn't exist, create it and append the element
            var columnId = firstLetter;
            $('<div id="' + columnId + '" class="wrkglos-content"></div>').appendTo('.columns');
            $(this).appendTo($('#' + columnId));
          
        }
      
       
    });
    
    $('.blglisting-cltitle').each(function() {
      
    var title = $(this).data('text'); 
    if (!isNaN(parseInt(title.charAt(0)))) {
        var correspondingColumn = $('#num .wrkglos-content');
        if (correspondingColumn.length > 0) {
            $(this).appendTo(correspondingColumn); // Move the element to the 'num' column
          
        } else {
            // If the 'num' column doesn't exist, create it and append the element
            $('<div id="num" class="wrkglos-content"></div>').appendTo('.columns');
            $(this).appendTo($('#num'));
            
        }
    }
  });
  
  
  
});
