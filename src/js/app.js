import svg4everybody from 'svg4everybody';

import './lib/foundation-explicit-pieces';
import './components/_preloader';
import './components/_carousel';
import './components/_video';
// import './components/_countdown';
import './components/_anim';
import './components/_scroll';
import './components/_subscribe';
import './components/_map';

svg4everybody();


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});