import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaVinteDois() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-vinte-um');
  };

  const avancarPagina = () => {
    navigate('/pagina-vinte-tres');
  };

  return (
    <div className='main-container'>
      <button className='group'>
        <div className='rectangle' />
        <span className='care'>CUIDADOS</span>
      </button>
      <span className='healthy-tips'>
        Evite alimentos industrializados; <br />
        Opte por alimentos saudáveis preparados na sua casa; <br />
        Diminua o uso do sal nas refeições; <br />
        Opte por sucos naturais; <br />
        Converse com os profissionais de saúde para o auxiliar na realização da
        prática de atividade física que seu filho(a) mais gosta.
      </span>
      <div className='group-1'>
        <div className='chevron-right-icon'>
          <div className='vector' />
        </div>
        <div className='chevron-right-icon-2' />
      </div>
      <div className='rectangle-3' />
      <div className='group-4'>
        <span className='span'>22</span>
        <div className='ellipse' />
      </div>
      <div className='group-5'>
        <span className='control-symptoms-6'>CONTROLE DOS SINTOMAS</span>
        <div className='rectangle-7' />
      </div>
      <div className='prancheta-copiaww' />
      <div className='group-8'>
        <div className='flex-row-f'>
          <button className='rectangle-9' />
          <span className='ganho-de-peso'>GANHO DE PESO</span>
        </div>
        <span className='aumento-de-peso'>
          Alguns medicamentos podem provocar um descontrole na fome levando a um
          aumento do peso em pouco tempo. Mas, o profissional nutricionista
          poderá lhe auxiliar nisso! Não há necessidade de negar comida, apenas
          selecionar e organizar suas refeições.
        </span>
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
