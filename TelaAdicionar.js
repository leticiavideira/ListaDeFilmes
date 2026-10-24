import {View, Text, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';

export default function TelaAdicionar() {
     const [titulo, setTitulo] = useState('');
     const [ano, setAno] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Adicionar Filme</Text>

            <TextInput
                style={styles.input}
                placeholder='Digite o título do filme'
                value={titulo}
                onChangeText={setTitulo}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite o ano de lançamento"
                value={ano}
                onChangeText={setAno}
                keyboardType="numeric"
            />

            <Text>Título digitado: {titulo}</Text> 
            <Text>Ano digitado: {ano}</Text>
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