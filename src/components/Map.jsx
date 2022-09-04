import React, {useState, useEffect, useCallback} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Loader from './Loader';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationCrosshairs} from "@fortawesome/free-solid-svg-icons"
import "../styles/mapStyle.css"

const containerStyle = {
  width: '100%',
  height: '100%'
};
let center = {
  lat: 49.246292,
  lng: -123.116226
};


function MyComponent(props) {
    const [map, setMap] = useState(null)
    const [center, setMapCenter] = useState(null);
    const [isMapCentered, setIsMapCentered] = useState(true);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBEjZUjYdf70Nacb4zQJrcZZoAac-0tL2c",
        libraries: ["places"]
    })
    
    useEffect(()=>{
        if(!center) {
            navigator.geolocation.getCurrentPosition(findCenter, failCallback)
        }
        props.setMapLoaded(isLoaded);
        if(map) {
            map.addListener("center_changed", ()=>{
                // console.log(center, map.getCenter());
                // console.log(center, map.getCenter().lat());
                // console.log(center, map.getCenter().lng());
                // console.log("Effect", center.lat, map.getCenter().lat().toFixed(7), center.lng, map.getCenter().lng().toFixed(7));
                setIsMapCentered(center.lat == map.getCenter().lat().toFixed(7) && center.lng == map.getCenter().lng().toFixed(7));
            });
        }
    }, [center, isLoaded, map]);

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
    <>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={(map)=>setMap(map)}
            // onUnmount={onUnmount}
            options={{zoomControl:false, streetViewControl:false, mapTypeControl:false, fullscreenControl:false}}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <>
                <Marker position={center}></Marker>
            </>
        </GoogleMap>
        {!isMapCentered ?
            <button className='re-center-btn' onClick={async ()=>{
                await map.panTo(center)
            }
            }>
                <FontAwesomeIcon icon={faLocationCrosshairs} />
            </button> 
            :
            <></>
        }
      </>
  ) 
  :
   <Loader/>
}

export default React.memo(MyComponent)