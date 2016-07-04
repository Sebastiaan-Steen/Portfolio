

var sections = document.getElementsByTagName("section");
//var runAnimation = setTimeout('scroll', 24);

window.addEventListener("scroll", function() {
    var previousTop = window.pageYOffset;
    for (var i = 0; i < sections.length; i++) {
        if (st > previousTop) {
            console.log("scrolls down");
            var st = window || document.documentElement.scrollTop;
          //  window.scrollTo(0, sections[i].pageYoffset);
        }
 
        else {
            console.log("scrolls up");
        //    window.scrollTo(0, getSections[i].pageYoffset);
        }
    }
    previousTop = st;
}, false);

