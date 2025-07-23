import { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { supabase } from '../services/supabase';
import { useCarrinho } from '../contexts/CarrinhoContext';

export default function ProdutosScreen() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { adicionar } = useCarrinho();

  useEffect(() => {
    async function fetchProdutos() {
      setLoading(true);
      const { data, error } = await supabase.from('produtos').select('*').order('created_at', { ascending: false });
      if (!error) setProdutos(data || []);
      setLoading(false);
    }
    fetchProdutos();
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.desc}>{item.descricao}</Text>
            <Text>Unidade: {item.unidade}</Text>
            <Text>Preço: R$ {Number(item.preco).toFixed(2)}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => adicionar(item)} />
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum produto encontrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { backgroundColor: '#eef1f6', marginBottom: 16, padding: 16, borderRadius: 10 },
  nome: { fontWeight: 'bold', fontSize: 20 },
  desc: { color: '#666', marginBottom: 4 },
});