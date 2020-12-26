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
  engine: {
    position: 'absolute',
    right: 0,
  },
  invalidTextInputContainer: {
    width: '90%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#FF0000',
    borderBottomWidth: 2,
  },
  invalidTextInputBottomMessage: {
    width: '90%',
    color: '#FF0000',
    marginLeft: 20,
    //display:'none'
  },

  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  container:{
    height:'100%'
  },
  darkBackground:{
    backgroundColor: '#000',
  },
  lightBackground:{
    backgroundColor: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  buttonRow: {
    margin: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: '40%',
  },
  lightButton: {
    backgroundColor: '#3740FE',
  },
  darkButton: {
    backgroundColor: '#6200EE',
  },
  floatingAction:{
          
                                        
    position: 'absolute',                                          
 
  }
};
export default StyleSheet.create(styles);
