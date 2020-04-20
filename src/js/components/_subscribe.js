/* global $, Foundation, gsap */

// Open form

const headerWidth = {
    large: 530,
    medium: 360,
}

const widthData = headerWidth[Foundation.MediaQuery.current] || headerWidth.large;

const tlSubs = gsap.timeline({ paused: true })
tlSubs
    .fromTo('.header_subscribe', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 })
    .fromTo('.header_subscribe', { width: 112 }, { width: widthData, ease: 'expo.out', duration: 0.7 }, 0.2)
    .fromTo('.header_subscribe button', { x: 10, opacity: 0 }, { x: 0, opacity: 1, ease: 'expo.out', duration: 1 }, 0.7)

$('#subsOpen').click(() => {
    tlSubs.play()
})

$(document).click(e => {
    const container = $('.header_subscribe');

    if (!container.is(e.target) && container.has(e.target).length === 0 && e.target.id !== 'subsOpen') {
        tlSubs.reverse()
    }
});

// Submit form
$('.header_subscribe, .off-canvas_subscribe_form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: 'https://forklog.com/wp-content/themes/newForklog/ajaxsubscribe.php',
        data: {
            'action': 'setEmail',
            'email': $(this).serialize()
        },
        type: 'POST',
        dataType: 'json',
        success: () => {
            alert('Спасибо за подписку!');
        },
        error: () => {
            alert('Спасибо за подписку!');
        },
        complete: () => {
            $('[type="email"]', this).val('');
        }
    });
})
