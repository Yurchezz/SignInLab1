import 'react-native-gesture-handler';
import React from 'react';
import SingInInput from './components/singin';
import Register from './components/register';
import Welcome from './components/welcome';
import Orders from './components/orders';
import AddOrder from './components/addOrder';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SignIn"
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
      <Stack.Screen
        name="SignIn"
        component={SingInInput}
        options={{title: 'Sign In'}}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={({title: 'Welcome'}, {headerLeft: null})}
      />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen
        name="AddOrder"
        component={AddOrder}
        options={{title: 'Specify order fields'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
