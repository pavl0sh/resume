import fullpage from "fullpage.js";
import animateProgressBars from "./animateProgressBars";

const fullPageInstance = () => {
    new fullpage('#fullpage', {
        sectionsColor: ['#1BBC9B', '#C2B28F', '#83B799', '#E4D8B4'],
        navigation: true,
        navigationPosition: 'right',
        fixedElements: 'nav',
        afterLoad(origin, destination, direction) {
            if (destination.index === 1) {
                animateProgressBars();
            }
        }
    });
}

export default fullPageInstance;
