import React, { useState, useContext } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../Store/Fire_context';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function Signup() {
    const [username, Setusername] = useState('');
    const [email, Setemail] = useState('');
    const [password, Setpassword] = useState('');
    const [phone, Setphone] = useState('');

    const { firebase } = useContext(FirebaseContext)//Context

    const db = getFirestore()
    const userCollection = collection(db, 'users');

    const navigate = useNavigate()
    const auth = getAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            addDoc(userCollection, {
                id: result.user.uid,
                username: username,
                phone: phone
            }).then(() => {
                alert('Success fully Signup')
                navigate('/login')
            })
        }).catch((error) => {
            console.log(error)
        })
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
                    <label htmlFor="number">Phone</label>
                    <input type="number" id="number" name="number" value={phone} onChange={((e) => Setphone(e.target.value))} required />
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