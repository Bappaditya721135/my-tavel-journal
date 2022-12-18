import Navbar from './components/Navbar';
import TravelDestinations from './components/TravelDestinations';
import data from './data/data';
import './styles.css';


function App() {
  const destinationsArray = data.map(destination => {
    return <TravelDestinations 
      {...destination}
    />
  });
  return (
    <div className="App">
      <Navbar />
      <div className="destination-wraper">
      {destinationsArray}
      </div>
    </div>
  );
}

export default App;
