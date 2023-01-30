

import './BarChart.css';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function CircleChart () {

    const data = {
        labels: ['Running Work ', 'Work Progress'],
        datasets: [{
            label: 'Poll',
            data: [60, 30],
            backgroundColor: [' #42f569', '#e8e8e8'],
            borderColor: ['#e8e8e8', '#fff'],
        }]
    }

    const options = {

    }

    return(
        
        <div className="container circle-container">
            <Doughnut data = {data}  options = {options}>
                
            </Doughnut>
        </div>
    );
}

export default CircleChart;