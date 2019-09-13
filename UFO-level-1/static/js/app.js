// console.log(data);

var ufoData = data;

var tbody = d3.select("tbody");


// Append table to webpage
function createTable(data) {
  tbody.html("");

  data.forEach(function(ufoTable) {
      //console.log(ufoTable);
      var row = tbody.append("tr");
      Object.entries(ufoTable).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }

// Filter table by user input 
var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = data.filter(event => event.datetime === inputValue);

    console.log(filteredData);
    
    createTable(filteredData);
  });

createTable(ufoData);

