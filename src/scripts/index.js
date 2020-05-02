import "nes.css/css/nes.min.css"
import "../styles/fullpage.css"
import "../styles/styles.scss"
import fullPageInstance from "./fullPageInstance";
import typedText from "./typedText";
import mediaQuery from "./mediaQuery";


const init = () => {
    mediaQuery();
    fullPageInstance();
    typedText();
}

init();
