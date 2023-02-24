const firstPage = document.querySelector("section:nth-of-type(1)"); // selects the firstpage which contains the book image.
const cardPages = document.querySelector("section:nth-of-type(2)"); //select the pages of the book that is where the quotes will be stated on.
const nextBtn = document.querySelector("button:nth-of-type(2)"); //select the left arrow button.
const nameBook = document.querySelector("h2"); // selects h2 which is the name of the book
const chapter = document.querySelector("h3"); // selects h3 which is the chapter 
const numVerse = document.querySelector("span"); //selects the number of the verse 
const verse = document.querySelector("p"); // selects the p that contains the verse 


//first page disappears when it is been clicked
document.querySelector("section:nth-of-type(1) img").addEventListener('click', () => {
  firstPage.scrollIntoView({
    behavior: 'smooth'
  });
  firstPage.classList.add('disappear')
});

// fetching data 
const fetchBibleQuote = async () => {
  
  const response = await fetch('https://bible-api.com/romans%201,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16');

  if (response.ok) {
    const data = await response.json();
    const randomNumber = Math.floor(Math.random() * data.verses.length);
    const randomVerse = data.verses[randomNumber]
    displayBibleQuote(randomVerse);
  } else {
    throw new Error(`Failed to fetch bible quote. Status code: ${response.status}`);
  }
}
//writing html 
const displayBibleQuote = (randomVerse) => {
  nameBook.textContent = randomVerse.book_name;
  chapter.textContent = randomVerse.chapter;
  numVerse.textContent = randomVerse.verse;
  verse.textContent = randomVerse.text
}

fetchBibleQuote();

nextBtn.addEventListener('click', fetchBibleQuote)