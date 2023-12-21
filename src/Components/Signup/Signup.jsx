import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
function Signup() {
    const [username, Setusername] = useState('');
    const [email, Setemail] = useState('')
    const [password, Setpassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={username} onChange={((e) => Setusername(e.target.value))} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={((e) => Setemail(e.target.value))} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={((e) => Setpassword(e.target.value))} required />
                </div>
                <button type="submit" className='submit'>Sign Up</button>
                <Link to={'/login'} className='loginPage'>
                    Login
                </Link>
            </form>
        </div>
    )
}
export default Signup;