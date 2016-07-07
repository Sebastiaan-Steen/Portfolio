var target = document.getElementsByClassName("scrollertarget")
//var pageheight = document.documentElement.scrollHeight;
//var previousposition = window || document.documentElement.scrollTop;
var currentOffset = window.pageYOffset;
var scrollcount = 0;


window.onscroll = function () {
    var newposition = window.scrollY;
    scrollcount = scrollcount + 1;
    console.log(scrollcount);

    if (newposition > currentOffset) {

    }
    else {

    }
    currentOffset = newposition;
    // window.scrollTo(0, target[i]);
}

/*
addEventListener("scroll", function () {

    var screenposition = window.pageYOffset;
    if (screenposition > previousposition) {
        console.log(scrollcount);
//      window.scrollTo(0, target[scrollcount].offsetTop);
    }
    else {

    }
    previousposition = screenposition;
}, false);
*/