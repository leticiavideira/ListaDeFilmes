import {View, Text, StyleSheet} from 'react-native'

export default function TelaFilmes(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus Filmes</Text>
            <Text>Nenhum filme cadastrado.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});