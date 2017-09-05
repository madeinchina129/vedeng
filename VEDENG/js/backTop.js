/**
 * Created by Administrator on 2017/8/26.
 */
$(function(){
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('#imgBtn-to-top').fadeIn();
        }
        else {
            $('#imgBtn-to-top').fadeOut();
        }
    });
    SetFixedButtonsAction();
}());
function SetFixedButtonsAction() {
    $("#imgBtn-to-top").css("display","none");
    window.onscroll = function(){
        console.log(1)
        $("#imgBtn-to-top").css("display","block");

    }
    $("#imgBtn-to-top").on("click", function () {
        $("#imgBtn-to-top").css("backgroundColor","red");

        var _ele = document.documentElement.scrollTop ? document.documentElement : document.body;

        $(_ele).animate({"scrollTop": 0}, 300,function(){

            $("#imgBtn-to-top").css("display","none");
        });

    });
}