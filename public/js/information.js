$(function(){
    $("#input").focus(function(){
        $(this).css("background-color","white");
    });
    $("#input").blur(function(){
        $(this).css("background-color","rgba(255, 255, 255, 0.5)");
    });
});
