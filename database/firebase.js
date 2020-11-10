
import * as firebase from '../node_modules/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZvkIs9hT7LlBM_fX8uZRpPMWDbwjszFI",
    authDomain: "signinapp-9b557.firebaseapp.com",
    databaseURL: "https://signinapp-9b557.firebaseio.com",
    projectId: "signinapp-9b557",
    storageBucket: "signinapp-9b557.appspot.com",
    messagingSenderId: "171679732507",
    appId: "1:171679732507:web:e276fcaf7e679eb21c39be",


};

//   var firebaseConfig = {
//     apiKey: "AIzaSyAZvkIs9hT7LlBM_fX8uZRpPMWDbwjszFI",
//     authDomain: "signinapp-9b557.firebaseapp.com",
//     databaseURL: "https://signinapp-9b557.firebaseio.com",
//     projectId: "signinapp-9b557",
//     storageBucket: "signinapp-9b557.appspot.com",
//     messagingSenderId: "171679732507",
//     appId: "1:171679732507:web:e276fcaf7e679eb21c39be",
//     measure
// firebase.initializeApp(;

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;