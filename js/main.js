"use strict";
$(window).on('load', function(){

    //for responsive menu 
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var viewportWidth = $(window).width();
        if(viewportWidth > 900){
            if(scroll > 431){
                $('.side-bar').addClass('side-bar-sticky')
            }
            else{
                $('.side-bar').removeClass('side-bar-sticky')
            }
        }
    });

    var activSliderCount = 1;
    changeSlider(activSliderCount);

    $(".beforeImage").click(function(){
        activSliderCount -=1;
        changeSlider(activSliderCount);
    });

    $(".afterImage").click(function(){
        activSliderCount +=1;
        changeSlider(activSliderCount);
    });

    function changeSlider (n){
        var sliders = document.getElementsByClassName("my-slider");
        if(n > sliders.length){activSliderCount = 1}
        if(n < 1){activSliderCount = sliders.length}
        for (var i = 0; i < sliders.length; i++) {
            sliders[i].style.display = "none";
        }
        sliders[activSliderCount-1].style.display = "block";
    }
   
});



