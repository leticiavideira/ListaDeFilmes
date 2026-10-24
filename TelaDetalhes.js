import {View, Text, StyleSheet, Pressable, Alert, ImageBackground} from 'react-native';

export default function TelaDetalhes({filme, onAlternarAssistido, onExcluirFilme, navigation}) {
    function confirmarExclusao() {
        Alert.alert(
            'Excluir filme',
            `Tem certeza que deseja excluir "${filme.titulo}"?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: () => {
                        onExcluirFilme(filme.id);
                        navigation.goBack();
                    },
                },
            ]
        );
    }

    return (
        <ImageBackground
            source={require('./assets/images/fundo.jpg')}
            style={styles.fundo}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.cartao}>
                    <Text style={styles.coracao}>♡</Text>

                    <Text style={styles.titulo}>
                        {filme.titulo}
                    </Text>

                    <Text style={styles.ano}>
                        Ano de lançamento: {filme.ano}
                    </Text>

                    <View style={styles.divisor} />

                    <Text style={styles.rotuloStatus}>
                        Status do filme
                    </Text>

                    <Text
                        style={[
                            styles.status,
                            filme.assistido
                                ? styles.statusAssistido
                                : styles.statusPendente,
                        ]}
                    >
                        {filme.assistido
                            ? '✓ Assistido'
                            : 'X Não assistido'}
                    </Text>

                    <Pressable
                        style={styles.botaoPrincipal}
                        onPress={() => onAlternarAssistido(filme.id)}
                    >
                        <Text style={styles.textoBotaoPrincipal}>
                            {filme.assistido
                                ? 'Desmarcar como assistido'
                                : 'Marcar como assistido'}
                        </Text>
                    </Pressable>

                    <Pressable
                        style={styles.botaoExcluir}
                        onPress={confirmarExclusao}
                    >
                        <Text style={styles.textoBotaoExcluir}>
                            Excluir filme
                        </Text>
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
        padding: 20,
    },
    cartao: {
        width: '100%',
        maxWidth: 500,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 28,
        borderRadius: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        elevation: 6,
    },
    coracao: {
        marginBottom: 8,
        color: '#CA4C63',
        fontSize: 42,
    },
    titulo: {
        marginBottom: 12,
        color: '#49384D',
        fontFamily: 'Ribeye',
        fontSize: 25,
        textAlign: 'center',
    },
    ano: {
        color: '#66556A',
        fontFamily: 'Newsreader',
        fontSize: 17,
        textAlign: 'center',
    },
    divisor: {
        width: '100%',
        height: 1,
        marginVertical: 22,
        backgroundColor: '#D8C5D9',
    },
    rotuloStatus: {
        color: '#59445D',
        fontFamily: 'NewsreaderSemiBold',
        fontSize: 17,
    },
    status: {
        marginTop: 8,
        marginBottom: 24,
        fontFamily: 'NewsreaderSemiBold',
        fontSize: 20,
    },
    statusAssistido: {
        color: '#62BBA8',
    },
    statusPendente: {
        color: '#B85C7A',
    },
    botaoPrincipal: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: '#CA4C63',
    },
    textoBotaoPrincipal: {
        color: '#FFFFFF',
        fontFamily: 'NewsreaderSemiBold',
        fontSize: 16,
        textAlign: 'center',
    },
    botaoExcluir: {
        width: '100%',
        alignItems: 'center',
        marginTop: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#B85C7A',
        borderRadius: 12,
        backgroundColor: 'transparent',
    },
    textoBotaoExcluir: {
        color: '#B85C7A',
        fontFamily: 'NewsreaderSemiBold',
        fontSize: 16,
    },
});
