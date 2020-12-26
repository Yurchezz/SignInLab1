import {StyleSheet} from 'react-native';
const styles = {
  button: {
    padding: 15,
    //   width:'70%',

    //backgroundColor:'blue',
    margin: 30,
    borderRadius: 20,
  },
  lightButton: {
    backgroundColor: '#3740FE',
  },
  darkButton: {
    backgroundColor: '#6200EE',
  },
  light: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  orderNumber: {
    color: '#fff',
    fontSize: 30,
    marginRight: 15,
  },
  buttonHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonFooter: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
  },
  total: {
    marginBottom: 10,
    color: '#a3a3a3',
    fontSize: 15,
  },
  data: {
    color: '#a3a3a3',
    fontSize: 15,
  },
  dataContainer: {
    marginTop: 15,
  },
  noOrders: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    color: '#fff',
  },
};
export default StyleSheet.create(styles);
