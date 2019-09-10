// console.log(data);

var ufoData = data;

var tbody = d3.select("tbody");

// Append table to webpage
data.forEach(function(ufoTable) {
    //console.log(ufoTable);
    var row = tbody.append("tr");
    Object.entries(ufoTable).forEach(function([key, value]) {
      //console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Find date/time rows matching date input
var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(ufoData);

    var filteredData = ufoData.filter(event => event.datetime === inputValue);

    console.log(filteredData);
});

// i'm getting the right data in the console
// how do i get this data to appear?
// how do i get everything to reset/pull different dates if a user wants to filter another way?