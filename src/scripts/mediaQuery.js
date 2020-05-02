const verySmallPhone = 320;
const smallPhone = 375;
let xs = window.matchMedia(`(max-width: ${verySmallPhone}px)`);
let s = window.matchMedia(`(max-width: ${smallPhone}px)`);

const mediaQuery = () => {
    if (xs.matches || s.matches) {
        document.getElementsByClassName("nes-icon github is-large")
                [0].setAttribute("class", "nes-icon github is-medium");
        document.getElementsByClassName("nes-icon linkedin is-large")
                [0].setAttribute("class", "nes-icon linkedin is-medium");
        document.getElementsByClassName("nes-icon gmail is-large")
                [0].setAttribute("class", "nes-icon gmail is-medium");
        document.getElementsByClassName("nes-icon facebook is-large")
                [0].setAttribute("class", "nes-icon facebook is-medium");
    }
}

xs.addEventListener("change", mediaQuery);
s.addEventListener("change", mediaQuery);

export default mediaQuery;
