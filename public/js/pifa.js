$(function(){
    $("#input1").focus(function(){
        $(this).css("background-color","white");
    });
    $("#input1").blur(function(){
        $(this).css("background-color","rgba(255, 255, 255, 0.5)");
    });
});