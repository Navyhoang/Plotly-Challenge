// Use the D3 library to read in samples.json.
function getData() {
  d3.json("samples.json").then(data => {
      
    console.log(`Data`)
    console.log(data);

    var samples = data.samples
    var names = data.names
  
    createDropdown(names);
    defaultPlots(samples);

    // // Create event handler when a change takes place to the DOM
    d3.selectAll("#selDataset").on("change", optionChanged);

    function optionChanged() {
      
      //  Use D3 to select the dropdown menu
      var dropdownvalue = d3.select("#selDataset").node().value
      
      //  Loop through samples to grab data according to the selected option
      samples.map(sample => {
        if (dropdownvalue == sample.id) {
              
          // Grab all sample values of the 1st sample
          var samples_values = sample.sample_values;

          // Run the madeCut function to slice out top 10 sample values
          top_ten_x = madeCut(samples_values);
          x = top_ten_x.reverse();

          // Grab otu_ids of the 1st sample
          var y_ticks = sample.otu_ids;
          y = y_ticks.map(otuID => `OTU ${otuID}`).reverse();

        };
      });
    
      updateBarplot (samples);
    }; 
  });
};

getData();

// Create function to sort and slice out top 10 values 
function madeCut (values) {

  values.sort(function(a,b) {return b-a});
  var top_ten = values.slice(0,10);
  console.log(top_ten);

  return top_ten
}

// Create the default plots
function defaultPlots(samples) {

  // First sample
  console.log(`Default sample`);
  console.log(samples[0]);

  // Grab all sample values of the 1st sample
  var sample_values = samples[0].sample_values;
  var otuIDs = samples[0].otu_ids;
  var otuLabels = samples[0].otu_labels;

  console.log(`sample 0`)
  console.log(sample_values);
  // ---------------------------------------------------------------
  // Default Bar Plot
  // ---------------------------------------------------------------

  // Run the madeCut function to slice out top 10 sample values
  top_ten_x = madeCut(sample_values);
  
  console.log(`sliced sample`);
  console.log(top_ten_x);

  var trace1 = {
    x: top_ten_x.reverse(),
    y: otuIDs.map(otuID => `OTU ${otuID}`).reverse(),
    text: otuLabels,
    type: "bar",
    orientation: "h"

  };

  // trace1
  var data1 = [trace1];

  // layout
  var layout1 = {
        title: "Top 10 OTUs found in the selected individual",
        barmode: "group"
  };

  Plotly.newPlot("bar", data1, layout1);

  // ---------------------------------------------------------------
  // Default Bubble Plot
  // ---------------------------------------------------------------

  var trace2 = {
    x: otuIDs,
    y: sample_values,
    text: otuLabels,
    mode: "markers",

    // Marker size and color
    marker: {                     
        size: sample_values,
        sizemode: 'area',
        color: otuIDs
    }
    
  };

  // data
  var data2 = [trace2];

  // layout
  var layout2 = {
    title: "Sample Distribution Bubble Chart",
    showlegend: false,
  }

  Plotly.newPlot("bubble", data2, layout2);

};

// // Create  dropdown menu 
function createDropdown (names) {
  var dropdown_options = d3.select("#selDataset");

  names.map(name => {
    dropdown_options.append("option").attr("value", name).text(name);

  })
};