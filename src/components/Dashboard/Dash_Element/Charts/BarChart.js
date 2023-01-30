
import './BarChart.css';

import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart ({chartData}) {
    return (
        <div className="charContainer">
            <Bar data ={chartData} />
        </div>
        
    );
}

export default BarChart;