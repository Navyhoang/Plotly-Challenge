//  object of value and array
var movie = {
    name: 'Star Wars',
    sequeles: [15, 6, 1,2]
};

            // when value is a value
            console.log(movie.name);

            // when value is an array
            console.log(movie.sequeles[0]);

            // Log all keys of an object
            Object.keys(movie)

            // Log all values of an object
            Object.values(movie)

            // Log all entries of an object
            Object.entries(movie)

// -----------------------------------------------------------------
// Map an array
var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

            var stagesArray = theStagesOfJS.map(function(item, index) {
            return `Stage ${index}  is ${item}`;
            });

// -----------------------------------------------------------------
// Map an array of objects
var princesses = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];
  
            princesses.forEach(function(princess) {
                console.log(`${princess.name} is ${princess.age} years old. `)
            });

            var names = princesses.map(function(princess) {
                return princess.name
              })

            // ----------------
            // Console log key-value pairs
            Object.entries(userInfo).forEach( ([key, value]) => 
                    console.log(`The item with key ${key} is ${value}`))

var recipes = [
    { dish: "Fried fish", spice: "Dorrigo" },
    { dish: "Crab Rangoon", spice: "Akudjura" },
    { dish: "Pickled Okra", spice: "Chili pepper" }]

            var dishes = [];
            var spices = [];

            // Push key-value pairs into seperate lists
            recipes.forEach((recipe) => {
                Object.entries(recipe).forEach(([key, value]) => {
                  if (key === "dish") {
                    dishes.push(value)
                  }
                  else {
                    spices.push(value)
                  }
                })
              })
              
    
            
                      
// -----------------------------------------------------------------
// Add new li and add values
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .enter()
    .append("li")
    .text(d => d+1000);

d3.select("tbody")
    // select tr even tho they are not created yet
    .selectAll("tr")
    .data(austinWeather)
    .enter()
    .append("tr")
    // Use .html() method to return td elements inside each table row.
    .html(d => `<td>${d.date}</td><td>${d.high}</td><td>${d.low}</td>`)
  

            
  
