import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Orders from './components/Orders';
import Login from './components/Login';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Stripe publishable key
const promise = loadStripe('pk_test_51I4VOLAUqL3nWbrfcWDSznQNc0qIiCoChHobRZ5Q50LdUKJJWrYCkxPw3cb0VU175RizqYMQRnGgp3dyrYzEbbiM00oQexu0V6');

function App() {

  // Access to data layer
  const [{ }, dispatch] = useStateValue();

  // Will only run one time once the app is loaded -- []
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>> ', authUser);
      if (authUser) {
        // User just or was login
        dispatch({
          type: 'SET-USER',
          user: authUser
        })
      } else {
        // User loged out
        dispatch({
          type: 'SET-USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;