import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-body-tertiary bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-3 mx-auto">
              <h6 class="text-uppercase fw-bold footer-title">POPULAR LOCATIONS</h6>
              <p className='footer-links'>Kolkata</p>
              <p className='footer-links'>Mumbai</p>
              <p className='footer-links'>Chennai</p>
              <p className='footer-links'>Pune</p>
            </div>
            <div className="col-12 col-md-3 col-lg-3 mx-auto">
              <h6 class="text-uppercase fw-bold footer-title">TRENDING LOCATIONS</h6>
              <p className='footer-links'>Hyderabad</p>
              <p className='footer-links'>Bhubaneshwar</p>
              <p className='footer-links'>Chandigarh</p>
              <p className='footer-links'>Nashik</p>
            </div>
            <div className="col-12 col-md-3 col-lg-3 mx-auto">
              <h6 class="text-uppercase fw-bold footer-title">ABOUT US</h6>
              <p className='footer-links'>About OLX Group</p>
              <p className='footer-links'>Careers</p>
              <p className='footer-links'>Contact Us</p>
              <p className='footer-links'>OLXPeople</p>
              <p className='footer-links'>Waah Jobs</p>
            </div>
            <div className="col-12 col-md-3 col-lg-3 mx-auto">
              <h6 class="text-uppercase fw-bold footer-title">OLX</h6>
              <p className='footer-links'>Help</p>
              <p className='footer-links'>Sitemap</p>
              <p className='footer-links'>Legal & Privacy information</p>
              <p className='footer-links'>Blog</p>
              <p className='footer-links'>OLX Autos Sell Car</p>
            </div>
          </div>
        </div>

        <div className="container-fluid text-center p-4 footerdiv text-white">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 text-md-left">
              <div className="footer-div">
                Help - Sitemap
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 text-md-right">
              <div className="footer-div">
                All rights reserved © 2006-2023 OLX
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
