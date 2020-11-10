import React from 'react';
import PropTypes from 'prop-types';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '../../../database/firebase';
// import CustomTextInputStyle from './CustomTextInputStyle';
import { TextField } from 'react-native-material-textfield';
import styles from './styles';
export default class SingInInput extends React.Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password:'',
      verifiedEmail:true,
      verifiedPassword:true,
      errorMessage:""
    }
  }


  updateInputValuePassword = (value) =>{
    if(value.length >= 8){
      this.setState({ password: value, verifiedPassword:true })
      return false;
    }else{
      this.setState({  password: value, verifiedPassword:false })
    }
  }
    updateInputValueEmail = (value) => {
    console.log(value);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(value) === false) {
      console.log("Email is Not Correct");
       this.setState({ email: value, verifiedEmail:false })
   
       
       return false;
     }
      else {
      this.setState({ email: value, verifiedEmail:true })
  
      console.log("Email is Correct");
      }
  }

  updateInputValue = (value,prop) =>{
    const state = this.state;
    state[prop] = value;
    this.setState(state);
  }

  showRegister = () => {
    const { navigation } = this.props;
     navigation.navigate('Register');
  };
  signIn = () => {
      if(this.state.email === '' || this.state.password === ''){
        Alert.alert('Enter details to signin!');
      }else if(!this.state.verifiedPassword ){
        Alert.alert('Enter valid password');
      }else if(!this.state.verifiedEmail ){
        Alert.alert('Enter valid email');
      }else{
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res)
          console.log('User logged-in successfully')
          this.setState({
            email: '',
            password: ''
          })
          this.props.navigation.navigate('Welcome');

        })
        .catch(error => {
          this.setState({ errorMessage: error.message });
          Alert.alert("Invalid credentials");
        }
        );
       
      }
  }
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
        <View  style={styles.sectionTitle}>
          <Text style={styles.header}>
            Welcome to my Perfect App
          </Text>
        </View>
      <TextInput 
      placeholder="email"
      style={this.state.verifiedEmail == true ? styles.textInputContainer : styles.invalidTextInputContainer}
      value={this.state.email}
      onChangeText={(val) => this.updateInputValueEmail(val)}
      //onChangeText={text => onChangeText(text)}

      />
         <Text style={this.state.verifiedEmail == false ? styles.invalidTextInputBottomMessage : {display:'none'}}>
                     Email is invalid
                </Text>
        <TextInput 
      secureTextEntry={true} 
      placeholder="password"
      style={this.state.verifiedPassword == true ? styles.textInputContainer : styles.invalidTextInputContainer}
      value={this.state.password}
      onChangeText={(val) => this.updateInputValuePassword(val)}
      //onChangeText={text => onChangeText(text)}

      />
       <Text
       
       style={this.state.verifiedPassword == false ? styles.invalidTextInputBottomMessage : {display:'none'}}>
            Less than 8 characters
      </Text>
      <View style={styles.buttonRow}>
        <View style={styles.buttonStyle}>
        <Button 
           color='#a6c8ff'
           title="Register"
           onPress={this.showRegister}
          /> 
        </View>
        <View style={styles.buttonStyle}>
        <Button 
           title="Sing In"
           onPress={this.signIn}/>
           </View>
      </View>
      </View>
      </ScrollView>
      );  
    }
}
