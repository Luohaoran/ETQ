window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var div4 = document.getElementById("div4");
    var div5 = document.getElementById("div5");
    var div6 = document.getElementById("div6");
    var div7 = document.getElementById("div7");
    var div8 = document.getElementById("div8");
    if (t >= 500) {
        div1.style.opacity = "1";
        div1.style.marginTop="10px";
        if (t>=800){
            div2.style.opacity = "1";
            div2.style.marginTop="10px";
            if (t>=1500){
                div3.style.opacity="1";
                div3.style.marginTop="10px";
                if (t>=2200){
                    div4.style.opacity="1";
                    div4.style.marginTop="10px";
                    if (t>=3300){
                        div5.style.opacity="1";
                        div5.style.marginTop="10px";
                        if (t>=4400){
                            div6.style.opacity="1";
                            div6.style.marginTop="10px";
                            if (t>=5500){
                                div7.style.opacity="1";
                                div7.style.marginTop="10px";
                            }
                        }
                    }
                }
            }
        }
    }
};