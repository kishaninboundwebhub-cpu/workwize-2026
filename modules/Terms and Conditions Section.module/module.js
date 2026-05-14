$(document).ready(function () {
  var $content = $(".tearmcondoConte");
  var $tocList = $(".tearmcondoRtable ul");
  $tocList.empty(); // clear default <li>

  // 1️⃣ Build the TOC automatically
  $content.find("h2").each(function () {
  var $h2 = $(this);
  var titleText = $h2.text().trim();

  // create safe lowercase ID
  var id = titleText.toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");

  var smallWords = ["of", "and", "the", "in", "on", "for", "at", "to", "with", "a", "an"];  
  var romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];
  var displayTitle = titleText
  .split(" ")
  .map(function (word, index) {
    var lowerWord = word.toLowerCase();

    // 🟩 Keep Roman numerals uppercase
    if (romanNumerals.includes(lowerWord)) { return lowerWord.toUpperCase();}

    // 🟦 Keep small words lowercase (except first)
    if (smallWords.includes(lowerWord) && index !== 0) { return lowerWord;}

    // 🟧 Normal Title Case
    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
  }).join(" ");     
    
  // convert to Capitalized Case for display
//   var displayTitle = titleText.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });

  // set ID and append link
  $h2.attr("id", id);
  $tocList.append('<li><a href="#' + id + '">' + displayTitle + '</a></li>');
});


  // 2️⃣ Smooth scroll to section
  $(".tearmcondoRtable ul li a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var offsetTop = $(target).offset().top - 80; // adjust for fixed header if needed

    $("html, body").animate({ scrollTop: offsetTop }, 600);
  });

  // 3️⃣ Highlight active link while scrolling
  var $sections = $content.find("h2");
  var $links = $(".tearmcondoRtable ul li a");

  $(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop() + 120; // adjust offset for better accuracy
    var currentId = null;

    $sections.each(function () {
      var $section = $(this);
      var sectionTop = $section.offset().top;
      if (scrollPos >= sectionTop) {
        currentId = $section.attr("id");
      }
    });

    if (currentId) {
      $links.removeClass("active");
      $links.filter('[href="#' + currentId + '"]').addClass("active");
    }
  });
  
  
//   $('.tearmcondoCaitt h2').on('click', function (event) {
//      event.preventDefault();
//       var content = $(this).next('.tearmcondoCtext');
//       var tile = $(this);
    
         
//       if (content.hasClass('open')) {
//         content.removeClass('open').css('height', 0);
//         tile.removeClass('active');
//       } else {
//         // Close others
//         $('.tearmcondoCtext.open').removeClass('open').css('height', 0);
//         $('.tearmcondoCaitt h2.active').removeClass('active');

//         // Open current one
//         var fullHeight = content.prop('scrollHeight') + "px";
//         content.addClass('open').css('height', fullHeight);
//         tile.addClass('active');
          
//       }
            
//       var offsetTop1 = $(tile).offset().top - 10 ; 
//       $("html, body").animate({ scrollTop: offsetTop1 }, 600);
//     });

 
  $(document).on("click", ".tearmcondoCaitt h2", function (e) {
    e.preventDefault();

    let $title = $(this);
    let $content = $title.next(".tearmcondoCtext");

    let alreadyOpen = $content.hasClass("open");

    // Scroll first
    $('html, body').animate({
        scrollTop: $title.offset().top - 15
    }, 300);

    setTimeout(function () {

        if (alreadyOpen) {
            // CLOSE
            $content.removeClass("open").slideUp(250);
            $title.removeClass("active");

        } else {
            // CLOSE other open items
            $(".tearmcondoCtext.open").removeClass("open").slideUp(250);
            $(".tearmcondoCaitt h2.active").removeClass("active");

            // OPEN clicked FAQ
            $content.addClass("open").slideDown(250);
            $title.addClass("active");
        }

    }, 310);
});


  
 function tocToggleHandler() {
  if ($(window).width() <= 991) {
    // Enable toggle on click
    $('.tearmcondoRtable h3').off('click').on('click', function () {
      $(this).toggleClass('active');
      $(this).next('ul').stop().slideToggle(200);
    });
  } else {
    // Disable toggle & always show the list
    $('.tearmcondoRtable h3').off('click').removeClass('active');
    $('.tearmcondoRtable ul').show();
  }
}

// $(document).ready(function () {
//   tocToggleHandler();
// });

$(window).on('resize', function () {
  tocToggleHandler();
});
$(window).on('load', function () {
  tocToggleHandler();
});
  
});