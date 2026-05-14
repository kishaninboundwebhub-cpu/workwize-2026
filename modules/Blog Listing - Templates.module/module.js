$(document).ready(function() {
  // Store filter for each group
var buttonFilters = {};
var buttonFilter;
// Quick search regex
var qsRegex;
// Flag to check if user interaction has occurred
var userInteracted = false;

// Init Isotope for the template wrapper
        var $grid = $('.blglst-templat-rows').isotope({
                itemSelector: '.blglst-templat-cols',
                layoutMode: 'fitRows'
            });


// Isotope reveal and hide modifications
var itemReveal = Isotope.Item.prototype.reveal;
Isotope.Item.prototype.reveal = function () {
  itemReveal.apply(this, arguments);
  $(this.element).removeClass('isotope-hidden');
};

var itemHide = Isotope.Item.prototype.hide;
Isotope.Item.prototype.hide = function () {
  itemHide.apply(this, arguments);
  $(this.element).addClass('isotope-hidden');
};

// Filter button click
           $('.button-group').on('click', 'li', function () {
                var $this = $(this);
                var filterGroup = $this.parents('.button-group').attr('data-filter-group');

                // Set filter for group
                buttonFilters[filterGroup] = $this.attr('data-filter');

                // Combine filters
                var buttonFilter = concatValues(buttonFilters);

                // Apply the Isotope filter
                $grid.isotope({ filter: buttonFilter });

                // Show/hide empty sections
                $('.blglst-templat-inner').each(function () {
                    var $section = $(this);
                    // Check if at least one .blglst-templat-cols is NOT hidden
                    var hasVisibleTemplates = $section.find('.blglst-templat-cols').not('.isotope-hidden').length > 0;

                    if (hasVisibleTemplates) {
                        $section.removeClass('hidden').show();
                    } else {
                        $section.addClass('hidden').hide();
                    }
                });

                // Show no results message
                showNoResultMessage();
  });
// Change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'li', function () {
    userInteracted = true; // Set user interaction flag
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});

// Flatten object by concatenating values
function concatValues(obj) {
  var value = '';
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

// Show no result message
function showNoResultMessage() {
  if (!$grid.data('isotope').filteredItems.length) {
    $('.noResult').show();
  } else {
    $('.noResult').hide();
  }
}



 

  
$(document).on("click", ".blglstFilll.filters label", function(m) {
       m.stopPropagation();
     $(this).next().slideToggle();
});


$('.blglstFilll.filters').on('click', 'li', function() {
  $(this).parent().prev("label").text($(this).text());
  $(this).parents('ul').slideUp();

});


  
      
     
});
