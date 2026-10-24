import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import { useState } from 'react';

export default function TelaAdicionar({onAdicionarFilme}) {
    const [titulo, setTitulo] = useState('');
    const [ano, setAno] = useState('');

    function cadastrarFilme() {
        if (titulo.trim() === '' || ano.trim() === '') {
            Alert.alert('Atenção', 'Preencha o título e o ano.');
            return;
        }
        const novoFilme = {
            id: Date.now(),
            titulo: titulo.trim(),
            ano: ano.trim(),
        };

        onAdicionarFilme(novoFilme);

        setTitulo('');
        setAno('');

        Alert.alert('Sucesso', 'Filme cadastrado!');
    }

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

            <Button
                title="Cadastrar filme"
                onPress={cadastrarFilme}
            />
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