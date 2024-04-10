import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importação de PropTypes
import voltarImg from '../../assets/images/voltarp.png'; // Importe a imagem de voltar
import avancarImg from '../../assets/images/avancar.png'; // Importe a imagem de avançar

function NavegacaoBotoes({ currentPage, setCurrentPage }) {
  const navigate = useNavigate();
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

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

  // Manipuladores de eventos de toque
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 75) {
      // Slide para a esquerda
      avancarPagina();
    } else if (touchStartX - touchEndX < -75) {
      // Slide para a direita
      voltarPagina();
    }
  };

  // Adiciona listeners para gestos de slide
  useEffect(() => {
    const target = document.getElementById("navegacaoBotoesContainer");
    target.addEventListener("touchstart", handleTouchStart);
    target.addEventListener("touchmove", handleTouchMove);
    target.addEventListener("touchend", handleTouchEnd);

    return () => {
      target.removeEventListener("touchstart", handleTouchStart);
      target.removeEventListener("touchmove", handleTouchMove);
      target.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX, touchEndX]);

  return (
    <div id="navegacaoBotoesContainer" style={{
      position: 'absolute',
      bottom: '-20%',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '1000',
      width: '100%',
      maxWidth: '650px',
      margin: '0 auto'
    }}>
      <div onClick={voltarPagina} style={{
        cursor: 'pointer',
        position: 'absolute',
        bottom: '0',
        left: '10px', // Ajuste para garantir a visibilidade e acessibilidade
      }}>
        <img src={voltarImg} alt="Voltar" style={{ width: '24.27px', height: '40px' }} />
      </div>
      <div onClick={avancarPagina} style={{
        cursor: 'pointer',
        position: 'absolute',
        bottom: '0',
        right: '10px', // Ajuste similar ao botão de voltar
      }}>
        <img src={avancarImg} alt="Avançar" style={{ width: '24.27px', height: '40px' }} />
      </div>
    </div>
  );
}

NavegacaoBotoes.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default NavegacaoBotoes;