import "nes.css/css/nes.min.css"
import "../styles/fullpage.css"
import "../styles/styles.scss"
import Typed from "typed.js"
import fullpage from "fullpage.js";

const fullPageInstance = () => {
    new fullpage('#fullpage', {
        sectionsColor: ['#1BBC9B', '#C2B28F', '#83B799', '#E4D8B4'],
        navigation: true,
        navigationPosition: 'right',
        fixedElements: 'nav'
    });
}

const typedText = () => {
    new Typed('.typeText', {
        strings:
        ['<span class="text">Hi! </span><span class="text">My name is Pavlo. </span>' +
        '<span class="text">I am Frontend developer.</span>'],
        typeSpeed: 50,
        showCursor: false
    });
}


const init = () => {
    fullPageInstance();
    typedText();
}

init();
