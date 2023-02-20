const firstPage = document.querySelector("section:nth-of-type(1)");          // selects the firstpage which contains the book image.
const cardPages= document.querySelector("section:nth-of-type(2)");          //select the pages of the book that is where the quotes will be stated on.
const buttonleft = document.querySelector("button:nth-of-type(1)");        //select the left arrow button.
const nameBook = document.querySelector("h2");                            // selects h2 which is the name of the book
const chapter = document.querySelector("h3");                            // selects h3 which is the chapter 
const numVerse = document.querySelector("span");                        //selects the number of the verse 
const verse = document.querySelector("p");                             // selects the p that contains the verse 

let number = 2

//when the first page is been clicked , it dissappears and the the second page appears 

document.querySelector("section:nth-of-type(1) img" ).addEventListener('click', () => {
  firstPage.scrollIntoView({ behavior: 'smooth' });
  firstPage.classList.add('disappear')
});


buttonleft.addEventListener('click', () => {nextButton();})

  fetch('https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10')
  
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  }).then(function (data) {


   // write data in the html
   nameBook.textContent = data.verses[0].book_name;
   chapter.textContent = data.verses[0].chapter;
   numVerse.textContent = data.verses[0].verse;
   verse.textContent = data.verses[0].text;
   

    // This is the JSON from our response
    // console.log(data.verses[number], data.verses[number].book_name);
    console.log(data)

  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });

  const nextButton = () => {
    number = number + 1
    console.log(number)
  }