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
    textInputContainer: {
      padding: 6,
      backgroundColor: '#edfafc',
      height: 44,
      borderTopColor: '#7e7e7e',
      borderBottomColor: '#b5b5b5',
      flexDirection: 'row',
      margin:20
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
        justifyContent: 'space-between'
    },
    buttonStyle:{
        width:'40%',

    }
  };
  export default StyleSheet.create(styles);