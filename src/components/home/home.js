import React from 'react'
import "./home.css";
import photo from "./../../Illustration.png";
import peopleImage from "./../../Group 81.png";

export default function Home() {
  return (
    <div className="section main-page" id="home">
          
          
          <div className="content-container container">
            <div className="row">
              <div className="container-info col-xl-6 col-md-5">
                <div className="content-center">
                  <div className="section-title display-4 col-xl-6 col-md-5 col-sm-12">
                    Let’s Build Something amazing with GPT-3 OpenAI
                  </div>
                  <div className="section-description h5 col-xl-6 col-md-5 col-sm-12">
                  Explore the limitless creativity of GPT-3 from OpenAI. Whether you're crafting AI applications, 
                  narratives, or interfaces, GPT-3 empowers you with unprecedented capabilities.
                  Join us in shaping the future of technology with GPT-3 OpenAI and unleash endless 
                  possibilities together.
                  </div>
                  <div className="email-form col-xl-6 col-md-5 col-sm-12">
                    <input
                      className="input-form"
                      type="text"
                      placeholder="Your Email Address"
                    />
                    <button className="btn form-btn h2">Get Started</button>
                  </div>
                  <div className="people col-xl-6 col-md-5 col-sm-12">
                    <img className="img-fluid people-image" src={peopleImage} alt="assigned people" />
                    <div className="people-count">
                      1,600 people requested access a visit in last 24 hours
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-image col-xl-6 col-md-7 col-sm-12">
                <img className="img-fluid" src={photo} alt="logo" />
              </div>
              
            </div>
          </div>
        </div>
  )
}

