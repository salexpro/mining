/* global $, Foundation */

import hints from '../data/miner';

const offset = {
    xlarge: {
        h: -65,
        v: 176
    },
    large: {
        h: -50,
        v: 168
    },
    medium: {
        h: -50,
        v: 168
    },
    landscape: {
        h: 20,
        v: 20
    },
    small: {
        h: -85,
        v: 117
    }
}

const isLandscape = (window.innerHeight < window.innerWidth) && !Foundation.MediaQuery.is('large');

const offsetData = isLandscape ? offset.landscape : (offset[Foundation.MediaQuery.current] || offset.xlarge)

new Foundation.Dropdown($('#minerPopup'), {
    position: 'left',
    alignment: 'bottom',
    hOffset: offsetData.h,
    vOffset: offsetData.v,
    closeOnClick: true
});

// Point dropdowns
const isMobile = !Foundation.MediaQuery.is('medium');
$('.dropdown--point').each(function(){
    new Foundation.Dropdown($(this), {
        hover: true,
        hoverPane: true,
        position: isMobile ? 'auto' : $(this).data('position') || 'right',
        alignment: isMobile ? 'auto' : $(this).data('alignment') || 'center',
        vOffset: isMobile ? 20 : $(this).data('vOffset') || 0,
        hOffset: isMobile ? 0 : $(this).data('hOffset') || 0,
        closeOnClick: true
    });
})

$('.reveal_footer_map').click(() => $('.nav_mobile').foundation('close'))

const minerHint = (hint, delay) => {
    setTimeout(() => {
        $('#minerPopup .dropdown_header').text(hint.header);
        $('#minerPopup .dropdown_text').html(hint.text);
        $('#minerPopup').foundation('open')
    }, delay || 0);
}

let hintIdx = 2;

const nextHint = () => {
    if (!$('.dropdown--point').hasClass('is-open') && !$('.dropdown--miner').is(':hover')){
        const hint = hints[hintIdx];
        $('#minerPopup').foundation('close')
        minerHint(hint, 300);

        if (hintIdx == (hints.length - 1)) {
            hintIdx = 2
        } else {
            hintIdx++
        }
    }
}

export { minerHint, nextHint, hints }