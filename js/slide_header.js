$(document).ready(() => {
    $('header .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true,
    });

    $('#el_gallery .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        animateOut: true
    });

    $('#posts_facebook .owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        animateOut: true
    });
});