$(document).ready(function () {//滚动条事件
   $(window).scroll(function () {
       var topp=$(document).scrollTop();
       if (topp>0){
           $("#nav").css({
               "background-color":"rgba(255,255,255,0.9)",
               "border":"1px solid rgba(0,0,0, 0.2)"
           });
           $(".thin1").css("color","black")
       } else {
           $("#nav").css({
               "background-color":"rgba(255,255,255,0)",
               "border":"1px solid rgba(0,0,0, 0)"
           });
           $(".thin1").css("color","white")
       }
   })
});
$(".thin1").hover(//字体移入效果
    function () {
    $(".thin1").css("color","black");
        $("#nav").css({
            "background-color":"white"
        });
});
function end(){//点击关闭
    $("#search").css({
        "height":"0px"
    });
    $("#help").css({
        "height":"0px"
    });
    $("#bgs").css({
        "display":"none"
    })
}
$("#nav").hover(//nav移入
    function () {
    },function () {
        $("#oneson").css({"margin-top":"120px",
            "opacity":"0",
        });
        $("#twoson").css("margin-top","120px");
        $("#nav").css({"height":"80px",
        "background-color":"rgba(0,0,0,0)"
        });
        $(".thin1").css("color","white");
        // $("#gouwuche").css({
        //     "height":"0",
        //     "padding":"0"
        // });
        // $("#login").css({"height":"0px",
        //     "padding":"0px",
        //     "opacity": "0",
        // });
        $("#bgs").css({
            "display":"none"
        })
    }
);
$("#one").hover(//第一个子菜单
    function () {
        $("#nav").css({"height":"650px",
        "background-color":"white"
        });
        $("#one").css({
            "overflow":"visible",
        });
        $("#two").css({
            "overflow":"hidden",
        });
        $("#oneson").css({"margin-top":"80px",
            "opacity":"1",
        });
        $("#twoson").css({
            "opacity":"0"
        });
        $("#bgs").css({
            "display":"unset"
        })
    }
);
$("#two").hover(//第二个子菜单
    function () {
        $("#nav").css({"height":"650px",
            "background-color":"white"
        });
        $("#one").css({
            "overflow":"hidden",
        });
        $("#two").css({
            "overflow":"visible",
        });
        $("#oneson").css({
            "opacity":"0",
        });
        $("#twoson").css({"margin-top":"80px",
            "opacity":"1"
        });
        $("#bgs").css({
            "display":"unset"
        })
    }
);
$("#sousuo").click(function () {//搜索
   $("#search").css({
       "height":"300px"
   });
    $("#gouwuche").css({
        "height":"0",
        "padding":"0"
    });
    $("#login").css({"height":"0px",
        "padding":"0px",
        "opacity": "0",
    });
    $(".thin1").css({
        "color":"black"
    });
    $("#bgs").css({
        "display":"unset"
    })
});
$("#helpson").click(function () {//帮助
    $("#help").css({
       "height":"300px"
    });
    $("#gouwuche").css({
        "height":"0",
        "padding":"0"
    });
    $("#login").css({"height":"0px",
        "padding":"0px",
        "opacity": "0",
    });
    $(".thin1").css({
        "color":"black"
    });
    $("#bgs").css({
        "display":"unset"
    })
});

$("#myuser").click(function () {//登录框
    $("#login").css({"height":"330px",
        "padding":"50px",
        "opacity": "1",
    });
    $("#gouwuche").css({
        "height":"0",
        "padding":"0"
    })
});
$("#login").hover(function () {
    $("#nav").css({
        "background-color":"white"
    });
    $(".thin1").css("color","black");
},function () {
    $("#nav").css({
        "background-color":"rgba(0,0,0,0)"
    });
    $("#login").css({"height":"0px",
        "padding":"0px",
        "opacity": "0",
    });
    $("#bgs").css({
        "display":"none"
    })
});
$(".num").click(function () {//购物车
    $("#gouwuche").css({
        "height":"200px",
        "padding":"50px"
    });
    $("#login").css({"height":"0px",
        "padding":"0px",
        "opacity": "0",
    });
    $("#nav").css({
        "background-color":"white",
    });
    $(".thin1").css({
        "color":"black"
    })
});
$("#gouwuche").hover(function () {
    $("#nav").css({
        "background-color":"white"
    });
    $(".thin1").css({
        "color":"black"
    })

},function () {
    $("#gouwuche").css({
        "height":"0",
        "padding":"0"
    })
});
