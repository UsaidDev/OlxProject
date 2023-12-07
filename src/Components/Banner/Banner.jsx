import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div>
      <div class="container">
        <div class="row mb-3">
          <div class="col-12 col-md-12 col-lg-12">
            <div class="banner-image"></div>
            <h4 class='main-title'>Fresh Recommendations</h4>
            <div class="row card-container">
              <div class="col-12 col-md-3 col-lg-3">
                <div class="card">
                  <img class="card-img-top" src="" alt="Card cap" />
                  <div class="card-body">
                    <h5 class="card-title">Card Title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span class="btn btn-primary">Go somewhere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner;