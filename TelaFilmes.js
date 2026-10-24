
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function TelaFilmes({ filmes, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus filmes</Text>

      {filmes.map((filme) => (
        <TouchableOpacity
          key={filme.id}
          style={styles.filme}
          onPress={() =>
            navigation.navigate('Detalhes', { filme })
          }
        >
          <Text style={styles.textoFilme}>
            {filme.titulo} ({filme.ano})
          </Text>
        </TouchableOpacity>
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
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 10,
  },
  textoFilme: {
    fontSize: 18,
  },
});
