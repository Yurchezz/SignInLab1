import React, {Component} from 'react';
import styles from './styles'
import {   
    Text,
    View,
    Button 
  } from 'react-native';
import firebase from '../../../database/firebase';
export default class Welcome extends React.Component{

    constructor(){
        super();
        this.state = {
            uid: ''
        }
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('SignIn');

        }).catch(error => this.setState({ errorMessage: error.Message }))
    }
    render(){
        this.state = { 
            displayName: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uid,
            phoneNumber: firebase.auth().currentUser.phoneNumber,
          }    
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Welcome {this.state.displayName}</Text>
                <Button
                    color="#3740FE"
                    title="Logout"
                    onPress={this.signOut}
                />
            </View>
        );
    }
}