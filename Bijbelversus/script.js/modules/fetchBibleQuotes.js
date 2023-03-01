// fetching data 


import displayBibleQuote from "../modules/displayBibleQuote.js"

const fetchBibleQuote = async () => {
    console.log("it works")
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

  export default fetchBibleQuote