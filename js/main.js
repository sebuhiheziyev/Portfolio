"use strict";
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