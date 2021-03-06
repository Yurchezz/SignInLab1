import {StyleSheet} from 'react-native';
const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  darkTheme: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#000',
    // headerStyle:{
    //   backgroundColor: 'red'
    // }
  },
  lightTheme: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    // headerStyle:{
    //   backgroundColor: 'red'
    // }
  },
  lightTextStyle: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    color: '#1F1B24',
  },
  darkTextStyle: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    color: '#fff',
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  switch: {
    backgroundColor: 'blue',
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    width: 200,
    height: 50,
    padding: 15,
  },
  lightButton: {
    backgroundColor: '#3740FE',
  },
  darkButton: {
    backgroundColor: '#6200EE',
  },
};
export default StyleSheet.create(styles);
