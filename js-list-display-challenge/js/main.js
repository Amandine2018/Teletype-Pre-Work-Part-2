var cities = [
  "Denver",
  "Boulder",
  "Black Hawk",
  "Aurora"
];

 for (let i = 0; i < cities.length; i++) {
   var newListEl = document.createElement("li");
   let city = newListEl.append(cities[i]);
   $( ".list-cities" ).append(newListEl);
 }

 // let cityList= document.querySelector("ul.list-cities");


// var list = document.querySelector('ul.list-cities');
//
// for (var i = 0; i < cities.length; i++) {
//   listItem = document.createElement('li');
//   listItem.innerText = cities[i];
//   list.append(listItem);
// }
