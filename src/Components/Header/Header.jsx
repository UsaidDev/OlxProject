import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <p class="navbar-brand">OLX</p>
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
          <div className="btn btn-primary btn-lg "><i class="fa fa-search" aria-hidden="true"></i></div>
          <div className="language">
            <h5>English</h5>
          </div>
          <div className="signout">
            <Link to={'/login'} className="login-link">
              Signout
            </Link>
          </div>
          <div class="sell">
            <Link to={'/sellproduct'}>
              <div className="btn btn-primary">Sell Products</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;