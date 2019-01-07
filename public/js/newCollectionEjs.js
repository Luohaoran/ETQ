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
});

$("#backTop").click(function () {
    console.log("1")
    $("html,body").animate({
        scrollTop:0
    },600)
});