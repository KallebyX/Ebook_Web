import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaVinteCinco() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagine-vinte-quatro');
  };

  const avancarPagina = () => {
    // Aqui você precisa atualizar a rota conforme necessário
    navigate('/pagina-vinte-seis');
  };

  return (
    <div className='main-container25'>
      <div className='group25'>
        <span className='text-2525'>25</span>
        <div className='ellipse25' />
      </div>
      <div className='rectangle25' />
      <div className='prancheta-copia25' />
      <span className='tratamentos-medicamentos25'>
        Os tratamentos com medicamentos sejam eles quimioterapia, terapia alvo,
        hormonioterapia ou tratamento cirúrgico e radioterápico podem ocasionar
        no seu filho(a) efeitos colaterais mais severos, outros mais leves ou
        ainda não apresentar efeito colateral.
      </span>
      <div className='group-125'>
        <div className='chevron-right25'>
          <div className='vector25' />
        </div>
        <div className='duck-icon-chevron-right25' />
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
