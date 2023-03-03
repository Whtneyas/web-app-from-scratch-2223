

const nameBook = document.querySelector("h2"); // selects h2 which is the name of the book
const chapter = document.querySelector("h3"); // selects h3 which is the chapter 
const numVerse = document.querySelector("span"); //selects the number of the verse 
const verse = document.querySelector("p"); // selects the p that contains the verse 


const displayBibleQuote = (randomVerse) => {
    nameBook.textContent = randomVerse.book_name;
    chapter.textContent = randomVerse.chapter;
    numVerse.textContent = randomVerse.verse;
    verse.textContent = randomVerse.text
  }


  export default displayBibleQuote