


// Use the D3 library to read in samples.json.
function getData(sample) {
    d3.json("samples.json").then(function(data) {
        var sample_values = unpack(data.samples, 2);
        var otu_ids = unpack(data.samples, 1);
        var otu_labels = unpack(data.samples, 3);

        console.log(sample_values)
        console.log(otu_ids)
        console.log(otu_labels)
        // barPlot(sample);
    });   
}

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Refer to the test Jupyter Notebook file for the json file structure
    // values: sample_values 
    // labels: otu_ids 
    // hovertext: otu_labels


// function barPlot(sample) {

//     // Add option for user to select options from drop down menu here....
//     //  Use "Switch" function



//     // trace
//     var trace1 = {
//         x: otu_labels.map(row),
//         y: sample_values.map(row),
//         type: "bar",
//         orientation: "h"
//     }

    // data
//     var data = [trace1];

//     // layout
//     var layout = {
//         title: "Top 10 OTUs found in the selected individual",
//         barmode: "group"
//     }

//     // Render the plot with the div tag with id "bar"
//     Plotly.newPlot("bar", data, layout)

// };
    

// // Create a bubble chart that displays each sample.
//     // x: otu_ids
//     // y: sample_values
//     // marker size: sample_values
//     // marker colors: otu_ids
//     // text: otu_labels


// function bubblePlot(sample) {

//     // trace
//     var trace1 = {
//         x: otu_ids.map(row),
//         y: sample_values.map(row),

//         // Hover text of bubble chart
//         text: otu_labels.map(row),

//         mode: "markers",
//         // Marker size and color
//         marker: {                     
//             size: sample_values.map(row),
//             sizemode: 'area',
//             color: otu_ids.map(row)
//         }
//     }

//     // data
//     var data = [trace1];

//     // layout
//     var layout = {
//         title: "Sample Distribution Bubble Chart",
//         showlegend: false,

//     }

//     // Render the plot with the div tag with id "bar"
//     Plotly.newPlot("bubble", data, layout)

// };

// bubblePlot();

// Display the sample metadata, i.e., an individual's demographic information.


// Display each key-value pair from the metadata JSON object somewhere on the page.


// Update all of the plots any time that a new sample is selected.
// Create a dashboard