import React, {Component, useEffect} from 'react';
import styles from './styles'
import {   
    Text,
    View,
    Button 
  } from 'react-native';
import firebase from '../../../database/firebase';
import Switch from 'react-native-switch-pro';
export default class Welcome extends React.Component{

    constructor(){
        super();
        this.db = firebase.firestore();
        this.onSnapshotUnsubscribe;
        this.updateThemeValue = this.updateThemeValue.bind(this);

        this.state = {
            uid: "",
            darkTheme:false,
            displayName: firebase.auth().currentUser.displayName,
            // db: firebase.firestore().collection("users"),
            users: []
        }
        

    }

    componentDidMount(){
        this.state.displayName =  firebase.auth().currentUser.displayName;
        this.state.uid =  firebase.auth().currentUser.uid;

        this.onSnapshotUnsubscribe =
        this.db
            .collection("users-db")
            .doc(this.state.uid)
            .onSnapshot((snapshot) => {
                const data = snapshot.data()
                if (data != undefined) {
                    this.setState({
                        darkTheme: data.darkMode 
                    })
                }

            });

        this.db.collection("users-db")
            .doc(this.state.uid)
            .get()
            .then((snapshot) => {
                const data = snapshot.data()
                if (data === undefined) {
                    this.db
                        .collection("users-db")
                        .doc(this.state.uid).set({
                        darkTheme: false
                    });
                } else {
                    this.setState({
                        darkTheme: snapshot.data().darkMode
                    });
                    this.updateNavigationColor(snapshot.data().darkMode);
                }
            });
      
            
    }
    componentWillUnmount() {
        this.onSnapshotUnsubscribe();
    }


 
    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('SignIn');

        }).catch(error => this.setState({ errorMessage: error.Message }))
    }
    updateNavigationColor = (value) =>{
        const { navigation } = this.props;
        if(value){
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: '#404040'
                }
            });
        }else{
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: '#3740FE'
                }
            });
        }

    }
    getUsers(){
        this.db.collection('users-db').onSnapshot((querySnapshot) => {
            const items = [];
         
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
 
            
            this.setState({ users: items});
        });
        
    }   
    storeUser() {
          this.getUsers();
          console.log( this.db.collection('users-db'));
        
    }
    updateThemeValue = (value) =>{
        const { navigation } = this.props;
        const state = this.state;
        state['darkTheme'] = value;

        this.updateNavigationColor(value);
        console.log("dark mode is: "+ this.state.darkTheme);
       
        
        this.db.collection('users-db').doc(this.state.uid).set({
            darkMode:value
        });
      }

  
    render(){
        return(
            <View style={this.state.darkTheme ? styles.darkTheme : styles.lightTheme}>

                <Text style={ this.state.darkTheme ? styles.darkTextStyle: styles.lightTextStyle}>Welcome {this.state.displayName}</Text>

                <View  style={styles.switchContainer}>
                <Text style={this.state.darkTheme ? styles.darkTextStyle: styles.lightTextStyle}>Dark mode</Text>
                <Switch
                     value ={this.state.darkTheme}
                     onSyncPress={value => this.updateThemeValue(value)}
                     width={53}
                     height={23}
                    
                     backgroundActive={'#6200EE'}
                     backgroundInactive={'#ddd'}
                />
                </View>
                <Button
                    color={this.state.darkTheme ? '#6200EE' :  "#3740FE" }
                    title="Logout"
                    onPress={this.signOut}
                />
               
                <Button
                    color={this.state.darkTheme ? '#6200EE' :  "#3740FE" }
                    title="Save THeme"
                    onPress={() => this.storeUser()}
                />
                
            </View>
        );
    }
}