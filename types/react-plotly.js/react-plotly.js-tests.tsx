import Recaptcha = require('react-plotly.js');
import * as ReactDOM from "react-dom";
import * as React from "react";
import Plot from "react-plotly.js";

ReactDOM.render(
  <Plot
    data={[
      {
        type: 'scatter',
        mode: 'lines+markers',
        x: [1, 2, 3],
        y: [2, 6, 3],
        marker: {color: 'red'}
      },
      {
        type: 'bar',
        x: [1, 2, 3],
        y: [2, 5, 3]
      }
    ]}
  />,
  document.getElementById('example')
);
