/* global gsap */
import $ from 'jquery';
import '../plugins/_DrawSVGPlugin.js'; // quiet

const pathPoints = [100, 83.3, 65.7, 55.8, 38.6, 25.3, 13.8, 0]

const tl = gsap.timeline();

pathPoints.forEach((p, i) => {
    const d = (i + 1) * 0.5;
    $(`#point${i + 1}`).hover(() => {
        tl.clear();
        tl.to('#pathMask path', { duration: d, drawSVG: `100% ${p}%` })
    }, function() {
        setTimeout(() => {
            // console.log($(this).attr('aria-expanded'), $(`#pointPopup${i + 1}`).is(':hover'))
            if (!$(`#pointPopup${i + 1}`).length || !$(`#pointPopup${i + 1}`).is(':hover')) {
                tl.clear();
                tl.to('#pathMask path', { duration: d, drawSVG: '100% 100%' })
            }
        }, 100);
    })
})