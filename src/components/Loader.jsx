import React from 'react'
import "../styles/loaderStyle.css";

function Loader() {
  return (
    <>
    <div className="spinner d-flex justify-content-center">
        <div className="outer-ring d-flex flex-column align-items-center justify-content-center mx-3">
            <div className="inner-ring d-flex flex-column align-items-center justify-content-center">
                <div className="center d-flex flex-column align-items-center justify-content-center">
                    <img className="spinner-img" src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="Logo" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Loader