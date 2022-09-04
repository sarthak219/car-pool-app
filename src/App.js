import './App.css';
import Map from './components/Map';
import HomeMenu from './components/HomeMenu';
import { useState } from 'react';

function App() {
  const [mapLoaded, setMapLoaded] = useState(false);
  return (
    <>
    <div className='app-container'>
      <Map isMarkerShown={null}
        onMarkerClick={()=>{}}
        setMapLoaded={setMapLoaded}>
        </Map>
        <div className='home-menu-container'>
          <HomeMenu isMapLoaded={mapLoaded}/>
        </div>
    </div>
  </>
  );
}

export default App;
