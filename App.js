import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './screens/Login'
import Chat from './screens/Chat'

import { Entypo ,Ionicons} from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
 news=(active)=>{
  if(active == "#0070c0")
  {
    return(
      <Entypo name="news" size={24} color="#0070c0" />
    );

  }
  else
return(
 
<Entypo name="news" size={24} color="#333333" />

 );
}


export default class App extends Component {
  render(){
  return (
   
       <AppContainer/>
    
  );
  }
}





const AppNavigator=createStackNavigator({
  List: {
    screen: Login
  }
  ,
  Chat:{
    screen:Chat
  }
},
{
headerMode:"none",


}
);

const AppContainer=createAppContainer(AppNavigator)