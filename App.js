import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginHome from './pages/LoginHome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomeTabs from './pages/HomeTabls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {

  React.useEffect( () => {
    const handleDataAdmin = async () => {
      const dataAdmin = {
        nombre: "admin",
        email: "admin@gmail.com",
        password: "admin",
        rol: 1
      }
      await AsyncStorage.setItem('dataAdmin', JSON.stringify(dataAdmin))
    }

    if (AsyncStorage.getItem('dataAdmin')) {
      handleDataAdmin();
    }
  }, [])

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