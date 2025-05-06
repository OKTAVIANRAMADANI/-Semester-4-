import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}