window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    if (t >= 500) {
        div1.style.opacity = "1";
        div1.style.marginTop="10px";
        if (t>=800){
            div2.style.opacity = "1";
            div2.style.marginTop="10px";
            if (t>=1500){
                div3.style.opacity="1";
                div3.style.marginTop="10px";
            }
        }
    }
};