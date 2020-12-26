import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

class OrderCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      totalEarned: 0,
      orderCount: 0,
    };
  }

  openModal = () => {
    if (this.state.isOpen == true) {
      this.setState({isOpen: false});
    } else {
      this.setState({isOpen: true});
    }
  };
  componentWillMount = () => {
    const {driver} = this.props;
    if (driver[0].name != null) {
      driver.map((order) => {
        this.state.totalEarned += order.price;
        this.state.orderCount += 1;
      });
    }
  };
  takeFields = () => {
    const {driver} = this.props;
    if (driver[0].name != null) {
      driver.map((order) => {
        this.state.totalEarned += order.price;
        this.state.orderCount += 1;
      });
    }
  };
  render() {
    const {driver, darkMode} = this.props;
    // this.setState({totalEarned:0, orderCount:0});
    // this.takeFields();
    return (
      <View>
        {this.state.isOpen ? (
          <TouchableOpacity
            style={
              darkMode
                ? [styles.button, styles.darkButton]
                : [styles.button, styles.lightButton]
            }
            onPress={this.openModal}>
            <View style={styles.buttonHeader}>
              <Text style={styles.light}>{driver[0].driver_name}</Text>
              <Text style={styles.orderNumber}>{this.state.orderCount}</Text>
            </View>
            <View style={styles.buttonFooter}>
              <Text style={styles.total}>
                Total Earned: {this.state.totalEarned}
              </Text>
            </View>

            {driver[0].name != null ? (
              driver.map((order) => (
                <View style={styles.dataContainer}>
                  <View style={styles.buttonFooter}>
                    <Text style={styles.data}>Order ID: {order.id_order}</Text>
                  </View>
                  <View style={styles.buttonFooter}>
                    <Text style={styles.data}>
                      Drive Rate: {order.drive_rate}
                    </Text>
                  </View>
                  <View style={styles.buttonFooter}>
                    <Text style={styles.data}>
                      Start Location ID: {order.id_start_location}
                    </Text>
                  </View>
                  <View style={styles.buttonFooter}>
                    <Text style={styles.data}>
                      Final Location ID: {order.id_final_location}
                    </Text>
                  </View>
                  <View style={styles.buttonFooter}>
                    <Text style={styles.data}>
                      Passenger Phone number: {order.phone_number}
                    </Text>
                  </View>
                  <View style={styles.buttonFooter}>
                    <Text style={styles.data}>
                      Vehicle ID: {order.id_vehicle}
                    </Text>
                  </View>
                  <View style={styles.buttonFooter}>
                    <Text style={styles.data}>
                      Passenger number: {order.passenger_number}
                    </Text>
                  </View>
                  <View style={styles.buttonFooter}>
                    <Text style={styles.data}>Price: {order.price}</Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.noOrders}>
                <Text style={styles.data}>No orders Yet</Text>
              </View>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={
              darkMode
                ? [styles.button, styles.darkButton]
                : [styles.button, styles.lightButton]
            }
            onPress={this.openModal}>
            <View style={styles.buttonHeader}>
              <Text style={styles.light}>{driver[0].driver_name}</Text>
              <Text style={styles.orderNumber}>{this.state.orderCount}</Text>
            </View>
            <View style={styles.buttonFooter}>
              <Text style={styles.total}>
                Total Earned: {this.state.totalEarned}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
export default OrderCard;
