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
          <div className="placesearch">
            <input type="text" />
          </div>
          <div className="search-product">
            <input type="text" placeholder='Find Car and Mobiles' />
            <button><i class="fa fa-search" aria-hidden="true"></i></button>
          </div>
          <div className="language">
            <span>English</span>
          </div>
          <div className="login">
            <span>Login</span>
          </div>
          <div className="sell">
            <button className='sellproduct'>SELL</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
