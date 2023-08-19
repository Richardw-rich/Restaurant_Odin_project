import {cateringHTML, headerHTML} from "./html.js"

const displayCatering = (container) => {
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", headerHTML)
    container.insertAdjacentHTML("beforeend", cateringHTML)
};


export default displayCatering