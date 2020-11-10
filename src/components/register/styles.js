import {
  StyleSheet,
 
} from 'react-native';
import {
  Colors

} from 'react-native/Libraries/NewAppScreen';
const styles= {
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    backgroundColor: '#fff'
  },
  textInputContainer: {
    width: '90%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#0113C1",
    borderBottomWidth: 2
  },
  invalidTextInputContainer: {
    width: '90%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#FF0000",
    borderBottomWidth: 2
  },
  invalidTextInputBottomMessage:{
    width: '90%',
    color: "#FF0000",
    marginLeft: 20,
    //display:'none'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    width:'100%',
   
    flexDirection:'row',
    justifyContent:'center'
  },
  header:{
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
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
  buttonRow:{
      margin:20,
       
      flexDirection:'row',
      justifyContent: 'center'
  },
  buttonStyle:{
      width:'80%',

  }
};
export default StyleSheet.create(styles);