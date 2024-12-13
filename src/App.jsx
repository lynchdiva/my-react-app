import './App.css';
import { Chart } from 'react-google-charts';

const data = [
  ['Task', 'Hours per Day'],
  ['HTML', 9],
  ['CSS', 6],
  ['JavaScript', 7],
  ['SCSS', 5]
];

const options = {
  title: 'Most used languages',
  pieHole: 0.4,
  is3D: false
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={'600px'}
      height={'400px'}
    />
  );
}

export default App;
