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

        if ($(window).outerWidth()<=800) {
            $(".header__burger").off('click', clickBurgerDesktop);
            $(document).off('scroll', onScrollDesktop);
            $(".header__burger").on('click', clickBurgerMobile);
            $(".header__cart").show(200);
            $(".header__search").show(300);
        }
        else {
            $(".header__burger").off('click', clickBurgerMobile);
            $(document).on('scroll', onScrollDesktop);
            $(".header__burger").on('click', clickBurgerDesktop);
            onScrollDesktop();
            $(".header__cart").hide(200);
            $(".header__search").hide(300);
        }

        if (is_burger_active) {
            is_burger_active=false;
            $(".header__burger").removeClass('header__burger_active');
        }
    }
    
    onResize();
    $(window).resize(onResize);
});