import React, {useState, useEffect, useCallback} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Loader from './Loader';

const containerStyle = {
  width: '100%',
  height: '100%'
};
let center = {
  lat: 49.246292,
  lng: -123.116226
};


function MyComponent() {
    const [map, setMap] = useState(null)
    const [center, setMapCenter] = useState(null);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBEjZUjYdf70Nacb4zQJrcZZoAac-0tL2c"
    })
    
    useEffect(()=>{
        if(!center) {
            navigator.geolocation.getCurrentPosition(findCenter, failCallback)
        }
    }, [center]);

function findCenter(position) {
    const {latitude, longitude} = position.coords;
    setMapCenter({
        lng: longitude,
        lat: latitude
    })
    console.log("new center",center);
}
function failCallback() {
    console.log("failed");
}

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded && center ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker position={center}></Marker>
        </>
      </GoogleMap>
  ) : <><Loader /></>
}

export default React.memo(MyComponent)