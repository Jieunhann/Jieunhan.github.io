
let flowers = [
  {name: "Marc-André-ter-Stegen", amount: 5},
  {name: "Sergiño-Dest", amount: 5},
  {name: "Gerard-Piqué", amount: 10},
  {name: "Ronald-Araújo", amount: 10},
  {name: "Sergio-Busquets", amount: 7},
  {name: "Riqui-Puig", amount: 12},
  {name: "Ousmane-Dembélé ", amount: 12},
  {name: "Dani-Alves", amount: 12},
  {name: "Memphis-Depay", amount: 12},
  {name: "Ansu-Fati", amount: 12},
  {name: "Adama-Traoré", amount: 12},
  {name: "Nico-González", amount: 12},
  {name: "Clément-Lenglet", amount: 12},
  {name: "Pedri", amount: 12},
  {name: "Jordi-Alba", amount: 12},
  {name: "Ferran-Torres", amount: 12},
  {name: "Sergi-Roberto", amount: 12},
  {name: "Frenkie-de-Jong", amount: 12},
  {name: "Samuel-Umtiti", amount: 12},
  {name: "Eric-García", amount: 12},
  {name: "Pierre-Emerick-Aubameyang", amount: 12},
  {name: "Alisson", amount: 12},
  {name: "Fabinho", amount: 12},
  {name: "Virgil-van-Dijk", amount: 12},
  {name: "Ibrahima-Konaté", amount: 12},
  {name: "Thiago-Alcântara", amount: 12},
  {name: "James-Milner", amount: 12},
  {name: "Naby-Keïta", amount: 12},
  {name: "Roberto-Firmino", amount: 12},
  {name: "Sadio-Mané", amount: 12},
  {name: "Mohamed-Salah", amount: 12},
  {name: "Jordan-Henderson", amount: 12},
  {name: "Alex-Oxlade-Chamberlain", amount: 12},
  {name: "Takumi-Minamino", amount: 12},
  {name: "Diogo-Jota", amount: 12},
  {name: "Kostas-Tsimikas", amount: 12},
  {name: "Luis-Díaz", amount: 12},
  {name: "Andrew-Robertson", amount: 12},
  {name: "Divock-Origi", amount: 12},
  {name: "Joël-Matip", amount: 12},
  {name: "Trent-Alexander-Arnold", amount: 12},
  {name: "Harvey-Elliott", amount: 12},
  {name: "Lionel-Messi", amount: 12},
  {name: "Jack-Grealish", amount: 12},
  {name: "David-Beckham", amount: 12},
  {name: "Cristiano-Ronaldo", amount: 12},
  {name: "Gareth-Bale", amount: 12},
  {name: "Neymar-Jr", amount: 12},
  {name: "Raheem-Sterling", amount: 12},
  {name: "Robert-Lewandowski", amount: 12},
  {name: "Harry-Kane", amount: 12}
  ];

// First show all the flowers and create divs for each of them
let container = document.querySelector(".a");
// create a counter variable that will give us each flowers number in the array
let i = 0;
let b;

function displayFlowers(flower) {
  // create a for loop that will run based on the flower amount
  for (var b = 0; b < flower.amount; b++) {
    // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let flowerDiv = container.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("flower");
  // adds a specific class to each new div
  newItem.classList.add(flower.name);
  newItem.classList.add(flower.name + [i]);
  // places the flower name and amount to the div
  // flowerDiv.innerHTML = flower.name;
  }

}
// loops through the flowers and runs the displayFlowers function for each one
flowers.forEach(displayFlowers);
