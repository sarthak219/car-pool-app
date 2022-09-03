import React from 'react'
import { useState } from 'react'
import "../styles/rideStyle.css"

function Rides(props) {
    const [isSelected, setIsSelected] = useState(false);

    const handleOnClick = (e) => {
        setIsSelected(prev=>!prev);
    }

    return (
        <div className={`ride d-flex ${isSelected ? " selected" : ""}`} onClick={handleOnClick}>
            <div className="left d-flex flex-column justify-content-center">
                {/* <p><strong>From:</strong><br/>Dwarka, Sector 12</p> */}
                {/* <p><strong>To:</strong><br/>BB-Block, Janakpuri</p> */}
                <p><strong>From:</strong><br/>{props.currentLocation}</p>
                <p><strong>To:</strong><br/>{props.destination}</p>
            </div>
            <div className="right d-flex align-items-center">
                <h1 className='time'>{props.time}</h1>
                {/* <h1 className='time'>41 mins</h1> */}
            </div>
        </div>
    )
}

export default Rides