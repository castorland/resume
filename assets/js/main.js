jQuery( document ).ready(function( $ ) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/*    PORTFOLIO FILTER
/*-----------------------------------------------------------------------------------*/
$('#Container').mixItUp();

$(".main-nav > li").find("active").removeClass("active");
switch(window.location.pathname){
        case('/resume'):
            $(".main-nav").find(".active").removeClass("active");
            $(".main-nav > li:nth-child(2)").addClass("active");
            break;
        case('/contact'):
            $(".main-nav").find(".active").removeClass("active");
            $(".main-nav > li:nth-child(3)").addClass("active");
            break;
        default:
            $(".main-nav").find(".active").removeClass("active");
            $(".main-nav > li:nth-child(1)").addClass("active");
            break;
    }
});
