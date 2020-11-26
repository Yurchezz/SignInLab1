
import * as firebase from '../node_modules/firebase';

const firebaseConfig = {
    apiKey: "ApiKey",
    authDomain: "AuthDomain_DA",
    databaseURL: "Pentagon",
    projectId: "1488",
    storageBucket: "ChumBucket",
    messagingSenderId: "88005553535",
    appId: "yourmomsass",


};



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;