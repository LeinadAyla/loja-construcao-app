import { Link } from 'expo-router';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🏗️ Loja de Materiais de Construção</Text>
      <Text style={styles.subtitle}>Bem-vindo!</Text>
      <View style={styles.links}>
        <Link href="/produtos" asChild>
          <Text style={styles.link}>Ver Produtos</Text>
        </Link>
        <Link href="/carrinho" asChild>
          <Text style={styles.link}>Carrinho</Text>
        </Link>
        <Link href="/produto-novo" asChild>
          <Text style={styles.link}>Cadastrar Produto</Text>
        </Link>
        <Link href="/dashboard" asChild>
          <Text style={styles.link}>Dashboard</Text>
        </Link>
        <Link href="/vendas" asChild>
          <Text style={styles.link}>Vendas</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
  },
  links: {
    width: '100%',
  },
  link: {
    fontSize: 18,
    color: '#3466eb',
    marginBottom: 16,
  },
});
