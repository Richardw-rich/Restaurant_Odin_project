import {ourStoryHTML, headerHTML} from "./html.js"

const displayOurStory = (container) => {
    container.innerHTML = ""
    container.insertAdjacentHTML("beforeend", headerHTML)
    container.insertAdjacentHTML("beforeend", ourStoryHTML)
};


export default displayOurStory