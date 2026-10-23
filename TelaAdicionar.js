import {View, Text, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';

export default function TelaAdicionar() {
     const [titulo, setTitulo] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Adicionar Filme</Text>

            <TextInput
                style={styles.input}
                placeholder='Digite o título do filme'
                value={titulo}
                onChangeText={setTitulo}
            />

            <Text>Título digitado: {titulo}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        padding: 10,
        marginBottom: 15,
  },
});