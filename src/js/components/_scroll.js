/* global $ */

const scrollToEl = (e, $popup, timeout = 0) => {
    e.preventDefault();
    const popupOffset = $popup.offset().top - 35
    setTimeout(() => {
        $popup.closest('.reveal-overlay').animate({
            scrollTop: $(e.target.getAttribute('href')).offset().top - popupOffset,
            easing: 'swing'
        }, 500);
    }, timeout);
}

$('.dropdown_list a, .menu.nested a').click(e => scrollToEl(e, $(`#${e.target.dataset.open}`), 500))

$('.reveal_list a').click(e => scrollToEl(e, $(e.target).closest('.reveal')))