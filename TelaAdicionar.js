import { useState } from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';

export default function TelaAdicionar({ onAdicionarFilme }) {
    const [titulo, setTitulo] = useState('');
    const [ano, setAno] = useState('');

    function cadastrarFilme() {
        if (titulo.trim() === '' || ano.trim() === '') {
            Alert.alert('Atenção', 'Preencha o título e o ano.');
            return;
        }

        const anoAtual = new Date().getFullYear();
        const anoNumerico = Number(ano);

        if (!/^\d{4}$/.test(ano)) {
            Alert.alert('Ano inválido', 'Digite um ano com quatro algarismos.');
            return;
        }

        if (anoNumerico < 1888 || anoNumerico > anoAtual) {
            Alert.alert('Ano inválido', `Digite um ano entre 1888 e ${anoAtual}.`);
            return;
        }

        const novoFilme = {id: Date.now(), titulo: titulo.trim(), ano: ano, assistido: false};

        onAdicionarFilme(novoFilme);

        setTitulo('');
        setAno('');

        Alert.alert('Sucesso', 'Filme cadastrado!');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Adicionar filme</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite o título do filme"
                value={titulo}
                onChangeText={setTitulo}
            />

            <TextInput
                style={styles.input}
                placeholder="Ano de lançamento (ex.: 2001)"
                value={ano}
                onChangeText={(texto) => setAno(texto.replace(/[^0-9]/g, '').slice(0, 4))}
                keyboardType="numeric"
                maxLength={4}
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
        padding: 20,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        padding: 10,
        marginBottom: 15,
    },
});
