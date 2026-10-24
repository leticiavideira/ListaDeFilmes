import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaAdicionar from '../TelaAdicionar';
import NavegacaoFilmes from './NavegacaoFilmes';

const Tab = createBottomTabNavigator();

export default function NavegacaoPrincipal({
    filmes,
    onAdicionarFilme,
    onAlternarAssistido,
    onExcluirFilme,
}) {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#CA4C63',
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontFamily: 'Ribeye',
                    fontSize: 19,
                },
                tabBarStyle: {
                    backgroundColor: '#CA4C63',
                    borderTopColor: '#B85C7A',
                    height: 62,
                    paddingTop: 5,
                    paddingBottom: 7,
                },
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#F3D8DF',
                tabBarLabelStyle: {
                    fontFamily: 'NewsreaderSemiBold',
                    fontSize: 14,
                },
            }}
        >
            <Tab.Screen
                name="Adicionar"
                options={{
                    title: 'Adicionar',
                    tabBarLabel: 'Adicionar',
                    tabBarIcon: ({ color, size, focused }) => (
                        <TextIcon
                            simbolo={focused ? '♥' : '♡'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            >
                {() => (
                    <TelaAdicionar
                        onAdicionarFilme={onAdicionarFilme}
                    />
                )}
            </Tab.Screen>

            <Tab.Screen
                name="Filmes"
                options={{
                    title: 'Filmes',
                    headerShown: false,
                    tabBarLabel: 'Meus filmes',
                    tabBarIcon: ({ color, size, focused }) => (
                        <TextIcon
                            simbolo={focused ? '♥' : '♡'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            >
                {() => (
                    <NavegacaoFilmes
                        filmes={filmes}
                        onAlternarAssistido={onAlternarAssistido}
                        onExcluirFilme={onExcluirFilme}
                    />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

function TextIcon({ simbolo, color, size }) {
    return (
        <Text
            style={{
                color: color,
                fontSize: size,
                fontWeight: 'bold',
            }}
        >
            {simbolo}
        </Text>
    );
}