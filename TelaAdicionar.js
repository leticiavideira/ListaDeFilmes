import { useState } from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground, Pressable} from 'react-native';

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

        const novoFilme = {
            id: Date.now(),
            titulo: titulo.trim(),
            ano: ano,
            assistido: false,
        };

        onAdicionarFilme(novoFilme);
        setTitulo('');
        setAno('');
        Alert.alert('Sucesso', 'Filme cadastrado!');
    }

    return (
        <ImageBackground
            source={require('./assets/images/fundo.jpg')}
            style={styles.fundo}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.titulo}>Adicionar filme</Text>

                <View style={styles.cartao}>
                    <Text style={styles.label}>Título do filme</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o título do filme"
                        placeholderTextColor="#9B899D"
                        value={titulo}
                        onChangeText={setTitulo}
                    />

                    <Text style={styles.label}>Ano de lançamento</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Ex.: 2001"
                        placeholderTextColor="#9B899D"
                        value={ano}
                        onChangeText={(texto) =>
                            setAno(texto.replace(/[^0-9]/g, '').slice(0, 4))
                        }
                        keyboardType="numeric"
                        maxLength={4}
                    />

                    <Pressable
                        style={styles.botao}
                        onPress={cadastrarFilme}
                    >
                        <Text style={styles.textoBotao}>Cadastrar filme</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    titulo: {
        alignSelf: 'center',
        marginBottom: 28,
        paddingHorizontal: 22,
        paddingVertical: 16,
        overflow: 'hidden',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        color: '#49384D',
        fontFamily: 'Ribeye',
        fontSize: 27,
        textAlign: 'center',
        elevation: 5,
    },
    cartao: {
        width: '100%',
        maxWidth: 900,
        alignSelf: 'center',
        padding: 25,
        borderRadius: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        elevation: 6,
    },
    label: {
        marginBottom: 8,
        color: '#59445D',
        fontFamily: 'NewsreaderSemiBold',
        fontSize: 18,
    },
    input: {
        width: '100%',
        marginBottom: 22,
        paddingHorizontal: 15,
        paddingVertical: 13,
        borderWidth: 1,
        borderColor: '#D8C5D9',
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        color: '#453849',
        fontFamily: 'Newsreader',
        fontSize: 16,
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 22,
        borderRadius: 12,
        backgroundColor: '#CA4C63',
        elevation: 3,
    },
    textoBotao: {
        color: '#FFFFFF',
        fontFamily: 'NewsreaderSemiBold',
        fontSize: 16,
    },
});
