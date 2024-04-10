import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importação de PropTypes
import voltarImg from '../../assets/images/voltarp.png'; // Importe a imagem de voltar
import avancarImg from '../../assets/images/avancar.png'; // Importe a imagem de avançar

function NavegacaoBotoes({ currentPage, setCurrentPage }) {
  const navigate = useNavigate();

  const paginas = [
    '/pagina-um',
    '/pagina-dois',
    '/pagina-tres',
    '/pagina-quatro',
    '/pagina-cinco',
    '/pagina-seis',
    '/pagina-sete',
    '/pagina-oito',
    '/pagina-nove',
    '/pagina-dez',
    '/pagina-onze',
    '/pagina-doze',
    '/pagina-treze',
    '/pagina-quatorze',
    '/pagina-quinze',
    '/pagina-dezeseis',
    '/pagina-dezesete',
    '/pagina-dezoito',
    '/pagina-dezenove',
    '/pagina-vinte',
    '/pagina-vinte-um',
    '/pagina-vinte-dois',
    '/pagina-vinte-tres',
    '/pagina-vinte-quatro',
    '/pagina-vinte-cinco',
    '/pagina-vinte-seis',
    '/pagina-vinte-sete',
    // Adicione mais rotas conforme necessário
  ];

  const avancarPagina = () => {
    const nextPageIndex = Math.min(currentPage + 1, paginas.length - 1);
    setCurrentPage(nextPageIndex);
    navigate(paginas[nextPageIndex]);
  };

  const voltarPagina = () => {
    const prevPageIndex = Math.max(currentPage - 1, 0);
    setCurrentPage(prevPageIndex);
    navigate(paginas[prevPageIndex]);
  };

  return (
    <nav>

    </nav>
  );
}

// Definição das PropTypes
NavegacaoBotoes.propTypes = {
  currentPage: PropTypes.number.isRequired, // currentPage deve ser um número e é obrigatório
  setCurrentPage: PropTypes.func.isRequired, // setCurrentPage deve ser uma função e é obrigatório
};

export default NavegacaoBotoes;
