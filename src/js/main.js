$(document).ready(function() {
    var  bodyScroll = $(".body").scrollTop();

    let is_burger_active = ($(".header__burger").hasClass('header__burger_active'))?true:false;
    function clickBurgerMobile() {
        $(".header__burger").toggleClass('header__burger_active');
        $(".header__nav").toggleClass('header__nav_active-not');

        if (is_burger_active) {
            $('.body').css({'position':'','overflow-y': '', 'top': ''});
            is_burger_active = false;
            $(document).scrollTop(bodyScroll);
        }
        else {
            bodyScroll = $(document).scrollTop();
            $('.body').css({'position': 'fixed', 'overflow-y': 'scroll', 'top': (-($(document).scrollTop())) + 'px' });
            is_burger_active = true;
        }
    }

    function clickBurgerDesktop(event) {
        $(".header__burger").toggleClass('header__burger_active');
        $(".header__cart").toggle(200);
        $(".header__search").toggle(300);
        is_burger_active = !is_burger_active;
    }

    function onScrollDesktop(){
        if($(document).scrollTop()>100) $('header').addClass('header__fixed_onscroll');
        else $('header').removeClass('header__fixed_onscroll');
    }

    function onResize(){
        $(".section__about").css('padding-top', $("header").outerHeight()+'px');

        if ($(window).outerWidth()<=800 && ($._data($(document)[0], "events")!=undefined || $._data($(".header__burger")[0], "events")==undefined)) {

            $(document).off('scroll');

            $(".header__burger").off('click');
            $(".header__burger").on('click', clickBurgerMobile);

            $(".header__cart").show(200);
            $(".header__search").show(300);
        }
        else if ($(window).outerWidth()>800 && $._data($(document)[0], "events")==undefined) {
            
            $(document).on('scroll', onScrollDesktop);
            onScrollDesktop();
            
            $(".header__burger").off('click');
            $(".header__burger").on('click', clickBurgerDesktop);

            $(".header__cart").hide(200);
            $(".header__search").hide(300);
        }

        if (is_burger_active) $(".header__burger").trigger('click');
    }
    
    onResize();
    $(window).resize(onResize);
});