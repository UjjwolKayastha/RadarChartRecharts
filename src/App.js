import React from 'react';
import RadarChartRecharts from './recharts/RadarChart';
import BarChartRecharts from "./recharts/BarChart";
import "./App.css";


function App() {
  return (
    <div className="App">
      < div className="chart">
        <div>
          <h1>RADAR CHART</h1>
          <RadarChartRecharts />
        </div>
        <div>
          <h1>BAR CHART</h1>
          <BarChartRecharts/>
        </div>
      </div>
    </div>
  );
}

export default App;
