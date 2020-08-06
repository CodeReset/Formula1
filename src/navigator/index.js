import React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import MainPage from '../screens/MainPage';
import RaceResult from '../screens/RaceResult';
import DetailInfo from '../screens/DetailInfo';
import {styles} from './style';

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={MainPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="driverinfo"
        component={DetailInfo}
        options={({route}) => ({
          title:
            route.params.driverInfo.givenName +
            ' ' +
            route.params.driverInfo.familyName,
          headerBackTitle: ' ',
          headerBackImage: () => {
            return (
              <Image
                style={styles.imageBackIcon}
                source={require('../assets/icons/prev.png')}
              />
            );
          },
          headerTitleStyle: {
            fontFamily: 'Formula1-Regular',
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'red',
            borderBottomWidth: 0,
            elevation: 0,
            shadowColor: 'transparent',
          },
        })}
      />
      <Stack.Screen
        name="raceresults"
        component={RaceResult}
        options={({route}) => ({
          title: 'Race Result',
          headerBackTitle: ' ',
          headerBackImage: () => {
            return (
              <Image
                style={styles.imageBackIcon}
                source={require('../assets/icons/prev.png')}
              />
            );
          },
          headerTitleStyle: {
            fontFamily: 'Formula1-Regular',
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'red',
            borderBottomWidth: 0,
            elevation: 0,
            shadowColor: 'transparent',
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
