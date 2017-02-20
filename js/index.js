$(function() {
    //图片切换
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false,
        t = 3000;
    length = $('.slider-panel').length;
    $('.slider-panel:not(:first)').hide();
    $('.slider-item:first').addClass('slider-item-selected');
    $('.slider-page').hide();
    $('.slider-panel,.slider-pre,.slider-next').hover(function() {
        stop();
        $('.slider-page').show();
    }, function() {
        $('.slider-page').hide();
        start();
    });
    $('slider-pre').off('click');
    $('.slider-pre').on('click', function() {
        pre();
    });
    $('.slider-next').off('click');
    $('.slider-next').on('click', function() {
        next();
    });

    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }

    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }

    function start() {
        if (!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }

    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    start();
    //网站导航鼠标悬浮
     var $jt=$('.bg-bar-box .jt'),
         $dh=$('.dh'),
         $ng=$('.ng-site-nav');
    $('.bg-bar-box').hover(function() {
        $dh.addClass('hdh');
        $jt.addClass('jtxz');
        $ng.addClass('hng');
    }, function() {
        $dh.removeClass('hdh');
        $jt.removeClass('jtxz');
        $ng.removeClass('hng');
    });
    //商家入驻鼠标悬浮
    var $sjjt=$('.bg-node-box .jt'),
        $rz=$('.rz'),
        $ngnd=$('.ng-node-nav');
    $('.bg-node-box').hover(function() {
        $rz.addClass('hrz');
        $ngnd.addClass('hnode');
        $sjjt.addClass('jtxz');
    }, function() {
        $rz.removeClass('hrz');
        $ngnd.removeClass('hnode');
        $sjjt.removeClass('jtxz');
    });
    //我的订单鼠标悬浮
    var $otem=$('.od-item'),
        $djt=$('.ng-order .jt');
    $('.ng-order').hover(function() {
        $(this).addClass('hng-od');
        $otem.addClass('hitem');
        $djt.addClass('jtxz');
    }, function() {
        $(this).removeClass('hng-od');
        $otem.removeClass('hitem');
        $djt.removeClass("jtxz");
    });
    //我的易购
    var $myg=$('.my-yg .jt'),
        $ygit=$('.yg-item'),
        $ygh=$('.my-yg .yg');
    $('.my-yg').hover(function(){
        $myg.addClass("jtxz");
        $ygh.addClass('ygh');
        $ygit.addClass('hyg-item');
    },function(){
        $myg.removeClass("jtxz");
        $ygh.removeClass('ygh');
        $ygit.removeClass('hyg-item');
    });

    //手机苏宁
    var $nvsj=$('.nv-sj'),
        $sjitem=$('.sj-sn-item'),
        $sjt=$('.sj-sn .jt');
    $('.sj-sn').hover(function(){
        $nvsj.addClass('hnv-sj');
        $sjitem.addClass('hitem');
        $sjt.addClass('jtxz');
    },function(){
        $nvsj.removeClass('hnv-sj');
        $sjitem.removeClass('hitem');
        $sjt.removeClass('jtxz');
    });
    //客户服务
    var $kh=$('.hu-fw-list'),
        $fw=$('.khfw'),
        $khjt=$('.kh-fw .jt');

    $('.kh-fw').hover(function(){
        $kh.addClass('hlist');
        $fw.addClass('fw');
        $khjt.addClass('jtxz');
    },function(){
        $kh.removeClass('hlist');
        $fw.removeClass('fw');
        $khjt.removeClass('jtxz');
    });
 //放心去喜欢
    $('.featrue-list li').hover(function() {
        $(this).addClass('hoItem').siblings().removeClass('hoItem');
    }, function() {
        $(this).removeClass('hoItem');
    });
    //公告栏内容鼠标悬浮效果
    $('.tt>p>a').hover(function() {
        if ($('a').hasClass('xz')) {
            $('a').removeClass('xz');
        }
        $(this).toggleClass('xz');

    }, function() {
        $(this).removeClass('xz');
    });
    //右侧头条公告选项卡
    $('.head-right li').hover(function() {
        var index = $(this).index();
        if ($('li').hasClass('hover')) {
            $('li').removeClass('hover');
        }

        $(this).toggleClass('hover');

        $('#head-tab div').eq(index).show().siblings('div').hide();
    });
    //必抢清单tab选项
    $('.bqqd-tab li').hover(function() {
        var index = $(this).index();
        if ($('li').hasClass('current')) {
            $('li').removeClass('current');
        }
        $(this).toggleClass('current');
        $('.list ul').eq(index).show().siblings('ul').hide();
    });
    //必抢清单鼠标滑过图片
    $('.tab-img-list img').hover(function() {
        $(this).toggleClass('dds');
    }, function() {
        $(this).removeClass('dds');
    });
    $('.get-more li').hover(function() {
        var index = $(this).index();
        $('#list-item>div').eq(index).show().siblings('div').hide();
    },function(){
        $('span').removeClass('up-arrow');
    });
    $('.list-item2 p').hover(function() {
        $(this).addClass('hover').siblings().removeClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
    //更多推荐
    $('.get-more').click(function(){
        $("#ng-fix-bar").load("getmore.html #wrapper");
    });
    // 关闭视口
    $('.close').click(function() {
        $('.mt').hide();
    });
    //图片向右翻页
    var page = 1;
    var i = 4;
    $('#next').click(function() {
        var $parent = $(this).parents("div.v_show");
        var $v_show = $parent.find("div.img-list");
        var $ul = $v_show.find('ul');
        var v_width = $v_show.width();
        var $v_count = $parent.find('div.img-item');
        var len = $v_show.find('li').length;
        var page_count = Math.ceil(len / i);
        if (!$ul.is(':animated')) {
            if (page ==page_count) {
                $ul.animate({
                    left: "0px"
                }, "slow");
                page = 1;
            } else {
                $ul.animate({
                    left: '-=' + v_width
                }, 'slow');
                page++;
            }
        }
    });
    //图片向左翻页
    $('#prev').click(function() {
        var $parent = $(this).parents("div.v_show");
        var $v_show = $parent.find("div.img-list");
        var $ul = $v_show.find('ul');
        var v_width = $v_show.width();
        var $v_count = $parent.find('div.img-item');
        var len = $v_show.find('li').length;
        var page_count = Math.ceil(len / i);
        if (!$ul.is(':animated')) {
            if (page == 1) {
                $ul.animate({
                    left: '-=' + v_width * (page_count - 1)
                }, 'slow');
                page = page_count
            } else {
                $ul.animate({
                    left: '+=' + v_width
                }, 'slow');
                page--;
            }
        }
    });
    //图书音像tab切换
    var $lia=$('.floor-head li>a'),
        $aspan=$('.floor-head span');
    $('.get-more>li').hover(function(){
        if($('li>a').hasClass('booksa')&& $('li>span').hasClass('aspan')){
            $('li>a').removeClass('booksa');
            $('li>span').removeClass('aspan');
        }
        $(this).children('a').toggleClass('booksa');
        $(this).children('span').addClass('aspan').siblings('span').removeClass('aspan');
    },function(){
        $(this).children('a').removeClass('booksa');
        $(this).children('span').removeClass('aspan');
    })
    //左侧菜单
    $('.left-item li').hover(function(){
        var index=$(this).index();
        $(this).addClass("reds").siblings().removeClass('reds');
        $('#right-item>ul').eq(index).show().siblings().hide();
    },function(){
        $(this).removeClass('reds');
        $('#right-item>ul').css("display","none");
    });
// 返回顶部
//     var back=$('#ng-fix-bar');
//     back.click(function(){
//         $('html,body').animate({scrollTop:0},800);
//         if($('body').scrollTop()){
//             $('body').animate({scrollTop:0},800);
//         }
//     });
//     //监听window的scroll事件
//     $(window).on('scroll',function(){
//         if($(window).scrollTop()>$(window).height()){
//             back.fadeIn();
//         }else{
//             back.fadeOut();
//         }
//     });
//     $(window).trigger('scroll');

});
