
import * as firebase from '../node_modules/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNapODTHs4Wh85GD3PnYmIoVU_d_-0VOA",
    authDomain: "mobile-db-28019.firebaseapp.com",
    databaseURL: "https://mobile-db-28019.firebaseio.com",
    projectId: "mobile-db-28019",
    storageBucket: "mobile-db-28019.appspot.com",
    messagingSenderId: "441972156312",
    appId: "1:441972156312:web:70880f12828709a7dceded"
  };



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;