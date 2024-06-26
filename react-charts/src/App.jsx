import React from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="dataCard revenueCard">Chart 1</div>
      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Revenue",
                data: [200, 300, 400],
              },
              {
                label: "Loss",
                data: [90, 80, 70],
              },
            ]
          }}
        />
      </div>
      <div className="dataCard categoryCard">Chart 3</div>
    </div>
  );
};

export default App;
