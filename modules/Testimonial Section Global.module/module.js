$(document).ready(function () {
    function setEqualHeight() {
        var maxHeight = 0;
        
        $('.testimonial-cltxt').css('height', 'auto'); // Reset height

        $('.testimonial-cltxt').each(function () {
            var thisHeight = $(this).outerHeight();
            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
            }
        });

        $('.testimonial-cltxt').css('height', maxHeight + 'px'); // Set equal height
    }

    setEqualHeight(); // Run on page load

    $(window).on('resize', function () {
        setEqualHeight(); // Run on window resize
    });
});
