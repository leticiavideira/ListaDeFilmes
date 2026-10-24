import { createStackNavigator } from '@react-navigation/stack';
import TelaFilmes from '../TelaFilmes';
import TelaDetalhes from '../TelaDetalhes';

const Stack = createStackNavigator();

export default function NavegacaoFilmes({filmes, onAlternarAssistido, onExcluirFilme}) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ListaFilmes"
                options={{ title: 'Meus filmes' }}
            >
                {({ navigation }) => (
                    <TelaFilmes
                        filmes={filmes}
                        navigation={navigation}
                    />
                )}
            </Stack.Screen>

            <Stack.Screen
                name="Detalhes"
                options={({ route }) => ({title: route.params.filme.titulo,})}
            >
                {({ route, navigation }) => {
                    const filmeAtual = filmes.find((item) => item.id === route.params.filme.id);

                    return (
                        <TelaDetalhes
                            filme={filmeAtual}
                            onAlternarAssistido={onAlternarAssistido}
                            onExcluirFilme={onExcluirFilme}
                            navigation={navigation}
                        />
                    );
                }}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
