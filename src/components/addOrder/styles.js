import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const styles = {
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  textInputContainer: {
    width: '90%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#0113C1',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    padding: 15,
  },
  button: {
    borderRadius: 10,
    margin: 15,
    display: 'flex',
    alignItems: 'center',

    height: 50,
    padding: 15,
  },
  lightButton: {
    backgroundColor: '#3740FE',
  },
  darkButton: {
    backgroundColor: '#6200EE',
  },
  darkTextStyle: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    color: '#fff',
  },
};
export default StyleSheet.create(styles);
