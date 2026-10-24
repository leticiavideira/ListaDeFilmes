
import { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

export default function TelaFilmes() {
  const [filmes, setFilmes] = useState([
    { id: 1, titulo: 'Shrek', ano: '2001' },
    { id: 2, titulo: 'Toy Story', ano: '1995' },
  ]);

  function adicionarFilmeExemplo() {
    const novoFilme = {
      id: filmes.length + 1,
      titulo: 'Procurando Nemo',
      ano: '2003',
    };

    setFilmes([...filmes, novoFilme]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus filmes</Text>

      {filmes.map((filme) => (
        <Text key={filme.id} style={styles.filme}>
          {filme.titulo} ({filme.ano})
        </Text>
      ))}

      {filmes.length === 0 && (
        <Text>Nenhum filme cadastrado.</Text>
      )}

      <Button
        title="Adicionar filme de exemplo"
        onPress={adicionarFilmeExemplo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filme: {
    fontSize: 18,
    marginBottom: 10,
  },
});
