import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Alert,
  TextInput,
  Button,
  RefreshControl,
} from 'react-native';
import firebase from '../../../database/firebase';
import OrderCard from '../../common/orderCard';
import FloatingAction from 'react-native-action-button';

import styles from './styles';
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      drivers: [],
      dataIsReturned: false,
      refreshing: false,
      counter: 0,
      currentUser:{},
      content:null,
      token:""
    };
  }
  componentWillMount = () => {
    this.loadContent();
    this.state.content =  this.state.drivers.map((driver) => (
      <OrderCard driver={driver} darkMode={darkMode} />
    ));
  };
  loadContent = () => {
    const {route, navigation} = this.props;

    const user = JSON.parse(route.params.loginedUser);

    let token_body = {
      
    };
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: "Bearer " + user.token
      },
    
    }

    try {
      fetch(
        'http://10.0.2.2:3000/api/v1/driver_per_order',requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          this.setState({drivers: json});
          this.setState({dataIsReturned: true});
          console.log(json);
        });
    } catch (error) {
      console.log(error);
    }
    
  };

  updateNavigationColor = (value) => {
    const {navigation} = this.props;
    if (value) {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: '#404040',
        },
      });
    } else {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: '#3740FE',
        },
      });
    }
  };
  onRefresh = () => {
    this.setState({refreshing: true});
    this.loadContent();
    wait(1000).then(() => this.setState({refreshing: false}));
  };

  render() {
    const {route, navigation} = this.props;
    const darkMode = route.params.darkMode;
    
    this.state.content = this.state.drivers.map((driver) => (
      <OrderCard driver={driver} darkMode={darkMode} />
    ));
    this.updateNavigationColor(darkMode);
    // this.state.drivers = route.params.drivers;
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}>
        <View
          style={[
            styles.container,
            darkMode ? styles.darkBackground : styles.lightBackground,
          ]}>
          <ScrollView>{this.state.content}</ScrollView>
          <FloatingAction
            buttonColor="#44ccff"
            style={styles.floatingAction}
            onPress={() => {
              navigation.navigate('AddOrder', {darkMode: darkMode});
            }}
          />
        </View>
      </RefreshControl>
    );
  }
}
export default Orders;
