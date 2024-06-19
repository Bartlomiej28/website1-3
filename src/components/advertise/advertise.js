import React from 'react'
import "./advertise.css";

export default function Advertise() {
  return (
    <div className="section advert container">
    <div className="row">
      <div className="advert-container col-12">
        <div className="styled row">
          <div className="advert-text col-xl-8 col-md-8 col-sm-12">
            <div className="advert-subtitle">
              Request Early Access to Get Started
            </div>
            <div className="advert-title">
              Register today & start exploring the endless possiblities.
            </div>
          </div>
          <div className="advert-button col-xl-4 col-md-4 col-sm-12">
            <button className="advert-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
