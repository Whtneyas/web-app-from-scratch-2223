// Variablesconst 

myMemberUrl = "https://whois.fdnd.nl/api/v1/member?id=cldeoyw463vaj0bw594n8mhn4";
// HTML elements
let naam = document.querySelector(".naam");
let surname = document.querySelector(".surname");



const insertName= async (API) => {

     const myData = await fetch(API)
        .then((response) => response.json())
        .then((myData) => myData.member);

         console.log(myData);

       naam.innerHTML = myData.name;
       surname.innerHTML = myData.surname;
    };
     insertName(myMemberUrl);


