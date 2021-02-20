import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TelaA from '../Views/TelaA'
import TelaB from '../Views/TelaB'
import TelaC from '../Views/TelaC'

const routeTab = createBottomTabNavigator()

const Tab = () => {
  return (
    <routeTab.Navigator initialRouteName='TelaA' tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'green',
      labelStyle: {fontSize: 30},
      
    }}>
      <routeTab.Screen name="Home" component={TelaA}/>
      <routeTab.Screen name="Lojas" component={TelaB}/>
      <routeTab.Screen name="Cadastro" component={TelaC}/>
    </routeTab.Navigator>
  )
}

export default Tab