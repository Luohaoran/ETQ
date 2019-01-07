function tu1() {
    document.getElementById("tu11").src=document.getElementById("smTu1").src
    // $("#tu11").attr("src")=$("smTu1").attr("src");
}
function tu2() {
    document.getElementById("tu11").src=document.getElementById("smTu2").src
}
function tu3() {
    document.getElementById("tu11").src=document.getElementById("smTu3").src
}
function tu4() {
    document.getElementById("tu11").src=document.getElementById("smTu4").src
}
function tu5() {
    document.getElementById("tu11").src=document.getElementById("smTu5").src
}
// function tu6() {
//     document.getElementById("tu11").src=document.getElementById("smTu1").src
// }
var i=1;
function da() {
    if (i==1) {
        i=0
        console.log(i)
        $(".divR").css({
            "width": "100%",
            "height": "1024px",
            "cursor": "url('../images/cursor-zoomout.png'),default"

        });
    }else if (i==0){
        i=1
        console.log(i);
        $(".divR").css({
            "width": "66%",
            "height": "728px",
            "cursor": "url('../images/cursor-zoomin.png'),default"
    });
    }

}

function bigimg(obj){
    //alert(parseInt(obj.style.zoom,10));
    var zoom = parseInt(obj.style.zoom,10)||100;
    console.log(zoom);
    zoom += event.wheelDelta / 12;
    if(zoom > 0 )
        obj.style.zoom=zoom+'%';
    return false;
}
