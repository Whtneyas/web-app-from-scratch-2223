// Define all variables 
const h1 = document.querySelector("h1")

//Make an object
const myObject = {
  settings:"on", // (key:value pair)
  walk: function(){ //method
    console.log('lopen')
  }
}



fetchData()

myObject.walk




function fetchData(){
  const url ='https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/member?id=cldeoyw463vaj0bw594n8mhn4'
  console.log(2)

    const data = fetch(url) 
            .then(response => response.json())
            .then (data =>{

            })

}

function $(element){ 
  return document.querySelector(element)

}

function $$(elements){

}







