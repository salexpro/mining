/* global $, Foundation */

const scrollToEl = (e, $popup, timeout = 0) => {
    const isMobile = !Foundation.MediaQuery.is('medium');

    e.preventDefault();
    const target = isMobile ? $popup : $popup.closest('.reveal-overlay')
    const popupOffset = isMobile ? 0 : $popup.offset().top - 35;

    setTimeout(() => {
        target.animate({
            scrollTop: $(e.target.getAttribute('href')).offset().top - popupOffset,
            easing: 'swing'
        }, 500);
    }, timeout);
}

$('.dropdown_list a, .menu.nested a').click(e => scrollToEl(e, $(`#${e.target.dataset.open}`), 500))

$('.reveal_list a').click(e => scrollToEl(e, $(e.target).closest('.reveal')))


$('.nav_mobile').scroll(() => {
    const $topbar = $('.off-canvas_subscribe_header--fixed')

    if (($('.off-canvas_subscribe').offset().top - $topbar.offset().top) <= 0) {
        $topbar.addClass('hidden')
    } else {
        $topbar.removeClass('hidden')
    }
})

$('.off-canvas_subscribe_header--fixed').click(() => {
    $('.nav_mobile').animate({
        scrollTop: document.documentElement.scrollHeight,
        easing: 'swing'
    }, 500);
})