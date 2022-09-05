import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import GoHealthScreen from '../screen/GoHealth'
import GoCircleScreen from '../screen/GoCircle'

const Tab = createBottomTabNavigator()
const TabNav = () => {
    return (
        <Tab.Navigator
         screenOptions= {({route}) =>({
            tabBarIcon: ({color,size})=>{
              if(route.name === 'GoHealth') {
                return <Icon name="circle-o" size={size} color={color} />
              }else if(route.name === 'GoCircle') {
                return <Icon name="medkit" size={size} color={color} />
              }
            },
            tabBarActiveTintColor: "#f40",
            tabBarInactiveTintColor: "gray",
            headerShown: false
          })}
        >
            <Tab.Screen name="GoHealth" component={GoHealthScreen} options={{title: '健康'}}/>
            <Tab.Screen name="GoCircle" component={GoCircleScreen} options={{title: 'GoCircle'}}/>
        </Tab.Navigator>
    )
}

export default TabNav

const styles = StyleSheet.create({})
