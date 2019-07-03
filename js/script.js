$(document).ready(function() {

    function hideSubMenu() {
        $(this).find(".main-nav__submenu")
            .removeClass('show')
            .prev().removeClass('main-nav__link--active');
    }

    $(".main-nav__item").mousemove(function(e) {
        !window.time || clearTimeout(time);
        time = setTimeout(function() {
            $(e.target)
                .next().addClass('show')
                .prev().addClass('main-nav__link--active');
        }, 500);
    });

    $(".main-nav__submenu, .main-nav__item").mouseleave(hideSubMenu);

    $('.main-nav__item--sub').on('touchstart', function(e) {
        e.preventDefault();
        if ($('.main-nav__submenu').hasClass('show')) {
            hideSubMenu();
        } else {
            $(this).find(".main-nav__submenu").addClass('show').prev().addClass('main-nav__link--active');
        }
    });

    $('.main-nav__submenu > .main-nav__item').on('touchstart', function(e) {
        e.stopPropagation();
    });

    $(document).keyup(function(e) {
        if (e.which == 27) {
            hideSubMenu();
        }
    });

});