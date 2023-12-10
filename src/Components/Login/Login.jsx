import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit" className='login-btn'>Login</button>

          <Link to={'/signup'} className='SignupPage'>
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
