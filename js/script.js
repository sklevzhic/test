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
        let isClass = $(this).find(".main-nav__submenu").hasClass('show');
        $(".main-nav__submenu.show")
            .removeClass('show')
            .prev().removeClass('main-nav__link--active');
        if (!isClass) {
            $(this).find(".main-nav__submenu").addClass('show').prev().addClass('main-nav__link--active');
        }
    });

    $('.main-nav__submenu > .main-nav__item').on('touchstart', function(e) {
        e.stopPropagation();
    });

    $(document).on('touchstart', function(e) {
        if (!$(e.target).is(".main-nav__link")) {
            $(".main-nav__submenu.show")
                .removeClass('show')
                .prev().removeClass('main-nav__link--active');
        }

    });

    $(document).keyup(function(e) {
        if (e.which == 27) {
            $(this).find(".main-nav__submenu")
                .removeClass('show')
                .prev().removeClass('main-nav__link--active');
        }
    });

});