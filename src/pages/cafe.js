import {cafeHTML, headerHTML} from "./html.js"

const displayCafe = (container) => {
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", headerHTML)
    container.insertAdjacentHTML("beforeend", cafeHTML)
};


export default displayCafe