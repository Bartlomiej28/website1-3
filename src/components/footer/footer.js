import React from 'react'
import "./footer.css";
export default function Footer() {
  return (
    <div className="section footer container" >
          <div className="row">
            <div className="footer-content col-12">
              <p className="h1">Do you want to step in to the future before others</p>
              <button>Request Early Access</button>
            </div>
            <div className="footer-tab row">
              <div className="footer-tab-1 col-xl-3 col-md-3 col-sm-12">
                <div className="tab-1-title h1">GPT-3</div><p>All Rights Reserved By Bartłomiej Boczyło</p>
              </div>
              <div className="footer-tab-2 col-xl-3 col-md-3 col-sm-12">
                <div className="tab-2-title">Links</div>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>

              </div>
              <div className="footer-tab-3 col-xl-3 col-md-3 col-sm-12">
                <div className="tab-3-title">Company</div>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
              </div>
              <div className="footer-tab-4 col-xl-3 col-md-3 col-sm-12">
                <div className="tab-4-title">Get in touch</div>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
              </div>
            </div>
          </div>
        </div>
  )
}
