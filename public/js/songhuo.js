$(function(){
    $("#input").focus(function(){
        $(this).css("background-color","white");
    });
    $("#input").blur(function(){
        $(this).css("background-color","rgba(255, 255, 255, 0.5)");

    });
});
// $("#hour").mouseover(function () {
//     $("#jian").css("display","none");
//     $("#jain1").css("display","inline-block");
// });
// $("#hour").mouseout(function () {
//     $("#jian1").css("display","none");
//     $("#jain").css("display","inline-block");
// });
