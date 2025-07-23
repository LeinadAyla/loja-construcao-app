import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../services/supabase';

export default function ProdutoNovoScreen() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [unidade, setUnidade] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [loading, setLoading] = useState(false);

  async function cadastrarProduto() {
    if (!nome || !unidade || !preco || !estoque) {
      Alert.alert('Preencha todos os campos obrigatórios!');
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('produtos').insert([
      { nome, descricao, unidade, preco: Number(preco), estoque: Number(estoque) }
    ]);
    setLoading(false);
    if (error) Alert.alert('Erro', error.message);
    else {
      Alert.alert('Sucesso', 'Produto cadastrado!');
      setNome(''); setDescricao(''); setUnidade(''); setPreco(''); setEstoque('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Novo Produto</Text>
      <TextInput placeholder="Nome*" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} style={styles.input} />
      <TextInput placeholder="Unidade*" value={unidade} onChangeText={setUnidade} style={styles.input} />
      <TextInput placeholder="Preço*" value={preco} onChangeText={setPreco} style={styles.input} keyboardType="decimal-pad" />
      <TextInput placeholder="Estoque*" value={estoque} onChangeText={setEstoque} style={styles.input} keyboardType="number-pad" />
      <Button title={loading ? "Salvando..." : "Cadastrar"} onPress={cadastrarProduto} disabled={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 24 },
  input: { backgroundColor: '#f3f3f3', marginBottom: 16, padding: 10, borderRadius: 8 },
});