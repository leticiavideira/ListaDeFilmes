
import { createStackNavigator } from '@react-navigation/stack';
import TelaFilmes from '../TelaFilmes';
import TelaDetalhes from '../TelaDetalhes';

const Stack = createStackNavigator();

export default function NavegacaoFilmes({ filmes }) {
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
        options={({ route }) => ({
          title: route.params.filme.titulo,
        })}
      >
        {({ route }) => (
          <TelaDetalhes filme={route.params.filme} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
