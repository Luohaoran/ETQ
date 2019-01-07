window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var div2 = document.getElementById("div2");
    if (t >= 500) {
        div2.style.opacity = "1";
        div2.style.marginTop="100px";
    }
};