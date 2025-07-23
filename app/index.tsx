import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏗️ Loja de Materiais de Construção</Text>
      <Text style={styles.subtitle}>Bem-vindo!</Text>
      <View style={styles.links}>
        <Link href="/produtos" style={styles.link}>Ver Produtos</Link>
        <Link href="/carrinho" style={styles.link}>Carrinho</Link>
        <Link href="/produto-novo" style={styles.link}>Cadastrar Produto</Link>
        <Link href="/dashboard" style={styles.link}>Dashboard</Link>
        <Link href="/vendas" style={styles.link}>Vendas</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 18, marginBottom: 32 },
  links: { width: '100%' },
  link: { fontSize: 18, color: '#3466eb', marginBottom: 16 }
});