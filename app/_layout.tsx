import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: 'Home' }} />
      <Drawer.Screen name="produtos" options={{ title: 'Produtos' }} />
      <Drawer.Screen name="carrinho" options={{ title: 'Carrinho' }} />
      <Drawer.Screen name="produto-novo" options={{ title: 'Novo Produto' }} />
    </Drawer>
  );
}