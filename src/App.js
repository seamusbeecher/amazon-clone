import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider.js';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51I4VOLAUqL3nWbrfcWDSznQNc0qIiCoChHobRZ5Q50LdUKJJWrYCkxPw3cb0VU175RizqYMQRnGgp3dyrYzEbbiM00oQexu0V6');

function App() {

  const [{ }, dispatch] = useStateValue();

  // will only run one time once the app is loaded -- []
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>> ', authUser);

      if (authUser) {
        //user just or was login
        dispatch({
          type: 'SET-USER',
          user: authUser
        })
      } else {
        //user loged out
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
