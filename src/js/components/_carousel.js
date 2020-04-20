/* global $ */
import '../lib/_owl.carousel' // quiet

$('.footer_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dotsEach: true,
    margin: 25,
    nav: true,
    autoplaySpeed: 1000,
    // navContainer: '.owl-nav',
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13"><use fill="currentColor" xlink:href="./assets/img/icons.svg#arrow"></use></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13"><use fill="currentColor" xlink:href="./assets/img/icons.svg#arrow"></use></svg>'],
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
})