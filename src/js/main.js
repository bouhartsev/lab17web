$(document).ready(function() {

    function clickBurger() {
        $(".header__burger").toggleClass('header__burger_active');
    }

    $(".header__burger").click(clickBurger);
});