 function updateTabPosition(isResizing = false) {
    var $activeTabBtn = $(".featuresTabn.active");
    if (!$activeTabBtn.length) return;

    var targetSelector = $activeTabBtn.attr("data-value");
    var $targetContent = $(targetSelector);
    var $wrapper = $(".featuresLinn");
    var gap = 32;
    var totalOffset = 0;

    // 1. Calculate vertical scroll offset
    $targetContent.prevAll(".featuresRiConnew").each(function() {
        totalOffset += $(this).outerHeight() + gap;
    });

    // 2. DYNAMIC HEIGHT CALCULATION
    // This fetches the actual height of the currently active content block
    var finalHeight = $targetContent.outerHeight();

    if (isResizing) {
        $(".featuresRiConnew, .featuresRnins").css("transition", "none");
    }

    // 3. Apply moves
    $(".featuresRiConnew").css({
        "transform": "translateY(-" + totalOffset + "px)"
    });

    $wrapper.css({
        "height": finalHeight + "px"
    });

    if (isResizing) {
        // Trigger reflow to restart animations after turning off "none"
        $wrapper[0].offsetHeight; 
        $(".featuresRiConnew").css("transition", "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease");
        $wrapper.css("transition", "height 0.6s cubic-bezier(0.25, 1, 0.5, 1)");
    }
}

    $(".featuresTabn").on("click", function (e) {
        e.preventDefault();
        $(".featuresTabn").removeClass("active");
        $(this).addClass("active"); 

        $(".featuresRiConnew").removeClass('active');
        $($(this).attr("data-value")).addClass("active");

        updateTabPosition();
    });

    var resizeTimer;
    $(window).on("resize", function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            updateTabPosition(true);
        }, 50);
    });

    $(".featuresTabn:first-child").trigger("click");


 $('.featre3BotSlider').slick({
      fade:true,
      dots: false,
      arrows: false,
      infinite: true,
      autoplay:true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
   });


 $('.featre4Slider').slick({
      fade:true,
      dots: false,
      arrows: false,
      infinite: true,
      autoplay:true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
   });

