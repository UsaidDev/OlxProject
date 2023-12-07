import React, { useState, useEffect } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import {auth} from '../Firebase/Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";

function Signup() {
    let navigate = useNavigate();
    const initialvalue = { username: "", email: "", password: "" };
    const [formvalue, Setformvalue] = useState(initialvalue);
    const [formError, SetformError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target;
        Setformvalue({ ...formvalue, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        SetformError(validation(formvalue));
        setIsSubmit(true);
        if(formvalue){
            createUserWithEmailAndPassword(auth, formvalue.email, formvalue.password).then((res)=>{
                navigate('/')
            })
            .catch(()=>console.log('Error'))
        }
    }
    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            
        }
    }, [formError, isSubmit, formvalue]);

    const validation = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

        if (!values.username) {
            errors.username = "Username is required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length > 10) {
            errors.password = <p style={{ color: "red" }}>Password cannot exceed more than 10 characters</p>;
        }

        return errors;
    }

    return (
        <div className="container">
            {Object.keys(formError).length === 0 && isSubmit ? (
                <div className='ui message success' style={{ color: 'green' }}>Sign in Success Fully</div>
            ) : null}
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={formvalue.username} onChange={handlechange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formvalue.email} onChange={handlechange} required />
                    <p>{formError.email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formvalue.password} onChange={handlechange} required />
                    <p>{formError.password}</p>
                </div>
                <button type="submit" className='submit'>Sign Up</button>
                <Link to={'/login'} className='loginPage'>
                    Login
                </Link>
            </form>
        </div>
    );
}

export default Signup;
