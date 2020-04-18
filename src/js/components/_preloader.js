/* global $, gsap */
import { minerHint, nextHint, hints } from './_miner';

const RAD = Math.PI / 180;
const PI_2 = Math.PI / 2;

const clipPath = document.querySelector('#arcPath');

const arc = {
    start: 0,
    end: 0,
    cx: 73.5,
    cy: 73.5,
    r: 147
};

let isLoaded = false;

const rose = document.querySelector('.map_windrose');

const twn = gsap.to(arc, {
    end: 360,
    ease: 'none',
    onUpdate: () => {
        clipPath.setAttribute('d', getPath(arc.cx, arc.cy, arc.r, arc.start, arc.end));
    },
    duration: 1,
    // repeatDelay: 2,
    repeat: -1,
    yoyo: 1,
    onRepeat: () => {
        if (isLoaded && !rose.classList.contains('flip')) {
            twn.kill()
            clipPath.setAttribute('d', getPath(73.5, 73.5, 147, 0, 360));
        }
        rose.classList.toggle('flip')
    },
});


const getPath = (cx, cy, r, a1, a2) => {

    const delta = a2 - a1;

    if (delta === 360) {
        return `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${r*2} 0 a ${r} ${r} 0 1 0 ${-r*2} 0z`;
    }

    const largeArc = delta > 180 ? 1 : 0;

    a1 = a1 * RAD - PI_2;
    a2 = a2 * RAD - PI_2;

    const x1 = cx + r * Math.cos(a2);
    const y1 = cy + r * Math.sin(a2);

    const x2 = cx + r * Math.cos(a1);
    const y2 = cy + r * Math.sin(a1);
    
    return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 0 ${x2} ${y2} L ${cx} ${cy} z`;
}


$(window).on('load', () => {
    isLoaded = true;
    const tl = gsap.timeline();
      

    tl
        .fromTo('.map_header', { opacity: 0 }, { opacity: 1 })
        .fromTo('.map_header span', { width: 8, height: 0 }, { height: 43, ease: 'expo.in', duration: 0.7 }, '-=0.5')
        .to('.map_header span', { width: '100%', ease: 'expo.out', duration: 2 })
        .fromTo('.map_container', { autoAlpha: 0 }, { autoAlpha: 1 }, '-=1.5')

    const tlDuration = tl.totalDuration() - 1;
    const tlMap = gsap.timeline({ delay: tlDuration });

    tlMap
        .fromTo('#point1', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5}, 0)
        .fromTo('#point2', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5}, 0.2)
        .fromTo('#point3', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5}, 0.4)
        .fromTo('#point4', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5}, 0.6)
        .fromTo('#point5', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5}, 0.8)
        .fromTo('#point6', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5}, 1)
        .fromTo('#point7', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5}, 1.2)
        .fromTo('#point8', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5}, 1.4)

        .fromTo('#point1 g', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.4)
        .fromTo('#point1 g', { y: -15 }, { y: 0, ease: 'bounce.out', duration: 1 }, 0.4)
        .fromTo('#point2 g', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.6)
        .fromTo('#point2 g', { y: -15 }, { y: 0, ease: 'bounce.out', duration: 1 }, 0.6)
        .fromTo('#point3 g', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.8)
        .fromTo('#point3 g', { y: -15 }, { y: 0, ease: 'bounce.out', duration: 1 }, 0.8)
        .fromTo('#point4 g', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1)
        .fromTo('#point4 g', { y: -15 }, { y: 0, ease: 'bounce.out', duration: 1 }, 1)
        .fromTo('#point5 g', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.2)
        .fromTo('#point5 g', { y: -15 }, { y: 0, ease: 'bounce.out', duration: 1 }, 1.2)
        .fromTo('#point6 g', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.4)
        .fromTo('#point6 g', { y: -15 }, { y: 0, ease: 'bounce.out', duration: 1 }, 1.4)
        .fromTo('#point7 g', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.6)
        .fromTo('#point7 g', { y: -15 }, { y: 0, ease: 'bounce.out', duration: 1 }, 1.6)
        .fromTo('#point8 g', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.8)
        .fromTo('#point8 g', { y: -15 }, { y: 0, ease: 'bounce.out', duration: 1 }, 1.8)

        .to('.footer .container', { y: 0, duration: 2, ease: 'expo.out' }, 2)

    setTimeout(() => {
        minerHint(hints[0], 0);

        $('.map_miner_g').click(e => {
            e.stopPropagation();
            nextHint()
            clearInterval(minerInterval);
        })

        const minerInterval = setInterval(nextHint, 10000);

        $('#minerPopup .dropdown_close').click(() => {
            clearInterval(minerInterval);
        })
        
    }, (tlDuration + 3.5) * 1000);

    
})
