
import BarChart from './BarChart';
import { UserData } from './Data';

import './BarChart.css';

function App() {

  const userData = {
    labels:  UserData.map((data) => data.year),
    datasets: [{
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#57b3f7"],
    }]
  };

  return (
    <div className="App">
      <BarChart chartData={userData} />
    </div>
  );
}

export default App;
