import Typed from "typed.js";

const typedText = () => {
    new Typed('.typeText', {
        strings:
            ['<span class="text">Hi! </span><span class="text">My name is Pavlo. </span>' +
            '<span class="text">I am Frontend developer.</span>'],
        typeSpeed: 50,
        showCursor: false
    });
}

export default typedText;
