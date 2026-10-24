import { useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Newsreader_500Medium, Newsreader_600SemiBold } from '@expo-google-fonts/newsreader';
import { Ribeye_400Regular } from '@expo-google-fonts/ribeye';

import NavegacaoPrincipal from './navegacao/NavegacaoPrincipal';

export default function App() {
    const [filmes, setFilmes] = useState([]);

    const [fontesCarregadas] = useFonts({
        Newsreader: Newsreader_500Medium,
        NewsreaderSemiBold: Newsreader_600SemiBold,
        Ribeye: Ribeye_400Regular,
    });

    function adicionarFilme(novoFilme) {
        setFilmes([...filmes, novoFilme]);
    }

    //Adicionei exclusão de filmes da lista, para deixar mais funcional
    function excluirFilme(id) {
        setFilmes(filmes.filter((filme) => filme.id !== id));
    }

    function alternarAssistido(id) {
        setFilmes(filmes.map((filme) => filme.id === id ? { ...filme, assistido: !filme.assistido } : filme));
    }

    if (!fontesCarregadas) {
        return null;
    }

    return (
        <ImageBackground
            source={require('./assets/images/fundo.jpg')}
            style={styles.fundo}
            resizeMode="cover"
        >
            <View style={styles.aplicativo}>
                <NavigationContainer>
                    <NavegacaoPrincipal
                        filmes={filmes}
                        onAdicionarFilme={adicionarFilme}
                        onAlternarAssistido={alternarAssistido}
                        onExcluirFilme={excluirFilme}
                    />
                </NavigationContainer>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
    },
    aplicativo: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
    },
});
