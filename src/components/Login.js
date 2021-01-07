import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase.js'

function Login() {

    // useHistory Hook
    const history = useHistory();
    // useState Hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Login user -- Push to the home page with useHistory Hook -- Firebase
    const signIn = e => {
        e.preventDefault(); // Stop refreshing page
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    // Create new user -- Push to the home page with useHistory Hook -- Firebase
    const register = e => {
        e.preventDefault(); // Stop refreshing page
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>

            {/* Amazon Logo */}
            <Link to='/'>
                <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
            </Link>

            <div className='login-container' >
                <h1>Sign-In</h1>
                
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='login-signin-button' type='submit' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By sign-in you agree to Amazon Fake Clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login-register-button' onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
