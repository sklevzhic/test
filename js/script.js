$(document).ready(function() {

    $(".main-nav__item").mousemove(function(e) {
        !window.time || clearTimeout(time);
        time = setTimeout(function() {
            $(e.target)
                .next().addClass('show')
                .prev().addClass('main-nav__link--active');
        }, 500);
    });

    $(".main-nav__submenu, .main-nav__item").mouseleave(function() {
        $(this).find(".main-nav__submenu")
            .removeClass('show')
            .prev().removeClass('main-nav__link--active');
    });


    $('.main-nav__item--sub').on('touchstart', function(e) {
        e.preventDefault();
        if ($('.main-nav__submenu').hasClass('show')) {
            $(this).find(".main-nav__submenu")
                .removeClass('show')
                .prev().removeClass('main-nav__link--active');
        } else {
            $(this).find(".main-nav__submenu").addClass('show').prev().addClass('main-nav__link--active');
        }
    });

    $('.main-nav__submenu > .main-nav__item').on('touchstart', function(e) {
        e.stopPropagation();
    });


    $(document).keyup(function(e) {
        if (e.which == 27) {
            $(this).find(".main-nav__submenu")
                .removeClass('show')
                .prev().removeClass('main-nav__link--active');
        }
    });

});