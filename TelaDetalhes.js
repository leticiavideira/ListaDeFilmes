
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

export default function TelaDetalhes({
  filme,
  onAlternarAssistido,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{filme.titulo}</Text>

      <Text>Ano de lançamento: {filme.ano}</Text>

      <Text style={styles.status}>
        Status: {filme.assistido ? 'Assistido' : 'Não assistido'}
      </Text>

      <Button
        title={
          filme.assistido
            ? 'Desmarcar'
            : 'Marcar como assistido'
        }
        onPress={() => onAlternarAssistido(filme.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  status: {
    fontSize: 18,
    marginVertical: 20,
  },
});
