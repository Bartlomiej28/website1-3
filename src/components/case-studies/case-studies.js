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
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </div>
              <div className="case-studies-subtext">
                Request Early Access to Get Started
              </div>
            </div>
          </div>
        </div>
  )
}
