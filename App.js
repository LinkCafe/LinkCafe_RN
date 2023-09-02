import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginHome from './pages/LoginHome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen name="LoginHome" component={LoginHome} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}