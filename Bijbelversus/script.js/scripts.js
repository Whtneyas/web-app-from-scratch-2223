//---------------IMPORTS---------------------------------------------//
import fetchBibleQuote from "./modules/fetchBibleQuotes.js"
import onRouteChanged from "./modules/router.js"

// const loadingElement = document.querySelector(".laoding");
// const contentElement = document.querySelector(".content")
const nextBtn = document.querySelector("button:nth-of-type(1)"); //select the left arrow button.

// loadingElement.getElementsByClassName.display= "block"
// loadingElement.getElementsByClassName.display= "none"

//this function gets the value of the current route

  window.addEventListener("hashchange", onRouteChanged);



  fetchBibleQuote();

  nextBtn.addEventListener('click', fetchBibleQuote)