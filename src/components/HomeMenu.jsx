import React from 'react'
import Rides from './Rides'
import "../styles/homeMenuStyle.css"
import { useState } from 'react'
import {Autocomplete} from "@react-google-maps/api"
import { useEffect } from 'react'

function HomeMenu(props) {
    const [canSearch, setCanSearch] = useState(false);
    useEffect(()=>{
        setCanSearch(props.isMapLoaded);
    }, [props.isMapLoaded]);

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [rides, setRides] = useState([
        {
            currentLocation: "Dwarka, Sector-12",
            destination: "BB Block, Janakpuri",
            time: "41 mins"
        },
        {
            currentLocation: "Vegas Mall, Dwarka",
            destination: "Ambience Mall, Gurgaon",
            time: "1 hr 10 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
        {
            currentLocation: "Mumbai",
            destination: "Pune",
            time: "4 hrs 52 mins"
        },
    ]);
  return (
    <div className='menu-container'>
        {canSearch ?
        <>
            <Autocomplete>
                <input id='startingPoint' type="text" placeholder='Enter starting point' className='mb-3'/>
            </Autocomplete> 
            <Autocomplete>
                <input id='destination' type="text" placeholder='Enter your destination' className='mb-3'/>
            </Autocomplete> 
        </>
        :
                <input type="text" placeholder='Enter your destination...' disabled/>
        }

        <button className='route-btn'>Search Route</button>

        <h1 className='my-3 heading'>Nearby Rides</h1>

        <div className="rides-container">
            {rides.map((ride, index)=>{
                return <Rides currentLocation={ride.currentLocation} destination={ride.destination} time={ride.time}/>
            })}
            {/* <Rides currentLocation={"Vegas Mall, Dwarka"} destination={"Ambience Mall, Gurgaon"} time={"1 hr 10 mins"}/> */}
        </div>
    </div>
  )
}

export default HomeMenu