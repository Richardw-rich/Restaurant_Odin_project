import {contactHTML, headerHTML} from "./html.js"

const displayContact = (container) => {
    container.innerHTML = ""
    container.insertAdjacentHTML("beforeend", headerHTML)
    container.insertAdjacentHTML("beforeend", contactHTML)
};


export default displayContact