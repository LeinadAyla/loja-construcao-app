import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { supabase } from '../services/supabase';

export default function VendasScreen() {
  const [vendas, setVendas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVendas() {
      setLoading(true);
      const { data, error } = await supabase.from('vendas').select('*').order('data', { ascending: false });
      if (!error) setVendas(data ?? []);
      setLoading(false);
    }
    fetchVendas();
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vendas Realizadas</Text>
      <FlatList
        data={vendas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={{ fontWeight: 'bold' }}>Venda #{item.id}</Text>
            <Text>Data: {new Date(item.data).toLocaleDateString()}</Text>
            <Text>Total: R$ {Number(item.total).toFixed(2)}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhuma venda registrada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#eef1f6', marginBottom: 12, padding: 12, borderRadius: 8 },
});