import React, {Component} from 'react';
import styles from './styles';
import TextInputMask from 'react-native-text-input-mask';
import firebase from '../../../database/firebase';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    Alert
  } from 'react-native';

export default class Register extends React.Component {

  
    constructor(){
      super();
      this.state = {
        displayName:'',
        email:'',
        phoneNumber:'',
        password:'',
        formattedNumber:'',
        extractedNumber:'',
        verifiedEmail: true,
        verifiedPhone: true,
        verifiedPassword: true
      }
    }

    updateInputValue = (value, prop) =>{
      const state = this.state;
      state[prop] = value;
      this.setState(state);
    }
    
    emailStyle = (value) =>{
      if(!value){
        return styles.invalidTextInputContainer;
      }else{
        return styles.textInputContainer;
      }
    }
    
    updateInputValuePassword = () =>{
      if(this.state.password.length >= 8){
        this.setState({  verifiedPassword:true })
        return false;
      }else{
        this.setState({  verifiedPassword:false })
      }
    }
    updatePhone = () =>{
      var reg = /^\+?([0-9]{1,3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/;
      if (reg.test(this.state.extractedNumber) === false) {
        console.log("phoneNumber is Not Correct");
         this.setState({ phoneNumber: this.state.formattedNumber, verifiedPhone:false })
         return false;
       }
        else {
        this.setState({ phoneNumber: this.state.formattedNumber, verifiedPhone:true })
    
        console.log("phoneNumber is Correct");
        }
    }

    updateInputValuePhone = (formatted,extracted) => {
      this.setState({ formattedNumber: formatted, extractedNumber:extracted })
    }

    updateInputValueEmail = () => {
      console.log(this.state.email);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === false) {
        console.log("Email is Not Correct");
         this.setState({  verifiedEmail:false })
         return false;
       }
        else {
        this.setState({  verifiedEmail:true })
    
        console.log("Email is Correct");
        }
    }

    registerUser = () =>{ 
      if(this.state.email === '' || this.state.password === '' || this.state.displayName === '' || this.state.phoneNumber === '' ) {
        Alert.alert('Enter details to signup!')
      }else if(this.state.verifiedEmail == false || this.state.verifiedPassword == false || this.state.verifiedPassword == false  ){
        Alert.alert('Enter valid credentials to signup!')
      }else{
        console.log(this.state.email);
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
            
          });
      
          setTimeout( () => {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            this.props.navigation.navigate('Welcome')},1000);
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });


        
      }
    }

    render(){
        return(
          <ScrollView>
          <View style={styles.container}>           
            
          
                <TextInput 
                placeholder="email"
                style={this.state.verifiedEmail == true ? styles.textInputContainer : styles.invalidTextInputContainer }
                value={this.state.email}
                onBlur={() => this.updateInputValueEmail()}
                onChangeText={(val) => this.updateInputValue(val, 'email')}
             
                />
                  <Text style={this.state.verifiedEmail == false ? styles.invalidTextInputBottomMessage : {display:'none'}}>
                     This field is invalid
                </Text>
                <TextInput 
                placeholder="name"
                style={styles.textInputContainer}
                value={this.state.displayName}
                onChangeText={(val) => this.updateInputValue(val, 'displayName')}
          

                />
        
                <TextInputMask
                //value={this.state.phoneNumber}
                 style={this.state.verifiedPhone == true ? styles.textInputContainer : styles.invalidTextInputContainer }
                  refInput={ref => { this.input = ref }}
                  onBlur={() => this.updatePhone()}
                  onChangeText={(formatted, extracted) => this.updateInputValuePhone(formatted,extracted)}
                  mask={"+[999] ([00]) [000] [00] [00]"}

                 placeholder={"+1 (55) 225 47 47"}
                // style={this.state.verifiedPhone == true ? styles.textInputContainer : styles.invalidTextInputContainer }
                // value={this.state.phoneNumber}
                // onChangeText={(val) => this.updateInputValuePhone(val, 'phoneNumber')}
                // mask={"+1 ([000]) [000] [00] [00]"}

                />
                  <Text style={this.state.verifiedPhone == false ? styles.invalidTextInputBottomMessage : {display:'none'}}>
                  This field is invalid 
                </Text>
                <TextInput 
                placeholder="password"
                style={this.state.verifiedPassword == true ? styles.textInputContainer : styles.invalidTextInputContainer}
                value={this.state.password}
                onBlur={() => this.updateInputValuePassword()}
                onChangeText={(val) => this.updateInputValue(val, 'password')}
     

                />
                  <Text style={this.state.verifiedPassword == false ? styles.invalidTextInputBottomMessage : {display:'none'}} >
                  This field is invalid
                </Text>
                <View style={styles.buttonRow}>
                <View style={styles.buttonStyle}>
                    <Button
                        title="Confirm Registration"
                        onPress={this.registerUser} />
                </View>
                </View>
     
            
            </View>
            </ScrollView>

        );
    }

}

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAZvkIs9hT7LlBM_fX8uZRpPMWDbwjszFI",
//     authDomain: "signinapp-9b557.firebaseapp.com",
//     databaseURL: "https://signinapp-9b557.firebaseio.com",
//     projectId: "signinapp-9b557",
//     storageBucket: "signinapp-9b557.appspot.com",
//     messagingSenderId: "171679732507",
//     appId: "1:171679732507:web:e276fcaf7e679eb21c39be",
//     measurementId: "G-G9P09DFT02"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>