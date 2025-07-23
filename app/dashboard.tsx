import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ECharts from 'react-native-echarts-wrapper';
import { supabase } from '../services/supabase';

export default function DashboardScreen() {
  const [dados, setDados] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      setLoading(true);
      // Supondo que existe uma função 'vendas_por_mes' no Supabase
      const { data, error } = await supabase.rpc('vendas_por_mes');
      if (!error) setDados(data ?? []);
      setLoading(false);
    }
    fetchDashboard();
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  const option = {
    title: { text: 'Vendas por Mês' },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: dados.map((d) => d.mes),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: dados.map((d) => d.total),
        type: 'bar',
        barWidth: '40%',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={{ flex: 1, width: '100%', height: 350 }}>
        <ECharts option={option} backgroundColor="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
});