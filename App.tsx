import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

import CleaningScreen from './src/screens/CleaningScreen';
import RepairingScreen from './src/screens/RepairingScreen';
import PaintingScreen from './src/screens/PaintingScreen';
import LaundryScreen from './src/screens/LaundryScreen';
import ApplianceScreen from './src/screens/ApplianceScreen';
import PlumbingScreen from './src/screens/PlumbingScreen';
import ShiftingScreen from './src/screens/ShiftingScreen';
import MoreScreen from './src/screens/MoreScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BookingsScreen from './src/screens/BookingsScreen';
import ChatScreen from './src/screens/ChatScreen';
import MapScreen from './src/screens/MapScreen';


export type RootStackParamList = {
  Home: undefined;
  ServiceDetails: { serviceType: string };
  CleaningScreen: undefined;
  RepairingScreen: undefined;
  PaintingScreen: undefined;
  LaundryScreen: undefined;
  ApplianceScreen: undefined;
  PlumbingScreen: undefined;
  ShiftingScreen: undefined;
  MoreScreen: undefined;
  SettingsScreen: undefined;
  ProfileScreen: undefined;
  BookingsScreen: undefined;
  ChatScreen: undefined;
  MapScreen: undefined;
  ServiceProvidersScreen: { serviceType: { key: string; label: string; image: string } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CleaningScreen" component={CleaningScreen} />
        <Stack.Screen name="RepairingScreen" component={RepairingScreen} />
        <Stack.Screen name="PaintingScreen" component={PaintingScreen} />
        <Stack.Screen name="LaundryScreen" component={LaundryScreen} />
        <Stack.Screen name="ApplianceScreen" component={ApplianceScreen} />
        <Stack.Screen name="PlumbingScreen" component={PlumbingScreen} />
        <Stack.Screen name="ShiftingScreen" component={ShiftingScreen} />
        <Stack.Screen name="MoreScreen" component={MoreScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="BookingsScreen" component={BookingsScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
