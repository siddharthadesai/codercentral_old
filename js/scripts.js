/**
 * Created by Daniel on 7/15/2015.
 */



jQuery(document).ready(function(){

    htmlCourse();

    introduction();
    setTimeout(function(){
        homeAnimation()
    },8000);
});

function introduction(){
    var introText=$(".element");
    var outro=$('.outro');
    introText.typed({
        strings: ["} Coder.Central();"],
        // typing speed
        typeSpeed: 80,
        // time before typing starts
        startDelay: 400,
        loopCount: false,
        // show cursor
        showCursor: true,
        callback:function(){
            $('.typed-cursor').fadeOut('medium');
        }
    });

    var winHeight= $(window).height();
    //var winWidth= $(window).width();
    var introHeight=(winHeight/2-100);
    $('#intro').css({
        'top': introHeight+'px'
    });
    setTimeout(function(){
        introText.fadeOut('medium');
        outro.typed({
            strings: ["> Be Inspired."],
            // typing speed
            typeSpeed: 80,
            // time before typing starts
            startDelay: 150,
            loopCount: false,
            // show cursor
            showCursor: true,
            callback: function() {
                setTimeout(function(){
                    $('#intro').fadeOut();
                },1000);
            }
        });
    },5000);
}


function htmlCourse(){
    var winHeight= $(window).height();
    var winWidth = $(window).width();
    var actualHeight=(winHeight/10*7);

}
function homeAnimation(){
    $('#home').fadeIn('slow');
}