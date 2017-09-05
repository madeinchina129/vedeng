/**
 * Created by Administrator on 2017/8/22.
 */
/*function $(id){
    return document.getElementById(id);
}*/
$("header-categories").onmousemove = function(){
    $("hide").style.display = "block";
}
$("header-categories").onmouseout = function(){
    $("hide").style.display = "none";
}
$("item-toggle").onmousemove = function(){
    $("toggle-list").style.display = "block";
}
$("item-toggle").onmouseout = function(){
    $("toggle-list").style.display = "none";
}
$("last-toggle").onmousemove = function(){
    $("toggle-qr-content").style.display = "block";
}
$("last-toggle").onmouseout = function(){
    $("toggle-qr-content").style.display = "none";
}

$("menuItem_1").onmousemove = function(){
    $("menuSub_1").style.display = "block";
}
$("menuItem_1").onmouseout = function(){
    $("menuSub_1").style.display = "none";
}
$("menuItem_2").onmousemove = function(){
    $("menuSub_2").style.display = "block";
}
$("menuItem_2").onmouseout = function(){
    $("menuSub_2").style.display = "none";
}
$("menuItem_3").onmousemove = function(){
    $("menuSub_3").style.display = "block";
}
$("menuItem_3").onmouseout = function(){
    $("menuSub_3").style.display = "none";
}
$("menuItem_4").onmousemove = function(){
    $("menuSub_4").style.display = "block";
}
$("menuItem_4").onmouseout = function(){
    $("menuSub_4").style.display = "none";
}

$("menuItem_6").onmousemove = function(){
    $("menuSub_6").style.display = "block";
}
$("menuItem_6").onmouseout = function(){
    $("menuSub_6").style.display = "none";
}
$("menuItem_7").onmousemove = function(){
    $("menuSub_7").style.display = "block";
}
$("menuItem_7").onmouseout = function(){
    $("menuSub_7").style.display = "none";
}
$("menuItem_8").onmousemove = function(){
    $("menuSub_8").style.display = "block";
}
$("menuItem_8").onmouseout = function(){
    $("menuSub_8").style.display = "none";
}
$("menuItem_9").onmousemove = function(){
    $("menuSub_9").style.display = "block";
}
$("menuItem_9").onmouseout = function(){
    $("menuSub_9").style.display = "none";
}


$("titleSelected").onmousemove = function(){
    $("contentBaike").style.display = "block";
    $("contentLast").style.display = "none";
    $("titleSelected").style.background = "white";
}
$("titleSelected").onmouseout = function(){
    //$("contentBaike").style.display = "none";
    $("titleSelected").style.background = "#F9F9F9";
}
$("titleLast").onmousemove = function(){
    $("contentLast").style.display = "block";
    $("titleLast").style.background = "white";
    $("contentBaike").style.display = "none";
}
$("titleLast").onmouseout = function(){
    //$("contentLast").style.display = "none";
    $("titleLast").style.background = "#F9F9F9";
}



