// 高度控制
$(function () {
    $("#header1").css("opacity","1");
    $(window).scroll(function () {
        // console.log($(window).scrollTop())
        if($(window).scrollTop()>300){
            $("#backTop").css("display","inline-block")
        }else{
            $("#backTop").css("display","none")
        }
        if($(window).scrollTop()>350&&$(window).scrollTop()<1280){
            $(".height15").css("opacity","1")
        }else{
            $(".height15").css("opacity","0")
        }
        if($(window).scrollTop()>640){
            $("#height30").css("opacity","1")
        }else{
            $("#height30").css("opacity","0")
        }
        if($(window).scrollTop()>800){
            $("#header1").css("opacity","0");
        }else{
            $("#header1").css("opacity","1");
        }
    })
})
var a=2;
$(".leftBtn").click(function () {
    if($(this).parent().attr("id")=="smImg1"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg01-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg2"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg02-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg3"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg03-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg4"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg04-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg5"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg05-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg6"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg06-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg7"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg07-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg8"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg08-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg9"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg09-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg10"){
        a--;
        if(a==0){
            a=7
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg10-"+a+".jpg)");
    }

});
$(".rightBtn").click(function () {
    if($(this).parent().attr("id")=="smImg1"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg01-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg2"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg02-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg3"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg03-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg4"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg04-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg5"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg05-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg6"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg06-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg7"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg07-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg8"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg08-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg9"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg09-"+a+".jpg)");
    }else if($(this).parent().attr("id")=="smImg10"){
        a++;
        if(a==8){
            a=1
        }
        $(this).parent().css("background-image","url(../images/newcollection/smImg10-"+a+".jpg)");
    }
});
$(".sm-All,.sm-All1").mouseleave(function () {
    a=2;
    $("#smImg1").css("background-image","url(../images/newcollection/smImg01-"+1+".jpg)");
    $("#smImg2").css("background-image","url(../images/newcollection/smImg02-"+1+".jpg)");
    $("#smImg3").css("background-image","url(../images/newcollection/smImg03-"+1+".jpg)");
    $("#smImg4").css("background-image","url(../images/newcollection/smImg04-"+1+".jpg)");
    $("#smImg5").css("background-image","url(../images/newcollection/smImg05-"+1+".jpg)");
    $("#smImg6").css("background-image","url(../images/newcollection/smImg06-"+1+".jpg)");
    $("#smImg7").css("background-image","url(../images/newcollection/smImg07-"+1+".jpg)");
    $("#smImg8").css("background-image","url(../images/newcollection/smImg08-"+1+".jpg)");
    $("#smImg9").css("background-image","url(../images/newcollection/smImg09-"+1+".jpg)");
    $("#smImg10").css("background-image","url(../images/newcollection/smImg10-"+1+".jpg)");
});
$("#sm1").mouseover(function () {
    if(document.getElementById("smImg1").style.backgroundImage=='url("./images/newcollection/smImg01-1.jpg")'){
        $("#smImg1").css("background-image","url(../images/newcollection/smImg01-"+2+".jpg)");
    }
});
$("#sm2").mouseover(function () {
    if(document.getElementById("smImg2").style.backgroundImage=='url("./images/newcollection/smImg02-1.jpg")') {
        $("#smImg2").css("background-image", "url(../images/newcollection/smImg02-" + 2 + ".jpg)");
    }
});
$("#sm3").mouseover(function () {
    if(document.getElementById("smImg3").style.backgroundImage=='url("./images/newcollection/smImg03-1.jpg")') {
        $("#smImg3").css("background-image", "url(../images/newcollection/smImg03-" + 2 + ".jpg)");
    }
});
$("#sm4").mouseover(function () {
    if(document.getElementById("smImg4").style.backgroundImage=='url("./images/newcollection/smImg04-1.jpg")') {
        $("#smImg4").css("background-image", "url(../images/newcollection/smImg04-" + 2 + ".jpg)");
    }
});
$("#sm5").mouseover(function () {
    if(document.getElementById("smImg5").style.backgroundImage=='url("./images/newcollection/smImg05-1.jpg")') {
        $("#smImg5").css("background-image", "url(../images/newcollection/smImg05-" + 2 + ".jpg)");
    }
});
$("#sm6").mouseover(function () {
    if(document.getElementById("smImg6").style.backgroundImage=='url("./images/newcollection/smImg06-1.jpg")') {
        $("#smImg6").css("background-image", "url(../images/newcollection/smImg06-" + 2 + ".jpg)");
    }
});
$("#sm7").mouseover(function () {
    if(document.getElementById("smImg7").style.backgroundImage=='url("./images/newcollection/smImg07-1.jpg")') {
        $("#smImg7").css("background-image", "url(../images/newcollection/smImg07-" + 2 + ".jpg)");
    }
});
$("#sm8").mouseover(function () {
    if(document.getElementById("smImg8").style.backgroundImage=='url("./images/newcollection/smImg08-1.jpg")') {
        $("#smImg8").css("background-image", "url(../images/newcollection/smImg08-" + 2 + ".jpg)");
    }
});
$("#sm9").mouseover(function () {
    if(document.getElementById("smImg9").style.backgroundImage=='url("./images/newcollection/smImg09-1.jpg")') {
        $("#smImg9").css("background-image", "url(../images/newcollection/smImg09-" + 2 + ".jpg)");
    }
});
$("#sm10").mouseover(function () {
    if(document.getElementById("smImg10").style.backgroundImage=='url("./images/newcollection/smImg10-1.jpg")') {
        $("#smImg10").css("background-image", "url(../images/newcollection/smImg10-" + 2 + ".jpg)");
    }
});
$("#backTop").click(function () {
    console.log("1")
    $("html,body").animate({
        scrollTop:0
    },600)
});