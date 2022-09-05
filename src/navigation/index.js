import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screen/Login'
import GoHealthScreen from '../screen/GoHealth'
import GoCircleScreen from '../screen/GoCircle'
import Introduction from '../screen/Introduction'
import TabNav from './TabNav'



const Stack = createNativeStackNavigator();


function Navigation() {
    return (
        <Stack.Navigator initialRouteName="Introduction" screenOptions={({route})=>({
          headerShown: false
        })}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="GoHealth" component={GoHealthScreen} />
          <Stack.Screen name="GoCircle" component={GoCircleScreen} />
          <Stack.Screen name="TabNav" component={TabNav}/>
          <Stack.Screen name="Introduction" component={Introduction}/>
        </Stack.Navigator>
    );
  }

  export default Navigation