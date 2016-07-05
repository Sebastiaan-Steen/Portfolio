var sections = document.getElementsByTagName("section");
var pageheight = document.documentElement.scrollHeight;
var screenposition = window.pageYOffset;

addEventListener("scroll", function () {
    var previousposition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (previousposition > screenposition) {
            console.log("down");
        //    nexttarget();
        }
        else {
            console.log("up");
            
           // previoustarget();
        }
        previousposition = screenposition; 
}, false);

function nexttarget() {
    //console.log("scrolling down");
}

function previoustarget() {
    //console.log("scrolling up");
}


/*
    if (currentposition > screenposition) {
        console.log("scrolls up");
    }
    else if (currentposition < screenposition) {
        console.log("scrolls down");
    }
*/


//var runAnimation = setTimeout('scroll', 24);
/*
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
*/