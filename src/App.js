import './App.css';
import Map from './components/Map';
import HomeMenu from './components/HomeMenu';

function App() {
  return (
    <>
    <div className='app-container'>
      <Map isMarkerShown={null}
        onMarkerClick={()=>{}}>
        </Map>
        <div className='home-menu-container'>
          <HomeMenu />
        </div>
    </div>
  </>
  );
}

export default App;
