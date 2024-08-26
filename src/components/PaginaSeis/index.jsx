import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';

export default function PaginaSeis() {
  const navigate = useNavigate();

  const avancarPagina = () => {
    navigate('/pagina-sete'); // Substitua '/pagina-sete' pela rota correta para a próxima página
  };

  const voltarPagina = () => {
    navigate('/pagina-cinco'); // Substitua '/pagina-cinco' pela rota correta para a página anterior
  };
  return (
    <div className='main-container6cc'>
      {/* Grupo 1 - O que são cuidados paliativos? */}
      <div className='group6cc' onClick={() => navigate('/pagina-sete')}>
        <div className='rectangle6cc' />
        <div className='rectangle-16cc' />
        <div className='rectangle-26cc' />
        <span className='question6cc'>O que são cuidados paliativos?</span>
        <div className='chevron-right6cc'><div className='vector6cc' /></div>
        <span className='number-16cc'>1</span>
      </div>

      {/* Grupo 2 - Quem participa dos cuidados paliativos? */}
      <div className='group-36cc' onClick={() => navigate('/pagina-oito')}>
        <div className='rectangle-46cc' />
        <div className='rectangle-56cc' />
        <div className='rectangle-66cc' />
        <span className='question6cc'>Quem participa dos cuidados paliativos?</span>
        <div className='duck-icon-chevron-right6cc'><div className='vector-76cc' /></div>
        <span className='span6cc'>2</span>
      </div>

      {/* Grupo 3 - Minha família precisa de cuidados paliativos? */}
      <button className='button-group6cc' onClick={() => navigate('/pagina-nove')}>
        <div className='rectangle-86cc' />
        <div className='rectangle-96cc' />
        <div className='rectangle-a6cc' />
        <span className='question6cc'>Minha família precisa de cuidados paliativos?</span>
        <div className='duck-icon-chevron-right-b6cc'><div className='vector-c6cc' /></div>
        <span className='span-d6cc'>3</span>
      </button>

      {/* Grupo 4 - Como os cuidados paliativos serão realizados? */}
      <button className='button-group-e6cc' onClick={() => navigate('/pagina-dez')}>
        <div className='rectangle-f6cc' />
        <div className='rectangle-106cc' />
        <div className='rectangle-116cc' />
        <span className='como-os-cuidados'>Como os cuidados paliativos serão realizados?</span>
        <div className='icon-chevron-right6cc'><div className='vector-126cc' /></div>
        <span className='sugestao-de-leitura6cc'>Como os cuidados paliativos serão realizados?</span>
        <span className='number-46cc'>4</span>
      </button>

      {/* Grupo 5 - Controle dos sintomas */}
      <button className='group-136cc' onClick={() => navigate('/pagina-treze')}>
        <div className='rectangle-146cc' />
        <div className='rectangle-156cc' />
        <div className='rectangle-166cc' />
        <span className='controle-dos-sintomas6cc'>Controle dos sintomas</span>
        <div className='icon-chevron-right-176cc'><div className='vector-186cc' /></div>
        <span className='number-56cc'>5</span>
      </button>

      {/* Grupo 6 - Sugestão de leitura */}
      <button className='group-196cc' onClick={() => navigate('/pagina-vinte-seis')}>
        <div className='rectangle-1a6cc' />
        <div className='rectangle-1b6cc' />
        <div className='rectangle-1c6cc' />
        <span className='sugestao-de-leitura6cc'>Sugestão de leitura</span>
        <div className='chevron-right-icon6cc'><div className='vector-1d6cc' /></div>
        <span className='number-66cc'>6</span>
      </button>

      {/* Grupo 7 - Referências */}

      <div className='group-1e6cc' onClick={() => navigate('/pagina-vinte-sete')}>
        <div className='rectangle-1f6cc' />
        <div className='rectangle-206cc' />
        <div className='rectangle-216cc' />
        <span className='referencias6cc'>Referências</span>
        <div className='chevron-right-icon-226cc'><div className='vector-236cc' /></div>
        <span className='number-76cc'>7</span>
      </div>


      {/* Outros elementos da página, como o cabeçalho do sumário e decorações */}
      <div className='rectangle-286cc' />
      <div className='group-296cc'>
        <span className='number-6-2a6cc'>6</span>
        <div className='ellipse6cc' />
      </div>
      <div className='rectangle-2b6cc' />
      <span className='summary-26cc'>SUMÁRIO</span>
        {/* Botões de navegação com estilos inline conforme solicitado */}
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
