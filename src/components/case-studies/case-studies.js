import React from 'react'
import "./case-studies.css";
import features from "./../../Feature Image.png";

export default function CaseStudies() {
  return (
    <div className="section case-studies container" id="caseStudies">
          <div className="row">
            <div className="case-studies-image col-xl-6 col-md-6 col-sm-12">
              <img className="img-fluid" src={features} alt="features"/>
            </div>
            <div className="case-studies-desc col-xl-6 col-md-6 col-sm-12">
              <div className="subtitle">
                Request Early Access to Get Started
              </div>
              <div className="case-studies-title">
                The possibilities are beyond your imagination
              </div>
              <div className="case-studies-desc">
               This advanced language model developed by OpenAI enables solving complex problems, 
               generating creative ideas, and delivering intuitive responses to diverse questions. 
               Leveraging natural language processing capabilities, ChatGPT can be utilized for task automation, 
               customer support, content creation, and exploration of new ideas, surpassing traditional boundaries 
               of communication and thinking.
              </div>
              <div className="case-studies-subtext">
                Request Early Access to Get Started
              </div>
            </div>
          </div>
        </div>
  )
}
