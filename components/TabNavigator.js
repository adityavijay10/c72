import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from '../Screens/ReadStoryScreen';
import WriteStoryScreen from '../Screens/WriteStoryScreen';


export   const AppTabNavigator = createBottomTabNavigator({
Read : {
      screen: ReadStoryScreen,
      navigationOptions :{
       
        tabBarLabel : "READ",
      }
    },
    Write: {
      screen: WriteStoryScreen,
      navigationOptions :{
      
        tabBarLabel : "WRITE",
      }
    }
  });