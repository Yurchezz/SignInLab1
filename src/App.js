
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import styles from './styles'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SingInInput from './components/singin';
import Register from './components/register';
import Welcome from './components/welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const App = () => (

  // <View>
  // <StatusBar barStyle="dark-content" />
  // <SafeAreaView>
  //   <ScrollView
  //     contentInsetAdjustmentBehavior="automatic"
  //     style={styles.scrollView}>
  //     <Header />
  //     {global.HermesInternal == null ? null : (
  //       <View style={styles.engine}>
  //         <Text style={styles.footer}></Text>
  //       </View>
  //     )}

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SingInInput"  
      
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="SignIn" component={SingInInput} options={{title: 'Sign In'}}/>
        <Stack.Screen name="Register" component={Register}   />
        <Stack.Screen name="Welcome" component={Welcome}   
         options={
         { title: 'Welcome' },
         {headerLeft: null} 
       }/>
      </Stack.Navigator>
    </NavigationContainer>
    
        // {/* <SingInInput/> */}

 
  //    </ScrollView>
  // </SafeAreaView> 
  // </View>
  )

// export default class App extends React.Component {

//   render (){
  
//     return (
     
//     );
//   }
// }



 export default App;
