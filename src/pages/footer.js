import { footerHTML } from "./html";



const displayFooter = (container) => {  
    container.insertAdjacentHTML("afterend", footerHTML)
};


export default displayFooter