
import { View, Text, StyleSheet } from 'react-native';

export default function TelaFilmes({ filmes }) {
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
