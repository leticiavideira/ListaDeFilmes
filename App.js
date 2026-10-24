import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegacaoPrincipal from './navegacao/NavegacaoPrincipal';

export default function App() {
    const [filmes, setFilmes] = useState([]);

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

    return (
        <NavigationContainer>
            <NavegacaoPrincipal
                filmes={filmes}
                onAdicionarFilme={adicionarFilme}
                onAlternarAssistido={alternarAssistido}
                onExcluirFilme={excluirFilme}
            />
        </NavigationContainer>
    );
}
