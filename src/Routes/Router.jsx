import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './Rotas'; // Importe seu componente de Rotas aqui
import NavegacaoBotoes from '../components/NavegacaoBotoes/ NavegacaoBotoes';

function RouterComponent() {
  const [currentPage, setCurrentPage] = useState(0); // Inicia na primeira página

  return (
    <Router>
      <div>
        <NavegacaoBotoes currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Rotas />
      </div>
    </Router>
  );
}

export default RouterComponent;
