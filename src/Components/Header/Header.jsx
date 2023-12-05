import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link path='' className='shopname'>
                    Olx
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <div className="search1">
                                <input type="text" name='Country' placeholder='' className='country-search' />
                            </div>
                        </li>
                        <li class="nav-item">
                            <div className="search2">
                                <button className='searchbtn'>
                                    <input type="text" name='Country'
                                        placeholder='Find Cars, Mobile Phones and More'
                                        className='find-search' />
                                    Click here</button>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div className="language">
                                <h5>languages</h5>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div className="login">
                                <h5>Login</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
