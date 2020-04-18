/* global $ */
import hints from '../data/miner';

// const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const minerHint = (hint, delay) => {
    setTimeout(() => {
        $('#minerPopup .dropdown_header').text(hint.header);
        $('#minerPopup .dropdown_text').html(hint.text);
        $('#minerPopup').foundation('open')
    }, delay || 0);
}

let hintIdx = 2;

const nextHint = () => {
    if (!$('.dropdown--point').hasClass('is-open')){
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