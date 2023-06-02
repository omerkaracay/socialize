import * as React from 'react';
//import { View, Text } from 'react-native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginContextsProvider } from './src/contexts/LoginContexts';
import Router from './src/pages/Router';



//const Stack = createNativeStackNavigator();

function App() {
  return (
    <LoginContextsProvider>
      <Router />
    </LoginContextsProvider>
  );
}

export default App;