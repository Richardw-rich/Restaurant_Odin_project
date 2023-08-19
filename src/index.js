//header
import {headerHTML, footerHTML} from "./pages/html.js";
//pages
import displayCafe from "./pages/cafe.js";
import displayCatering from "./pages/catering.js";
import displayContact from "./pages/contact.js";
import displayHome from "./pages/home.js";
import displayOurStory from "./pages/ourStory.js";
import displayFooter from "./pages/footer.js";
//styling
import './style.css'




const container = document.querySelector('#content')

window.addEventListener('load', () => {
  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", headerHTML)
  displayOurStory(container)
  displayFooter(container)
})


container.addEventListener('click', (e) => {

  if(e.target.id === "cafe") {
    displayCafe(container)

  } else if (e.target.id === "catering") {
    displayCatering(container)

  } else if(e.target.id === "contact") {
    displayContact(container)

  } else if(e.target.id === "ourStory") {
    displayOurStory(container)

  } else if (e.target.id === "home") {
    displayHome(container)
  }
})
