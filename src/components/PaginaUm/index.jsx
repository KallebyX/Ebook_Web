import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
// Importe a imagem do botão avançar
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaUm() {
  const navigate = useNavigate();

  // Função para navegar para a próxima página
  const avancarPagina = () => {
    navigate('/pagina-nova'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container1'>
      <span className='heloisa-catto-dal1'>Heloisa Catto Dal Forno</span>
      <div className='rectangle1' />
      <div className='group1'>
        <div className='prancheta-copia1' />
        <div className='ellipse1' />
        <div className='e-book1'>
          <span className='cuidando-de-quem-amamos1'>
            Cuidando de quem amamos:
            <br />
          </span>
          <span className='e-book-interativo1'>
            E-book interativo para familiares que cuidam de crianças e
            adolescentes com doença hemato-oncológica.
          </span>
        </div>
        <div className='prancheta-copia-11' />
      </div>
      <div className='prancheta-copia-21'>
        {/* Botão de avançar ajustado para aparecer sobre a imagem */}
        <img
          src={avancarImg}
          alt="Avançar"
          onClick={avancarPagina}
          style={{ cursor: 'pointer', position: 'absolute', bottom: '0px', left: '130px', zIndex: '1' }}
        />
      </div>
    </div>
  );
}
