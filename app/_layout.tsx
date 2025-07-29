// app/_layout.tsx
import { Drawer } from 'expo-router/drawer';
import { CarrinhoProvider } from '../contexts/CarrinhoContext';

export default function RootLayout() {
  return (
    <CarrinhoProvider>
      <Drawer
        screenOptions={{
          headerShown: true,
        }}
      />
    </CarrinhoProvider>
  );
}
