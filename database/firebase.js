
import * as firebase from '../node_modules/firebase';

const firebaseConfig = {
    apiKey: "Дай помацати сало",
    authDomain: "Дай помацати сало",
    databaseURL: "Дай помацати сало",
    projectId: "Дай помацати сало",
    storageBucket: "Дай помацати сало",
    messagingSenderId: "Дай помацати сало",
    appId:"Дай помацати сало"
  };



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;