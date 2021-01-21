// Use the D3 library to read in samples.json.
function getData() {
  d3.json("samples.json").then(data => {
      
    console.log(`Data`)
    console.log(data);

    // names is an array
    var names = data.names

    // metadata and samples are arrays of objects
    var metadata = data.metadata
    var samples = data.samples
  
    // Run functions to create default displays
    createDropdown(names, metadata);
    defaultPlots(samples, metadata);

    // Create event handler when a change takes place to the DOM
    d3.selectAll("#selDataset").on("change", updatePlots, updateInfo);
  

    function updatePlots() {
      
      //  Use D3 to select the dropdown menu
      var dropdownvalue = d3.select("#selDataset").node().value
      
      //  Loop through samples to grab data according to the selected option
      samples.map(sample => {
        if (dropdownvalue == sample.id) {
              
          // Grab all sample values of the selected option
          var samples_values = sample.sample_values;

          // Run the madeCut function to slice out top 10 sample values
          top_ten_x = madeCut(samples);
          var x = top_ten_x.reverse();

          // Grab otu_ids of the 1st sample
          var y_ticks = sample.otu_ids;
          var y = y_ticks.map(otuID => `OTU ${otuID}`).reverse();

          // This isnt working ??????????????????
          // Update Bar Plot
          Plotly.restyle("bar", "X", [x]);
          Plotly.restyle("bar", "y", [y]);
          
          console.log(`Updated values for Bar Plot`)
          console.log(`x: ${x}`)
          console.log(`y: ${y}`)


          // Update Bubble Plot
          Plotly.restyle("bubble", "X", [sample.otu_ids]);
          Plotly.restyle("bubble", "y", [samples_values]);

          console.log(`Updated values for Bubble Plot`)
          console.log(`x: ${sample.otu_ids}`)
          console.log(`y: ${samples_values}`)

        
        }
      })
    };



    // This isnt working??????????????????????????
    function updateInfo() {

      //  Use D3 to select the dropdown menu
      var dropdownvalue = d3.select("#selDataset").node().value

      // Change infomation box
      metadata.map(row => {
        if (dropdownvalue == metadata.id) {
          var new_entry = Object.entries(row);

        d3.select("#sample-metadata")
        .append("p")
        .text(`${new_entry}`);

          }
      });
      
    };
     
  });

};

getData();

// Create  dropdown menu 
function createDropdown (names) {
  var dropdown_options = d3.select("#selDataset");

  names.map(name => {
    dropdown_options.append("option").attr("value", name).text(name);

  })
};

// Create the default plots
function defaultPlots(samples, metadata) {

  // Grab all sample values of the 1st sample
  var sample_values = samples[0].sample_values;
  var otuIDs = samples[0].otu_ids;
  var otuLabels = samples[0].otu_labels;

  //  Grab demo info of default sample
  var defaultdemoinfo = metadata[0]
  console.log(`Default demoinfo`)
  console.log(defaultdemoinfo)

  // This isnt working
  var demo_info = d3.select("#sample-metadata")

    
  Object.entries(defaultdemoinfo).forEach(([key, value]) => {
    demo_info.append("p").text(`${key}:${value}`)
  })
  

  // ---------------------------------------------------------------
  // Default Bar Plot
  // ---------------------------------------------------------------

  // Run the madeCut function to slice out top 10 sample values
  var top_ten = madeCut(sample_values);
  var top_ten_x = top_ten[0];
  var top_ten_y = top_ten[1];
  
  console.log(`Default top ten samples for Bar Plot`);
  console.log(top_ten_x);
  console.log(top_ten_y);


  var trace1 = {
    x: top_ten_x.reverse(),
    y: top_ten_y.reverse(),
    text: otuLabels,
    type: "bar",
    orientation: "h"

  };

  // trace1
  var data1 = [trace1];

  // layout
  var layout1 = {
        title: "Top 10 OTUs found in the selected individual",
        barmode: "group",
        xaxis: {
          title: {
            text: 'Sample Values',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
  };

  Plotly.newPlot("bar", data1, layout1);

  // ---------------------------------------------------------------
  // Default Bubble Plot
  // ---------------------------------------------------------------

  console.log(`Default samples for Bubble Plot`)
  console.log(sample_values);

  var trace2 = {
    x: otuIDs,
    y: sample_values,
    text: otuLabels,
    mode: "markers",

    // Marker size and color
    marker: {                     
        size: sample_values,
        sizeref: 0.1,
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
    xaxis: {
      title: {
        text: 'OTU_IDS',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Sample Values',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
    
  };

  Plotly.newPlot("bubble", data2, layout2);

};


// Create function to sort and slice out top 10 values 
function madeCut (sample_values, ) {

  var top_ten_x = samples.sample_values.slice(0,10);
  var top_ten_y = samples.otu_ids.slice(0,10);

  return top_ten_x, top_ten_y
};

         