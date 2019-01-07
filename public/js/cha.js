$(function(){
    $("#input1").focus(function(){
        $(this).css("background-color","white");
    });
    $("#input1").blur(function(){
        $(this).css("background-color","rgba(255, 255, 255, 0.5)");
    });
});
// $("#jian").mouseover(function () {
//     $("#jian").css("display","none");
//     $("#jain1").css("display","inline-block")
// });
// $("#jian1").mouseout(function () {
//     $("#jian1").css("display","none");
//     $("#jain").css("display","inline-block")
// });