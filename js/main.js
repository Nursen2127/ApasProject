

$(document).ready(function () {



    var w = $(window).width(), h = $(window).height();



    $(".icon-menu").click(function () {
        $(".Menu").toggleClass('active');
        $(".Banner-link").toggleClass('active');
        $(".Right").toggleClass('active');
        $("body").toggleClass('over');
        $(this).toggleClass('active');

    });

    $(".icon-menu-active").click(function () {

        $(".Banner-link").toggleClass('active');
        $("body").toggleClass('active');


    });





    var swiper1 = new Swiper('#Slider', {
        effect: "fade",
        speed:1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },


    });

    var swiper2 = new Swiper('.swiper-container-ref', {
        //effect:'fade',
        //centeredSlides: true,
        spaceBetween:20,
        slidesPerView: 2.4,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2'
        },
        breakpoints: {
            1440: {
                slidesPerView: 2.1,
            },
            1367: {
                slidesPerView: 1.8,
            },
            1281: {
                slidesPerView: 1.4,
            },
            991: {
                slidesPerView: 1.4,
            },
        }

    });

    var swiper3 = new Swiper('.swiper-container-marka', {
        //effect:'fade',
        //centeredSlides: true,
        spaceBetween:20,
        slidesPerView: 7,

        breakpoints: {

            1367: {
                slidesPerView: 6,
            },
            991: {
                slidesPerView: 2,
            },
        }

    });


    $('.Navtop #urun').hover(function() {
        $('.Navtop-inner_menu').stop(true, true).delay(100).slideDown(300);
    }, function() {
        $('.Navtop-inner_menu').stop(true, true).delay(100).slideUp(300);
    });

    $('.Navtop-inner_menu').hover(function() {
        $('.Navtop-inner_menu').stop(true, true).delay(100).slideDown(300);
    }, function() {
        $('.Navtop-inner_menu').stop(true, true).delay(100).slideUp(300);
    });



    if(w<991){
        $('.Sidebar-content').addClass('collapse');
    }








    if ($(document).scrollTop() > 70) {

        $(".Navtop").addClass('Navtop-active');
    } else {
        $(".Navtop").removeClass('Navtop-active');
    }


    $(window).scroll(function () {

        var w = $(window).width(), h = $(window).height();
        if ($(document).scrollTop() > 70) {

            $(".Navtop").addClass('Navtop-active');
        } else {
            $(".Navtop").removeClass('Navtop-active');
        }
    });


    var w = $(window).width(), h = $(window).height();


    $(function () {

        $('#UpTotop').click(
            function () {
                $('body,html').animate({scrollTop: 0}, 800);
            });
        var $elem = $('body');
    });

    $('.select').selectpicker();

    $('.selectpicker').selectpicker();

    if (w < 991) {
        $('.selectpicker').mobileSelect({
            animation: 'scale',
            animationSpeed: 400
        });
    }


});











