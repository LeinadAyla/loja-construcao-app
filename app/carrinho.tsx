import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useCarrinho } from '../contexts/CarrinhoContext';

export default function CarrinhoScreen() {
  const { itens, remover, limpar } = useCarrinho();

  const total = itens.reduce((soma, item) => soma + (item.preco * (item.quantidade ?? 1)), 0);

  function finalizarCompra() {
    Alert.alert('Compra finalizada!', `Total: R$ ${total.toFixed(2)}\n(Exemplo: aqui você pode integrar com a tabela vendas)`);
    limpar();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      <FlatList
        data={itens}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Qtd: {item.quantidade} x R$ {item.preco.toFixed(2)}</Text>
            <Button title="Remover" onPress={() => remover(item.id)} />
          </View>
        )}
        ListEmptyComponent={<Text>Carrinho vazio.</Text>}
      />
      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
      <Button title="Finalizar Compra" onPress={finalizarCompra} disabled={itens.length === 0} />
      <Button title="Limpar Carrinho" onPress={limpar} color="#888" disabled={itens.length === 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#eef1f6', marginBottom: 12, padding: 12, borderRadius: 8 },
  nome: { fontWeight: 'bold' },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 16 },
});