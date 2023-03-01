//---------------IMPORTS---------------------------------------------//
import fetchBibleQuote from "./modules/fetchBibleQuotes.js"
import onRouteChanged from "./modules/router.js"

// const firstPage = document.querySelector("section:nth-of-type(1)"); // selects the firstpage which contains the book image.
const nextBtn = document.querySelector("button:nth-of-type(1)"); //select the left arrow button.


//----------------EVENTLISTNERS---------------------------------------//

// //first page disappears when it is been clicked
// document.querySelector("section:nth-of-type(1) img").addEventListener('click', () => {
//   firstPage.scrollIntoView({
//     behavior: 'smooth'
//   });
//   firstPage.classList.add('disappear')
// });


//this function gets the value of the current route

  window.addEventListener("hashchange", onRouteChanged);


  fetchBibleQuote();

  nextBtn.addEventListener('click', fetchBibleQuote)