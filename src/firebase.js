import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBjOelfJMgMDbUkWMsiPohyQYFB8h-YTIE",
    authDomain: "m-city-239dc.firebaseapp.com",
    databaseURL: "https://m-city-239dc.firebaseio.com",
    projectId: "m-city-239dc",
    storageBucket: "m-city-239dc.appspot.com",
    messagingSenderId: "425850199249"
};


firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}