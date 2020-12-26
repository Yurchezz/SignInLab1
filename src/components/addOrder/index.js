import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Alert,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
class AddOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      IdOrder: 0,
      DriveRate: 0,
      IdStartLocation: 0,
      IdFinalLocation: 0,
      IdPassenger: 0,
      IdVehicle: 0,
      PassengerNumber: 0,
      Price: 0,
    };
  }
  updateInputValue = (value, prop) => {
    const state = this.state;
    state[prop] = value;
    this.setState(state);
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
  addOrder = () => {
    const {navigation} = this.props;

    let new_record = {
      id_order: this.state.IdOrder,
      drive_rate: this.state.DriveRate,
      id_start_location: this.state.IdStartLocation,
      id_final_location: this.state.IdFinalLocation,
      id_passenger: this.state.IdPassenger,
      id_vehicle: this.state.IdVehicle,
      passenger_number: this.state.PassengerNumber,
      price: this.state.Price,
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(new_record),
    };
    console.log(new_record);

    fetch(
      'http://10.0.2.2:3000/api/v1/orders',
      requestOptions,
    )
      .then((response) => JSON.stringify(response.json()))
      .then((responseData) => {
        console.log('response: ' + responseData);
        navigation.navigate('Welcome');
      })
      .catch((err) => {
        console.log(err);
      });

    
  };
  render() {
    const {route} = this.props;
    const darkMode = route.params.darkMode;
    console.log(darkMode);
    this.updateNavigationColor(darkMode);
    return (
      <ScrollView>
        <TextInput
          placeholder="Order Id"
          style={styles.textInputContainer}
          value={this.state.IdOrder}
          onChangeText={(val) => this.updateInputValue(val, 'IdOrder')}
        />
        <TextInput
          placeholder="Drive Rate"
          style={styles.textInputContainer}
          value={this.state.DriveRate}
          onChangeText={(val) => this.updateInputValue(val, 'DriveRate')}
        />
        <TextInput
          placeholder="Start Location Id"
          style={styles.textInputContainer}
          value={this.state.IdStartLocation}
          onChangeText={(val) => this.updateInputValue(val, 'IdStartLocation')}
        />
        <TextInput
          placeholder="Final Location Id"
          style={styles.textInputContainer}
          value={this.state.IdFinalLocation}
          onChangeText={(val) => this.updateInputValue(val, 'IdFinalLocation')}
        />
        <TextInput
          placeholder="Passenger Id"
          style={styles.textInputContainer}
          value={this.state.IdPassenger}
          onChangeText={(val) => this.updateInputValue(val, 'IdPassenger')}
        />
        <TextInput
          placeholder="Passenger Number"
          style={styles.textInputContainer}
          value={this.state.PassengerNumber}
          onChangeText={(val) => this.updateInputValue(val, 'PassengerNumber')}
        />
        <TextInput
          placeholder="Vehicle Id"
          style={styles.textInputContainer}
          value={this.state.IdVehicle}
          onChangeText={(val) => this.updateInputValue(val, 'IdVehicle')}
        />
        <TextInput
          placeholder="Price"
          style={styles.textInputContainer}
          value={this.state.Price}
          onChangeText={(val) => this.updateInputValue(val, 'Price')}
        />

        <TouchableOpacity
          style={
            darkMode
              ? [styles.darkButton, styles.button]
              : [styles.lightButton, styles.button]
          }
          onPress={this.addOrder}>
          <Text style={styles.darkTextStyle}>Add Order</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default AddOrder;
