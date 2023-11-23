import wineData from './wine-data.json';
import Table from './components/Table';
import { groupDataByClass, createGammaProperty } from './utils';
import './App.css';

function App() {
  // add gamma property here
  // it is added here as we need to render both the tables together
  // so I see no point in adding this property to the data set later in a useEffect
  createGammaProperty(wineData);

  // group data by class
  const groupedData = groupDataByClass(wineData);

  return (
    <div className="App">
      <Table data={groupedData} property='Flavanoids' />
      <Table data={groupedData} property='Gamma' />
    </div>
  );
}

export default App;
