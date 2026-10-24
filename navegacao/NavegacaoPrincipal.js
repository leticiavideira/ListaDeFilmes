
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaAdicionar from '../TelaAdicionar';
import TelaFilmes from '../TelaFilmes';
import NavegacaoFilmes from './NavegacaoFilmes';

const Tab = createBottomTabNavigator();

export default function NavegacaoPrincipal({
  filmes,
  onAdicionarFilme,
  onAlternarAssistido,
}) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Adicionar"
        options={{ title: 'Adicionar' }}
      >
        {() => (
          <TelaAdicionar
            onAdicionarFilme={onAdicionarFilme}
          />
        )}
      </Tab.Screen>

      
      <Tab.Screen
        name="Filmes"
        options={{ title: 'Filmes', headerShown: false }}
      >
        {() => (
          <NavegacaoFilmes
            filmes={filmes}
            onAlternarAssistido={onAlternarAssistido}
          />
        )}
      </Tab.Screen>

    </Tab.Navigator>
  );
}
