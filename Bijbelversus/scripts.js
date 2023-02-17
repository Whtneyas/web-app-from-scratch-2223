const firstPage = document.querySelector("section:nth-of-type(1)");
const cardPages= document.querySelector("section:nth-of-type(2)");
const buttonleft = document.querySelector("button:nth-of-type(1)")

let number = 2


document.querySelector('section:nth-of-type(1) img ').addEventListener('click', () => {
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
    // This is the JSON from our response
    console.log(data.verses[number], data.verses[number].book_name);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });

  const nextButton = () => {
    number = number + 1
    console.log(number)
  }