import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaUm() {
  const navigate = useNavigate();

  const avancarPagina = () => {
    navigate('/pagina-nova');
  };

  // Adiciona animação de entrada
  React.useEffect(() => {
    document.querySelector('.main-container1')?.classList.add('page-enter');
  }, []);

  return (
    <div className='main-container1' role="main" aria-label="Página de Capa">
      <div className='rectangle1' aria-hidden="true" />

      <h1 className='heloisa-catto-dal1'>Heloisa Catto Dal Forno</h1>

      <div className='group1'>
        <div className='prancheta-copia1' role="img" aria-label="Ilustração decorativa" />
        <div className='ellipse1' role="img" aria-label="Elemento decorativo circular" />

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

        <div className='prancheta-copia-11' role="img" aria-label="Ilustração de família" />
      </div>

      <div className='prancheta-copia-21' role="img" aria-label="Ilustração decorativa">
        <div className='navigation-buttons'>
          <button
            className='button-wrapper'
            onClick={avancarPagina}
            aria-label="Avançar para próxima página"
            title="Próxima página"
          >
            <img src={avancarImg} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
