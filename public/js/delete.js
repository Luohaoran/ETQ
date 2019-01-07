var a=0;
function you() {
    if (a==0){
        a=1;
        $(".fei").css({
            "display":"block"
        })
        console.log(a)
    } else if (a==1) {
        a=0;
        $(".fei").css({
            "display":"none"
        })
    }
}