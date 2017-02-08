$(document).ready(function(){
    var length,
        currentIndex=0,
        interval,
        hasStarted=false,
        t=3000;
    length=$('.slider-panel').length;
    $('.slider-panel:not(:first)').hide();
    $('.slider-item:first').addClass('slider-item-selected');
    $('.slider-page').hide();
    $('.slider-panel,.slider-pre,.slider-next').hover(function(){
        stop();
        $('.slider-page').show();
    },function(){
        $('.slider-page').hide();
        start();
    });
    $('slider-pre').unbind('click');
    $('.slider-pre').bind('click',function(){
        pre();
    });
    $('.slider-next').unbind('click');
    $('.slider-next').bind('click',function(){
        next();
    });
    function next(){
        var preIndex=currentIndex;
        currentIndex=++currentIndex % length;
        play(preIndex,currentIndex);
    }
    function play(preIndex,currentIndex){
        $('.slider-panel').eq(preIndex).fadeOut(500)
        .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }
    function start(){
        if(!hasStarted){
            hasStarted=true;
            interval=setInterval(next,t);
        }
    }
    function stop(){
        clearInterval(interval);
        hasStarted=false;
    }
    start();

    $('.bg-bar-box').hover(function(){
        $('.dh').addClass('hdh');
        $('.wzdh').addClass('sp')
        $('.ng-site-nav').addClass('hng');
    },function(){
        $('.dh').removeClass('hdh');
        $('.wzdh').removeClass('sp');
        $('.ng-site-nav').removeClass('hng');
    });
    $('.bg-node-box').hover(function(){
        $('.rz').addClass('hrz');
        $('.sjrz').addClass('hsp');
        $('.ng-node-nav').addClass('hnode');
    },function(){
        $('.rz').removeClass('hrz');
        $('.sjrz').removeClass('hsp');
        $('.ng-node-nav').removeClass('hnode');
    });
    $('.ng-order').hover(function(){
        $('.my-od').addClass('hod');
        $(this).addClass('hng-od');
        $('.od-item').addClass('hitem');
    },function(){
         $('.my-od').removeClass('hod');
        $(this).removeClass('hng-od');
        $('.od-item').removeClass('hitem');
    });

    $('.featrue-list li').hover(function(){
        $(this).addClass('hoItem').siblings().removeClass('hoItem');
    },function(){
        $(this).removeClass('hoItem');
    });
    $('.tt>p>a').hover(function(){
         if($('a').hasClass('xz')){
            $('a').removeClass('xz');
        }
        $(this).toggleClass('xz');

    },function(){
        $(this).removeClass('xz');
    });
    //右侧头条公告选项卡
    $('.head-right li').hover(function(){
        var index=$(this).index();
        if($('li').hasClass('hover')){
            $('li').removeClass('hover');
        }

        $(this).toggleClass('hover');

        $('#head-tab div').eq(index).show().siblings('div').hide();
    });
    //必抢清单tab选项
    $('.bqqd-tab li').hover(function(){
        var index=$(this).index();
        if($('li').hasClass('current')){
            $('li').removeClass('current');
        }
        $(this).toggleClass('current');
        $('.list ul').eq(index).show().siblings('ul').hide();
    });
    //必抢清单鼠标滑过图片
    $('.tab-img-list img').hover(function(){
        $(this).toggleClass('dds');
    },function(){
        $(this).removeClass('dds');
    });
    $('.get-more li').hover(function(){
        var index=$(this).index();
        if($('li').hasClass('up-arrow')){
            $('li').removeClass('up-arrow');
        }
        $('.get-more a').toggleClass('up-arrow');
        $('#list-item>div').eq(index).show().siblings('div').hide();
    });
    $('.list-item2 p').hover(function(){
        $(this).addClass('hover').siblings().removeClass('hover');
    },function(){
        $(this).removeClass('hover');
    });
    // $('.get-more').click(function(){
    //     $("#ng-fix-bar").load("file:///E:/AppServ/www/getmore.html #wrapper");
    // });
    $('.close').click(function(){
        $('.mt').hide();
    });
});

