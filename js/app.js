$(document).foundation();
$(function(){$(".scroll").click(function()
    {$("html,body").animate({scrollTop:$("#target").offset().top},"500");return false})})
