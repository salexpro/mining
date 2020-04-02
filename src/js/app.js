/* global $ */
import svg4everybody from 'svg4everybody';
import './lib/foundation-explicit-pieces';

svg4everybody();

$('.footer_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dotsEach: true,
    items: 4,
    margin: 25,
    nav: true,
    // navContainer: '.owl-nav',
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13"><use fill="currentColor" xlink:href="./assets/img/icons.svg#arrow"></use></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13"><use fill="currentColor" xlink:href="./assets/img/icons.svg#arrow"></use></svg>']
})