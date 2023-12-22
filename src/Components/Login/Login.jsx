import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const [email, Setemail] = useState('')
  const [password, Setpassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
  }
  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={((e) => Setemail(e.target.value))} required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} required onChange={((e) => Setpassword(e.target.value))} />
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
