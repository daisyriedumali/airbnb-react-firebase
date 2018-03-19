import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCgNlJ6JMBnc4JkuCVvn504eM7kkDVIxe4",
    authDomain: "airbnb-react-firebase.firebaseapp.com",
    databaseURL: "https://airbnb-react-firebase.firebaseio.com",
    projectId: "airbnb-react-firebase",
    storageBucket: "airbnb-react-firebase.appspot.com",
    messagingSenderId: "254301003235"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db,
};