import "../styles/fullpage.css"
import "../styles/styles.css"
import Typed from "typed.js"
import fullpage from "fullpage.js";

const fullPageInstance = () => {
    new fullpage('#fullpage', {
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right'
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
