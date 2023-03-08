//---------------IMPORTS---------------------------------------------//
import fetchBibleQuote from "./modules/fetchBibleQuotes.js"
import onRouteChanged from "./modules/router.js"

  
fetchBibleQuote();

//this function gets the value of the current route

  window.addEventListener("hashchange", onRouteChanged);


// if (window.location.hash === '') window.location.hash = '#Home';
