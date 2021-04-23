$(document).ready(function() {
    $("main").css('padding-top', $("header").outerHeight()+'px');

    let is_burger_active = ($(".header__burger").hasClass('header__burger_active'))?true:false;
    function clickBurger() {
        $(".header__burger").toggleClass('header__burger_active');
        $(".header__nav").toggleClass('header__nav_active-not');

        if (is_burger_active) {
            $('body').css({'position':'','overflow-y': '', 'top': ''});
            is_burger_active = false;
        }
        else {
            $('body').css({'position': 'fixed', 'overflow-y': 'scroll', 'top': (-(document.documentElement.scrollTop)) + 'px' });
            is_burger_active = true;
        }
           
    }

    $(".header__burger").click(clickBurger);
});