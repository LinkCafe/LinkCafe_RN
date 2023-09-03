import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginHome from './pages/LoginHome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import HomeTabs from './pages/HomeTabls';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="LoginHome" component={LoginHome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: ''
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          title: ''
        }} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{
          title: '',
          headerShown: false
        }} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}