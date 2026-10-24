import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function TelaFilmes({ filmes, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus filmes</Text>

            {filmes.length === 0 ? (<Text>Nenhum filme cadastrado.</Text>
                ) : (
                  filmes.map((filme) => (
                    <TouchableOpacity
                      key={filme.id}
                      style={styles.filme}
                      onPress={() => navigation.navigate('Detalhes', { filme })}
                    >
                      <Text style={styles.textoFilme}>
                        {filme.assistido ? '✓ ' : ''}
                        {filme.titulo} ({filme.ano})
                      </Text>
                    </TouchableOpacity>
                  ))
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    filme: {
      padding: 15,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 6,
    },
    textoFilme: {
      fontSize: 16,
    },
});
