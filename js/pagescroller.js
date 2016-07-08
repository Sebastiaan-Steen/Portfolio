var target = document.getElementsByClassName("scrollertarget")
var scrollcount = 0;

window.onscroll = function () {
    var currentOffset = target[scrollcount].offsetTop;
    var newposition = window.pageYOffset;

    console.log(scrollcount);

    if (newposition > currentOffset) {
        scrollcount = scrollcount + 1;
        window.scrollTo(0, target[scrollcount].offsetTop);
    }
    if (newposition < currentOffset) {
        scrollcount = scrollcount - 1;
        window.scrollTo(0, target[scrollcount].offsetTop);
    }
}