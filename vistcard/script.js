// const h1 = document.querySelector("h1")

// const squadUrl =  "https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim";

// // give temporarily access on https://cors-anywhere.herokuapp.com/corsdemoconst 




// const myData = fetch(squadUrl)  
//               .then((response) => response.json())  
//               .then((myData) =>

//                console.log(myData.squad.members[7]));

            





// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim', true)

request.onload = function () {
  // Begin accessing JSON data here
  
}

// Send request
request.send()