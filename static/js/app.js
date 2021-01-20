// Use the D3 library to read in samples.json.
function getData() {
  d3.json("samples.json").then(function(data) {
      
      console.log(`Data`)
      console.log(data);

      var samples = data.samples
  
  defaultBarPlot(samples)

  // barPlot (samples);
  });   
}

getData();

// Create function to filter out top 10 OTU_ids 
function madeCut (values) {

  values.sort(function(a,b) {return b-a});
  var top_ten = values.slice(0,10);
  console.log(top_ten);

  return top_ten
}

// Create the default plot
function defaultBarPlot(samples) {

  // First sample
  console.log(`Default sample`);
  console.log(samples[0]);

  var y_numbers = samples[0].sample_values;
  top_ten_x = madeCut(y_numbers);

  var y_string = "UTO" + y_numbers;
  console.log(y_string);

  var data = [{
    x: top_ten_x,
    y: y_string,
    text: samples[3].otu_labels,
    type: "bar",
    orientation: "h",

}];

Plotly.newPlot("bar", data)

}


// // Create  dropdown menu to display the top 10 OTUs found in that individual.
// function barPlot(samples) {

//   // Add option for user to select options from drop down menu here....
//   //  Use "Switch" function



//   // trace
//   // values: sample_values 
//   // labels: otu_ids 
//   // hovertext: otu_labels

      
//     var trace1 = {
//         x: samples.map(row => row.otu_ids[i]),
//         y: samples.map(row => row.sample_values[3]),
//         text: samples.map(row => row.otu_labels[3]),
//         type: "bar",
//         orientation: "h",
        
//     }
  
//     // data
//     var data = [trace1];

//     // layout
//     var layout = {
//         title: "Top 10 OTUs found in the selected individual",
//         barmode: "group"
//     }

//     // Render the plot with the div tag with id "bar"
//     Plotly.newPlot("bar", data, layout)

// };

      
      
      


      // var otu_ids = unpack(data.samples, 1);
      // var otu_labels = unpack(data.samples, 3);

      // console.log(sample_values)
      // console.log(otu_ids)
      // console.log(otu_labels)
      // barPlot(sample);