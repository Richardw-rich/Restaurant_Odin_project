import {homeHTML, headerHTML} from "./html.js"

const displayHome = (container) => {
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", headerHTML)
    container.insertAdjacentHTML("beforeend", homeHTML)
};


export default displayHome