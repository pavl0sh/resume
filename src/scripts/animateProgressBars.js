import progress from "../assets/progress.json";

let firstLoad = 0;
const animateProgressBars = () => {
    if (firstLoad === 0) {
        let progressBars = [];
        firstLoad = 1;

        progress.forEach(p => progressBars.push({elem:document.getElementById(p.name), value:p.value}));
        progressBars.forEach(p => {
            let width = 0;
            let id = setInterval(frame, 10)
            function frame() {
                if (width >= p.value) {
                    clearInterval(id);
                } else {
                    width ++;
                    p.elem.setAttribute("value", `${width}`);
                }
            }
        });
    }
}

export default animateProgressBars;
