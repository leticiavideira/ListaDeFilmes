import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

export default function TelaFilmes({ filmes, navigation }) {
    return (
        <ImageBackground
            source={require('./assets/images/fundo.jpg')}
            style={styles.fundo}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.titulo}>Meus filmes</Text>

                {filmes.length === 0 ? (
                    <View style={styles.cartaoVazio}>
                        <Text style={styles.coracao}>♡</Text>
                        <Text style={styles.mensagemVazia}>
                            Sua lista está esperando por histórias!
                        </Text>
                        <Text style={styles.subtituloVazio}>
                            Adicione seu primeiro filme na aba Adicionar.
                        </Text>
                    </View>
                ) : (
                    filmes.map((filme) => (
                        <TouchableOpacity
                            key={filme.id}
                            style={styles.cartaoFilme}
                            activeOpacity={0.8}
                            onPress={() =>
                                navigation.navigate('Detalhes', { filme })
                            }
                        >
                            <View style={styles.informacoesFilme}>
                                <Text style={styles.nomeFilme}>
                                    {filme.titulo}
                                </Text>
                                <Text style={styles.anoFilme}>
                                    {filme.ano}
                                </Text>
                            </View>

                            <View
                                style={[
                                    styles.indicador,
                                    filme.assistido
                                        ? styles.assistido
                                        : styles.pendente,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.textoIndicador,
                                        filme.assistido
                                            ? styles.textoAssistido
                                            : styles.textoPendente,
                                    ]}
                                >
                                    {filme.assistido ? '✓' : '♡'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                )}
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
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 20,
    },
    titulo: {
        alignSelf: 'center',
        marginBottom: 25,
        paddingHorizontal: 22,
        paddingVertical: 14,
        overflow: 'hidden',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        color: '#49384D',
        fontFamily: 'Ribeye',
        fontSize: 26,
        textAlign: 'center',
        elevation: 5,
    },
    cartaoVazio: {
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingVertical: 30,
        borderRadius: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        elevation: 5,
    },
    coracao: {
        marginBottom: 10,
        color: '#CA4C63',
        fontSize: 48,
    },
    mensagemVazia: {
        color: '#57425B',
        fontFamily: 'Ribeye',
        fontSize: 18,
        textAlign: 'center',
    },
    subtituloVazio: {
        marginTop: 12,
        color: '#66556A',
        fontFamily: 'Newsreader',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 23,
    },
    cartaoFilme: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        padding: 17,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        elevation: 3,
    },
    informacoesFilme: {
        flex: 1,
        paddingRight: 12,
    },
    nomeFilme: {
        color: '#4B3B4F',
        fontFamily: 'NewsreaderSemiBold',
        fontSize: 19,
    },
    anoFilme: {
        marginTop: 4,
        color: '#66556A',
        fontFamily: 'Newsreader',
        fontSize: 15,
    },
    indicador: {
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    assistido: {
        backgroundColor: 'rgba(98, 187, 168, 0.15)',
    },
    pendente: {
        backgroundColor: 'rgba(184, 92, 122, 0.12)',
    },
    textoIndicador: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    textoAssistido: {
        color: '#62BBA8',
    },
    textoPendente: {
        color: '#B85C7A',
    },
});
