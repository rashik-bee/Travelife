$(document).ready(function() {
    // initMainMenu();
    initMobileMenu();
    initHeightAdCss();
    initPackageCarousel();
    initTestimonial();
    // initStickyIt();
    initFooterNavOrder();
    initImageGal();

    // //MENU FIXED CLASS
    // function initMainMenu() {
    //     if(window.innerWidth > 1200) {
    //         if($(window).scrollTop() > 100) {
               
    //         }
    //     }
    // }

    // MOBILE MENU
    function initMobileMenu() {
        $('#close_menu').on('click', function() {
            console.log('helo');
            $('#mobile_men').addClass('hide');
            $('#mobile_men').removeClass('show');
        });

        $('#menu_mob').on('click', function() {
            console.log('menu');
            $('#mobile_men').removeClass('hide');
            $('#mobile_men').addClass('show');
        })
    }

    // HOMEPAGE LAYOUT ADJUST
    function initHeightAdCss() {

        // let height1
        let height_1 = $('.destinations').height();
        // console.log(height_1);

        if(height_1 >= 500) {
            $('.destination_left').addClass('heightened');
        }
    }

    // PACKAGE CAROUSEL
    function initPackageCarousel() {
        var countPack = $('#package_slider_index')
        if($('.package_carousel_home').length) {
            var pack_slider = $('.package_carousel_home');
        
            pack_slider.owlCarousel({
                loop: true,
                autoplay: false,
                nav: false,
                dots: false,
                smartSpeed: 1200,
                margin: 30,
                responsive:{
                    0:{items:1, slideBy: 1},
                    480:{items:1, slideBy: 1},
                    768:{items:2, slideBy: 1},
                    992:{items:3, slideBy: 1},
                }
            });

            /* Custom Nav Events */ 
            if($('.pack_carousel_prev').length) {
                let prev = $('.pack_carousel_prev');

                prev.on('click touchstart', function() {
                    countPack.trigger('prev.owl.carousel')
                });
            }

            if($('.pack_carousel_next').length) {
                let next = $('.pack_carousel_next');

                next.on('click touchstart', function() {
                    countPack.trigger('next.owl.carousel')
                });
            }
        }
    }

    // TESTIMONIAL SLIDER
    function initTestimonial() {
        var testMon = $('#testimonial_slider_index');

        if(('.testimonial_slider').length) {
            var tes_slider = $('.testimonial_slider');

            tes_slider.owlCarousel({
                loop: true,
                autoplay: false,
                nav: false,
                dots: false,
                smartSpeed: 1200,
                items: 1
                // slideBy: 1
            });
            
            if($('.testimonial_carousel_prev').length) {
                let prev = $('.testimonial_carousel_prev');
            
                prev.on('click touchstart', function() {
                    tes_slider.trigger('prev.owl.carousel');
                });
            }
        
            if($('.testimonial_carousel_next').length) {
                let next = $('.testimonial_carousel_next');
                
                next.on('click touchstart',function() {
                    console.log('hello');
                    tes_slider.trigger('next.owl.carousel');
                });
            }
        }
    }

    //sticky position margin
    // function initStickyIt() {
    //     $('.it_nav').scroll(function() {
    //         alert('you have reached');
    //     }) ;
    // }

    //FOOTER NAV ORDER 
    function initFooterNavOrder() {
        if($('.copyright').length && window.innerWidth <= 767) {
            $('.copy_left').addClass('order-2');
            $('.copy_right').addClass('order-1');
        }else {
            $('.copy_left').removeClass('order-2');
            $('.copy_right').removeClass('order-1');
        }
    }

    //IMAGE GALLERY ITINERARY 
    function initImageGal() {
        var imageArray = [
            {
                "url": "images/trek-1.jpg",
                "width": 270,
                "height": 230
            },
            {
                "url": "images/trek-2.jpg",
                "width": 250,
                "height": 230
            },
            {
                "url": "images/trek-3.jpg",
                "width": 200,
                "height": 230
            },
            {
                "url": "images/trek-4.jpg",
                "width": 260,
                "height": 230
            },
            {
                "url": "images/trek-5.jpg",
                "width": 200,
                "height": 230
            },
            {
                "url": "images/trek-6.jpg",
                "width": 350,
                "height": 230
            },
        ]

        $('#gallery_img_plug').flexPhotoGallery({
            imageArray: imageArray
        });
    }
});

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if((height > 100) && (window.innerWidth > 1200) && (!$('body').hasClass('itinerary_body'))) {
        // alert('scrolled');
        // $('#header').addClass('fixx');
        $('#top_bar').slideUp();
        $('.header_fix').addClass('scrolled');
    }else {
        // $('#header').removeClass('fixx');
        $('#top_bar').slideDown();
        $('.header_fix').removeClass('scrolled');
    }

})

if($('body').hasClass('itinerary_body')) {
    $('.header_fix').removeClass('fixx');
}else {
    $('.header_fix').addClass('fixx');
}