    $(function () {
        $("ul.notice_txt>li").hide();
        $("ul.notice_txt>li").first().show();

        $("ul.notice_nav>li").click(function () {
            $(this).addClass("on");
            $(this).siblings().removeClass("on");

            var tabIndex = $(this).index();
            $("ul.notice_txt>li").hide();
            $("ul.notice_txt>li").eq(tabIndex).show();

        });

        $("ul.menu>li").hover(function(){
            $(this).find("ul").show();
        },function(){
            $(this).find("ul").hide();

        })
    });