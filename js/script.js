
$(document).ready(function() {
    $(".arrow-container").click(function() {
        $('html, body').animate({
            scrollTop: $("#what-we-do").offset().top
        }, 1000);
    });

});

var ee = new EventEmitter();
var scrollStartListener = function (slideNumber) {
  
}
var scrollEndListener = function (slideNumber) {
    
}
ee.addListener('scrollStart', scrollStartListener);
ee.addListener('scrollEnd', scrollEndListener);
var smartscroll = $.smartscroll({
    sectionWrapperSelector: ".section-wrapper",
    sectionClass: "section",
    eventEmitter: ee,
    animationSpeed: 1000,
});


