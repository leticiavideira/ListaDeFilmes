import { useState } from 'react';
import TelaFilmes from './TelaFilmes';
import TelaAdicionar from './TelaAdicionar';

export default function App() {
  const [filmes, setFilmes] = useState([
    { id: 1, titulo: 'Shrek', ano: '2001' },
    { id: 2, titulo: 'Toy Story', ano: '1995' },
  ]);

  
  function adicionarFilme(novoFilme) {
    setFilmes([...filmes, novoFilme]);
  }

  return (
    <TelaAdicionar onAdicionarFilme={adicionarFilme} />
  );
}
