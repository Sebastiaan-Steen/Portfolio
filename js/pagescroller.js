var target = document.getElementsByClassName("scrollertarget")
var pageheight = document.documentElement.scrollHeight;
var previousposition = window || document.documentElement.scrollTop;
var scrollcount = 0;

addEventListener("scroll", function () {
    var screenposition = window.pageYOffset;

    if (screenposition > previousposition) {
        console.log(scrollcount);
        scrollcount = scrollcount + 1;
        if (scrollcount > target.length) {
            scrollcount = target.length;
        }
        window.scrollTo(0, target[scrollcount].offsetTop);
    }
    else {
        
    }
    previousposition = screenposition;
}, false);