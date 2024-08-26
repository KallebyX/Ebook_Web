import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaDoze() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-onze'); // Atualize esta rota conforme necessário
  };

  const avancarPagina = () => {
    navigate('/pagina-treze'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container-12'>
      <span className='equipe-de-saude-12'>
        A equipe de saúde trabalha buscando a melhor forma de proporcionar
        qualidade da assistência em saúde de forma integral com vista as
        condições de vida e saúde de maneira singular, sem discriminação e
        estigmatização (BRASIL, 2017).
      </span>
      <div className='prancheta-12' />
      <div className='group-12'>
        <div className='chevron-right-12'>
          <div className='vector-12' />
        </div>
        <div className='chevron-right-icon-12' />
      </div>
      <div className='rectangle-12' />
      <div className='group-1-12'>
        <span className='number-text-12'>12</span>
        <div className='ellipse-12' />
      </div>
      <div className='group-2-12'>
        <span className='como-os-cuidados-3-12'>
          COMO OS CUIDADOS PALIATIVOS
          <br />
          SERÃO REALIZADOS?
        </span>
        <div className='rectangle-4-12' />
      </div>

      {/* Botões de navegação */}
      <div style={{ width: '700px', position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000' }}>
        <img
          src={voltarImg}
          alt="Voltar"
          onClick={voltarPagina}
          style={{ cursor: 'pointer', marginRight: '600px' }}
        />
        <img
          src={avancarImg}
          alt="Avançar"
          onClick={avancarPagina}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}
