/* globals require */
console.log("Hello, Airtable");

let container = document.querySelector(".container");

// load the airtable library, call it "Airtable"
let Airtable = require("airtable");
// import airtable from './airtable.browser.js'
// let Airtable = airtable()
console.log(Airtable);

// use the airtable library, connect to our base using API key
let base = new Airtable({ apiKey: "keykgK831W2O5hVUc" }).base(
  "appGvNooqCqgCBZQH"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base('Sheet2').select({}).eachPage(gotPageOfSoccer, gotAllSoccer);

// an empty array to hold our book data
let soccer = [];


// callback function that receives our data
function gotPageOfSoccer(records, fetchNextPage) {
  console.log("gotPageOfSoccer()");
  // add the records from this page to our books array
  soccer.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSoccer(err) {
  console.log("gotAllSoccer()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading soccer");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogSoccer();
  showSoccer();
}

// just loop through the books and console.log them
function consoleLogSoccer() {
  console.log("consoleLogSoccer()");
  soccer.forEach((soccer) => {
    console.log("Soccer:", soccer);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showSoccer() {
  console.log("showSoccer()");
  soccer.forEach((soccer) => {
    let soccerTextHolder = document.createElement("div");
    soccerTextHolder.classList.add("entry");
    soccerTextHolder.innerText = soccer.fields.Name;

    let Nationality = document.createElement("p");
    Nationality.classList.add("nationality");
    Nationality.innerText = soccer.fields.Nationality;

    let Club = document.createElement("p");
    Club.classList.add("club");
    Club.innerText = soccer.fields.Club;

    let Position = document.createElement("p");
    Position.classList.add("position");
    Position.innerText = soccer.fields.Position;

    let Age = document.createElement("p");
    Age.classList.add("age");
    Age.innerText = soccer.fields.Age;

    let Image = document.createElement("img");
    Image.classList.add("image");
    Image.setAttribute(src, soccer.fields.Image)

    soccerTextHolder.appendChild(Nationality);
    soccerTextHolder.appendChild(Club);
    soccerTextHolder.appendChild(Position);
    soccerTextHolder.appendChild(Age);
    soccerTextHolder.appendChild(Image);
     container.appendChild(soccerTextHolder);


  });
}
