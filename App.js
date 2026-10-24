
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegacaoPrincipal from './navegacao/NavegacaoPrincipal';

export default function App() {
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      titulo: 'Shrek',
      ano: '2001',
      assistido: false,
    },
    {
      id: 2,
      titulo: 'Toy Story',
      ano: '1995',
      assistido: false,
    },
  ]);

  function adicionarFilme(novoFilme) {
    setFilmes([...filmes, novoFilme]);
  }

  function alternarAssistido(id) {
    setFilmes(
      filmes.map((filme) =>
        filme.id === id
          ? { ...filme, assistido: !filme.assistido }
          : filme
      )
    );
  }

  return (
    <NavigationContainer>
      <NavegacaoPrincipal
        filmes={filmes}
        onAdicionarFilme={adicionarFilme}
        onAlternarAssistido={alternarAssistido}
      />
    </NavigationContainer>
  );
}
