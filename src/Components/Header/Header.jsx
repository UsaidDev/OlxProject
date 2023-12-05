import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand">OLX</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="placesearch">
            <input type="text" placeholder="Search Location" className="form-control" />
          </div>
          <div class="search-product">
            <input type="text" placeholder='Find Cars and Mobiles' className="form-control product-search-input " />
          </div>
          <div className="btn btn-primary btn-lg"><i class="fa fa-search" aria-hidden="true"></i></div>

          <div className="language">
            <h5>English</h5>
          </div>

          <div className="login">
            <h5>Login</h5>
          </div>
          
          <div class="sell">
            <div className="btn btn-primary">Sell Products</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
