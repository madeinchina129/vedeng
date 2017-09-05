/**
 * Created by Administrator on 2017/8/28.
 */
$(function () {
    $(".header-bar-right .item-toggle").on({
        mouseenter: function () {
            $(this).children(".toggle").addClass("active").next(".toggle-content").show();
            $(this).children(".toggle").children(".iconfont-unfold").addClass('arrow-down');
            $(this).children(".toggle").children(".iconfont-unfold").removeClass('arrow-up');
        },
        mouseleave: function () {
            $(this).children(".toggle").removeClass("active").next(".toggle-content").hide();
            $(this).children(".toggle").children(".iconfont-unfold").addClass('arrow-up');
            $(this).children(".toggle").children(".iconfont-unfold").removeClass('arrow-down');
        }
    });
    //分类菜单
    var mainCategoryList = $('.main-categories-list');
    if ($(mainCategoryList).attr('dataurl') != '' && typeof ($(mainCategoryList).attr('dataurl')) != 'undefined') {
        var categoryDataUrl = $(mainCategoryList).attr('dataurl');
    } else {
        var categoryDataUrl = 'include/category-tree.html';
    }
    $('.main-categories-list').load(categoryDataUrl, function () {
        $(".header-categories").on({
            mouseenter: function () {
                $(this).children(".main-categories-list").show();
            },
            mouseleave: function () {
                if ($(this).children(".main-categories-list").hasClass("js-show")) {} else {
                    $(this).children(".main-categories-list").hide();
                }
            }
        });
        //jQuery Plugin jQuery menuaim
        $(".main-categories-list").menuAim({
            activate: function (li) {
                var menuId = ($(li).attr("id") + "").split('_')[1];
                var scrolly = $(window).scrollTop();
                $(li).addClass("item-activated");
                $("#menuSub_" + menuId).show();
                if (scrolly > 180 && scrolly <= 584) {
                    $(".main-categories-list-content").css("top", scrolly - 178 + "px");
                } else {
                    $(".main-categories-list-content").css("top", -2 + "px");
                }
            },
            deactivate: function (li) {
                $(".main-categories-list-content").hide();
            },
            enter: function (li) {
                this.activate();
            },
            exit: function (li) {
                this.deactivate();
                $(li).removeClass("item-activated");
            }
        });
    });
    //列表页最多显示三行过滤条件的按钮控制
    for (var i = 0; i < $(".tag-content-inbox").length; i++) {
        var thisObj = $('.tag-content-inbox').eq(i);
        var btnActions = thisObj.parent().parent().parent().find('.actions');
        var btnMore = btnActions.children('.more');
        var btnLess = btnActions.children('.less');
        var thisHeight = thisObj.outerHeight(true);
        var outboxHeight = thisObj.parent('.tag-content').outerHeight(true);
        btnLess.hide();
        if (thisHeight > outboxHeight) {
            btnMore.show();
        } else {
            btnMore.hide();
        }
    }
});