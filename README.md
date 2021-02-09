# amazon-clone

## General info
This is a fake amazon clone for me to practice my web development skills with.
	
## Technologies
Front-end Technologies:
* React / react-router-dom
* React Hooks
* Axios
* Moment - For time stamps
* Material-UI Core/Icons

API Cloud Function
* Firebase Functions
* Express
* Cors
* Stripe - For payment processing

Database
* Firebase: Firestore
* Authentication and Storage
	
## Setup
In order to run for yourself change the following:
You will also need to set up a new Firestore database and Stripe Test:
Front-end (React)
* App.js —> Change the stripe publishable key to your own [https://stripe.com/docs/keys]
* firebase,js —> Change to your own database keys [https://firebase.google.com/docs/web/setup]
* axois.js —> Change baseURL to new URL in firestore functions trigger tab
Back-end (Functions)
* index.js —> Change Stripe secret key to your own [https://stripe.com/docs/keys]
* Host this api function on your own firestore 

To run this project, install it locally using npm:

```
$ npm install
$ npm start
```
