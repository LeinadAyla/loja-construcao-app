import { Drawer } from 'expo-router/drawer';
import { CarrinhoProvider } from '../contexts/CarrinhoContext';

export default function RootLayout() {
  return (
    <CarrinhoProvider>
      <Drawer
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen name="index" options={{ title: 'Home' }} />
        <Drawer.Screen name="produtos" options={{ title: 'Produtos' }} />
        <Drawer.Screen name="produto-novo" options={{ title: 'Novo Produto' }} />
        <Drawer.Screen name="carrinho" options={{ title: 'Carrinho' }} />
        <Drawer.Screen name="dashboard" options={{ title: 'Dashboard' }} />
        <Drawer.Screen name="vendas" options={{ title: 'Vendas' }} />
      </Drawer>
    </CarrinhoProvider>
  );
}