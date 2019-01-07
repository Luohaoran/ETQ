window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    if (t >= 500) {
        div1.style.opacity = "1";
        div1.style.marginTop="100px";
        if (t>=800){
            div2.style.opacity = "1";
            div2.style.marginTop="100px" ;
            if (t>=1500){
                div3.style.opacity="1";
                div3.style.marginTop="100px";
            }
        }
    }
};
$(document).ready(function () {//滚动条事件
    $(window).scroll(function () {
        var topp=$(document).scrollTop();
        if (topp>0){
            $(".header").css({
                "background-color":"rgba(255,255,255,0.8)",
                "border":"1px solid rgba(0,0,0,0.1)",
                "height":"80px"
            });
            $(".baibai").css({
                // "color":"black"
            });
        } else {
            $(".header").css({
                "border":"1px solid rgba(0,0,0,0.0)",
                "background-color":"rgba(255,255,255,0)"
            });
            $(".baibai").css({
                // "color":"white"
            });
        }
    })
});
$(".xinshoucang").hover(function () {//第一个文字移入效果
    $(".header").css({
        "height":"550px",
        "background-color":"white"
    });
    $(".baibai").css({
        "color":"black"
    });
    $(".one").css({
        "z-index":"10",
        "opacity":"1",
        "top":"20px"
    });
    $(".two").css({
        "z-index":"0",
        "opacity":"0",
    });
    $(".login").css({
        "height":"0",
        "width":"0"
    })
});
$(".qikan").hover(function () {//第二个文字移入效果
    $(".header").css({
        "height":"550px",
        "background-color":"white"
    });
    $(".baibai").css({
        "color":"black"
    });
    $(".one").css({
        "z-index":"0",
        "opacity":"0",
    });
    $(".two").css({
        "z-index":"10",
        "opacity":"1",
        "top":"20px"
    });
    $(".login").css({
        "height":"0",
        "width":"0"
    })
});
$(".header").hover(function () {//导航栏移出

},function () {
    $(".header").css({
        "height":"80px"
    });
    $(".two").css({
        "top":"50px",
        "opacity":"0",
    });
    $(".one").css({
        "top":"50px",
        "opacity":"0",
    });
    $(".search").css({
        "z-index":"-1",
        "opacity":"0"
    });
    $(".help").css({
        "z-index":"-1",
        // "display":"none",
        "opacity":"0"
    });
    $(".login").css({
        "height":"0",
        "width":"0"
    })
});
$(".sousuo").click(function () {//搜索框弹出
    $(".search").css({
        "z-index":"998",
        "display":"unset",
        "opacity":"1"
    });
    $(".header").css({
        "height":"300px"
    });
    $(".login").css({
        "height":"0",
        "width":"0"
    });
    $(".one").css({
        "top":"50px",
        "opacity":"0",
    });
    $(".two").css({
        "top":"50px",
        "opacity":"0",
    });
});
$(".end").click(function () {
    console.log("Ddddd");
    $(".search").css({
        "z-index":"-1",
        "opacity":"0"
    });
    $(".header").css({
        "height":"80px"
    });
    $(".help").css({
        "z-index":"-1",
        // "display":"none",
        "opacity":"0"
    });
});
$(".bangzhu").click(function () {//帮助弹出
    console.log("ddd");
    $(".help").css({
        "z-index":"998",
        "display":"unset",
        "opacity":"1"
    });
    $(".header").css({
        "height":"300px"
    });
    $(".login").css({
        "height":"0",
        "width":"0"
    })
});
$(".user").click(function () {
    $(".header").css({
        // "background-color":"white"
    });
    $(".login").css({
        "width":"300px",
        "height":"280px"
    })
});
$(".login").hover(function () {

},function () {
    $(".login").css({
        "width":"0",
        "height":"0"
    })
});