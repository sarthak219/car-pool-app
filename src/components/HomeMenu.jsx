import React from 'react'
import Rides from './Rides'
import "../styles/homeMenuStyle.css"
import { useState } from 'react'

function HomeMenu() {
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
    ]);
  return (
    <div className='menu-container'>
        <input type="text" placeholder='Enter your destination...'/>
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