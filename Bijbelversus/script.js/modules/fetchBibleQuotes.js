// // fetching data 

// import displayBibleQuote from "../modules/displayBibleQuote.js";

// import  {startLoading, stopLoading} from "../modules/states.js"

// const nextBtn = document.querySelector("button:nth-of-type(1)"); //select the left arrow button.



// // nextBtn.addEventListener('click', fetchBibleQuote)


// nextBtn.addEventListener('click', () => {

//   fetchBibleQuote()

//   startLoading()

// })
// const fetchBibleQuote = async () => {
//     console.log("it works")


//     const response = await fetch('https://bible-api.com/romans%201,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16');



//     if (response.ok) {
//       const data = await response.json();
//       const randomNumber = Math.floor(Math.random() * data.verses.length);
//       const randomVerse = data.verses[randomNumber]

//       displayBibleQuote(randomVerse);

//      stopLoading();

//     } 
//     else {
//       throw new Error(`Failed to fetch bible quote. Status code: ${response.status}`);
//     }
//   }

//   export default fetchBibleQuote



// import displayBibleQuote from "../modules/displayBibleQuote.js";
// import { startLoading, stopLoading } from "../modules/states.js";

// const nextBtn = document.querySelector("button:nth-of-type(1)"); //select the left arrow button.

// let bibleQuotes = []; // Initialize an empty array to store fetched quotes.

// nextBtn.addEventListener("click", () => {

//   if (bibleQuotes.length > 0) { // If there are already quotes in the array,
//     const randomNumber = Math.floor(Math.random() * bibleQuotes.length);
//     const randomVerse = bibleQuotes[randomNumber];
//     displayBibleQuote(randomVerse);
//   } else { // Otherwise, fetch new quotes from the API.
//     fetchBibleQuotes();
//   }
// });

// const fetchBibleQuotes = async () => {
//   console.log("fetching bible quotes");
//   startLoading();
//   try {
//     const response = await fetch(
//       "https://bible-api.com/romans%201,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16"
//     );

//     if (response.ok) {
//       const data = await response.json();
//       bibleQuotes = data.verses; // Save fetched quotes to the array.
//       const randomNumber = Math.floor(Math.random() * bibleQuotes.length);
//       const randomVerse = bibleQuotes[randomNumber];
//       displayBibleQuote(randomVerse);
//       stopLoading();
//       console.log(bibleQuotes);
//     } else {
//       throw new Error(
//         `Failed to fetch bible quotes. Status code: ${response.status}`
//       );
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default fetchBibleQuotes;


import displayBibleQuote from "../modules/displayBibleQuote.js";
import {
  startLoading,
  stopLoading
} from "../modules/states.js";



let bibleQuotes = []; // Initialize an empty array to store fetched quotes.
let currentIndex = 0; // Initialize the index of the last displayed verse to 0.
//filter



// document.addEventListener("DOMContentLoaded", () => {
//   alert("Welcome to my app!. Click on the next button to navigate through the pages"); // Display pop-up message
// });

const fetchBibleQuotes = async () => {
  console.log("fetching bible quotes");
  startLoading();
  try {
    const response = await fetch(
      "https://bible-api.com/romans%201,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16"
    );

    if (response.ok) {
      const data = await response.json();
      bibleQuotes = data.verses; // Save fetched quotes to the array.
      const currentVerse = bibleQuotes[currentIndex];
      displayBibleQuote(currentVerse);
      currentIndex = (currentIndex + 1) % bibleQuotes.length; // Update the index to the next verse in the array.
      stopLoading();
      console.log(bibleQuotes);
    } else {
      throw new Error(
        `Failed to fetch bible quotes. Status code: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
  }
};

const nextBtn = document.querySelector("button:nth-of-type(1)"); //select the left arrow button
        nextBtn.addEventListener("click", () => {

            if (bibleQuotes.length > 0) { // If there are already quotes in the array,
              const currentVerse = bibleQuotes[currentIndex];
              displayBibleQuote(currentVerse);
              currentIndex = (currentIndex + 1) % bibleQuotes.length; // Update the index to the next verse in the array.
            } else { // Otherwise, fetch new quotes from the API.
              fetchBibleQuotes();
            }
        });

export default fetchBibleQuotes;