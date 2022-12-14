
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/screenLogin';

const Stack = createStackNavigator()

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
