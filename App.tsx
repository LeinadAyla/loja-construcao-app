import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Clientes from './pages/Clientes';
import ProdutoNovo from './pages/ProdutoNovo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProdutoNovo">
        <Stack.Screen name="ProdutoNovo" component={ProdutoNovo} />
        <Stack.Screen name="Clientes" component={Clientes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}