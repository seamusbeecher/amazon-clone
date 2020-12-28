import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDeUYxcCss4U4fXNYzKcGoBChemmPO1l1c",
    authDomain: "clone-409d0.firebaseapp.com",
    projectId: "clone-409d0",
    storageBucket: "clone-409d0.appspot.com",
    messagingSenderId: "944133283177",
    appId: "1:944133283177:web:0200372f2d8742e03d71f8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };