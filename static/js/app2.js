// Use the D3 library to read in samples.json.
function getData() {
  d3.json("samples.json").then(data => {
      
    console.log(`Data`)
    console.log(data);

    // names is an array
    var names = data.names

    var defaultSample = names[0]

    //createMetadata(defaultSample);
    //createPlots(defualtSample);

    // metadata and samples are arrays of objects
    var metadata = data.metadata
    var samples = data.samples
  
    // Run functions to create default displays
    createDropdown(names, metadata);
    defaultPlots(samples, metadata);

    // Create event handler when a change takes place to the DOM
    d3.selectAll("#selDataset").on("change", updatePlots);

    
  })
};



function createMetadata(id) {
  d3.json("samples.json").then(data => {

    var metadata = data.metadata

    var filteredArray = metadata.filter(data => data.id == id)[0]

    var demo_info = d3.select("#sample-metadata")

    demo_info.html("")
  
    Object.entries(defaultdemoinfo).forEach(([key, value]) => {
      demo_info.append("p").text(`${key}:${value}`)
    })
  })
};

  
  

    // function updatePlots() {
      
    //   //  Use D3 to select the dropdown menu
    //   var dropdownvalue = d3.select("#selDataset").node().value
      
    //   //  Loop through samples to grab data according to the selected option
    //   samples.map(sample => {
    //     if (dropdownvalue == sample.id) {
              
    //       // Update Bar Plot
    //       var selected_Sample = sample;
    //       console.log(`Selected Sample`)
    //       console.log(selected_Sample)


    //       // Run the madeCut function to slice out top 10 sample values
    //       var top_ten_new = madeCut(selected_Sample);
    //       console.log(`returned new values`)
    //       console.log(top_ten_new)

    //       var top_ten_new_x = top_ten_new[0];
    //       var top_ten_new_y = top_ten_new[1];

          
          
    //       console.log(`Updated values for Bar Plot`)
    //       console.log(`x: ${top_ten_new_x}`)
    //       console.log(`y: ${top_ten_new_y}`)

          
    //       var trace1 = {
    //         x: top_ten_new_x.reverse(),
    //         y: `OTU: ${top_ten_new_y.reverse()}`,
    //         text: otuLabels,
    //         type: "bar",
    //         orientation: "h"

    //       };

    //       // trace1
    //       var data1 = [trace1];

    //       // layout
    //       var layout1 = {
    //             title: "Top 10 OTUs found in the selected individual",
    //             margin: {
    //               t: 50,
    //               l: 200
    //             }
    //       };
          

    //       // Update Bar Plot
    //       Plotly.restyle("bar", "x", [top_ten_new_x]);
    //       Plotly.restyle("bar", "y", [top_ten_new_y]);

    //       // Update Bubble Plot
    //       var new_x = sample.otu_ids;
    //       var new_y = sample.sample_values;

    //       Plotly.restyle("bubble", "x", [new_x]);
    //       Plotly.restyle("bubble", "y", [new_y]);

    //       console.log(`Updated values for Bubble Plot`)
    //       console.log(`x: ${new_x}`)
    //       console.log(`y: ${new_y}`)



    //     }
    // });

    // // Update info
    // function updateMetadata() {

    //   var dropdown_options = d3.select("#selDataset").node().value

    //   if (dropdownvalue == sample.id) {
    //     var new_info = metadata[0]
    //     console.log(`Default demoinfo`)
    //     console.log(defaultdemoinfo)
  
    //     // This isnt working
    //     var demo_info = d3.select("#sample-metadata")
          
    //     Object.entries(defaultdemoinfo).forEach(([key, value]) => {
    //       demo_info.append("p").text(`${key}:${value}`)
    //     })
    //   }



    // };
      
    // };
     
//   });

// };

// getData();

// // Create  dropdown menu 
function createDropdown (names) {
  var dropdown_options = d3.select("#selDataset");

  names.map(name => {
    dropdown_options.append("option").attr("value", name).text(name);

  })
};

// // Create the default plots
// function defaultPlots(samples, metadata) {

//   // Grab all sample values of the 1st sample
//   var sample_values = samples[0].sample_values;
//   var otuIDs = samples[0].otu_ids;
//   var otuLabels = samples[0].otu_labels;

//   // ---------------------------------------------------------------
//   // Default Demographic Info
//   // ---------------------------------------------------------------

//   //  Grab demo info of default sample
//   var defaultdemoinfo = metadata[0]
//   console.log(`Default demoinfo`)
//   console.log(defaultdemoinfo)

//   var demo_info = d3.select("#sample-metadata")
    
//   Object.entries(defaultdemoinfo).forEach(([key, value]) => {
//     demo_info.append("p").text(`${key}:${value}`)
//   })
  
//   // ---------------------------------------------------------------
//   // Default Bar Plot
//   // ---------------------------------------------------------------

//   // Run the madeCut function to slice out top 10 sample values
//   var default_sample = samples[0]
  
//   console.log(`Default sample`)
//   console.log(default_sample)

//   // Access returned values from madeCut function 
//   var top_ten = madeCut(default_sample);
//   var top_ten_x = top_ten[0];
//   var top_ten_y = top_ten[1];

//   console.log(`Default top ten samples for Bar Plot`);
//   console.log(`x`)
//   console.log(top_ten_x);
//   console.log(`y`)
//   console.log(top_ten_y);


//   var trace1 = {
//     x: top_ten_x.reverse(),
//     y: `OTU: ${top_ten_y.reverse()}`,
//     text: otuLabels,
//     type: "bar",
//     orientation: "h"

//   };

//   // trace1
//   var data1 = [trace1];

//   // layout
//   var layout1 = {
//         title: "Top 10 OTUs found in the selected individual",
//         margin: {
//           t: 50,
//           l: 200
//         }
//         // // barmode: "group",
//         // xaxis: {
//         //   title: {
//         //     text: 'Sample Values',
//         //     font: {
//         //       family: 'Courier New, monospace',
//         //       size: 18,
//         //       color: '#7f7f7f'
//         //     }
//         //   }
//         // }
//   };

//   Plotly.newPlot("bar", data1, layout1);

//   // ---------------------------------------------------------------
//   // Default Bubble Plot
//   // ---------------------------------------------------------------

//   console.log(`Default samples for Bubble Plot`)
//   console.log(sample_values);

//   var trace2 = {
//     x: otuIDs,
//     y: sample_values,
//     text: otuLabels,
//     mode: "markers",

//     // Marker size and color
//     marker: {                     
//         size: sample_values,
//         sizeref: 0.1,
//         sizemode: 'area',
//         color: otuIDs
//     }
    
//   };

//   // data
//   var data2 = [trace2];

//   // layout
//   var layout2 = {
//     title: "Sample Distribution Bubble Chart",
//     showlegend: false,
//     xaxis: {
//       title: {
//         text: 'OTU_IDS',
//         font: {
//           family: 'Courier New, monospace',
//           size: 18,
//           color: '#7f7f7f'
//         }
//       },
//     },
//     yaxis: {
//       title: {
//         text: 'Sample Values',
//         font: {
//           family: 'Courier New, monospace',
//           size: 18,
//           color: '#7f7f7f'
//         }
//       }
//     }
    
//   };

//   Plotly.newPlot("bubble", data2, layout2);

// };


// // Create function to sort and slice out top 10 values 
// function madeCut (sample) {

//   var top_ten_x = sample.sample_values.slice(0,10);
//   var top_ten_y = sample.otu_ids.slice(0,10);

//   return [top_ten_x, top_ten_y];
// };