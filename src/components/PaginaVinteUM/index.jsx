// PaginaVinteUm.js
import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaVinteUm() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-vinte');
  };

  const avancarPagina = () => {
    navigate('/pagina-vinte-dois');
  };

  return (
    <div className='main-container'>
      <button className='group'>
        <div className='rectangle' />
        <span className='care'>CUIDADOS</span>
      </button>
      <span className='food-preference'>
        Prefira a ingesta e oferta de alimentos que tanto o cheiro quanto o
        sabor lhe agradem; <br />
        Experimente temperos diferentes para o preparo dos alimentos; <br />
        Ofereça a seu filho(a) alimentos gelados, como picolé; <br />
        Dê preferência para o uso de talheres/utensílios de vidro; <br />
        Prepare pratos visualmente apetitosos.
      </span>
      <div className='group-1'>
        <div className='chevron-right-icon'>
          <div className='vector' />
        </div>
        <div className='chevron-right-icon-2' />
      </div>
      <div className='rectangle-3' />
      <div className='group-4'>
        <span className='span'>21</span>
        <div className='ellipse' />
      </div>
      <span className='control-symptoms'>CONTROLE DOS SINTOMAS</span>
      <button className='rectangle-5' />
      <div className='prancheta-copia211' />
      <div className='group-6'>
        <div className='group-7'>
          <span className='alteracoes-paladar'>
            Poderá ser observado alterações no paladar do seu filho(a) vindo a
            acontecer o ressecamento da boca e gosto metálico por exemplo.
          </span>
          <button className='rectangle-8' />
          <span className='disgeusia-alteracoes-paladar'>
            DISGEUSIA <br />
            (ALTERAÇÕES NO PALADAR)
          </span>
        </div>
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
