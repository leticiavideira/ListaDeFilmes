
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegacaoPrincipal from './navegacao/NavegacaoPrincipal';

export default function App() {
  const [filmes, setFilmes] = useState([
    { id: 1, titulo: 'Shrek', ano: '2001' },
    { id: 2, titulo: 'Toy Story', ano: '1995' },
  ]);

  function adicionarFilme(novoFilme) {
    setFilmes([...filmes, novoFilme]);
  }

  return (
    <NavigationContainer>
      <NavegacaoPrincipal
        filmes={filmes}
        onAdicionarFilme={adicionarFilme}
      />
    </NavigationContainer>
  );
}
