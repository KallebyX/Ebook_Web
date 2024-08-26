import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaDezesete() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-dezeseis'); // Atualize esta rota conforme necessário
  };

  const avancarPagina = () => {
    navigate('/pagina-dezoito'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container17'>
      <button className='group17'>
        <div className='rectangle17' />
        <span className='care17'>CUIDADOS</span>
      </button>
      <span className='care-instructions17'>
        Observe se há feridas na boca que prejudiquem a ingesta de alimentos;
        <br />
        Observe se ele(a) está se hidratando, oferte líquidos; <br />
        Possibilite que os horários das refeições sejam de acordo coma vontade
        do seu familiar; <br />
        Oferte alimentos que ele(a)goste em pequenas porções mais vezes ao dia;
        <br />
        Mantenha boa higiene da boca, lubrifique os lábios; <br />
        Contate a equipe de saúde para fazer uso de medicamentos em caso de
        náusea e vômito com frequência.
      </span>
      <div className='group-117'>
        <div className='chevron-right-icon17'>
          <div className='vector17' />
        </div>
        <div className='chevron-right-icon-217' />
      </div>
      <div className='rectangle-317' />
      <div className='group-417'>
        <span className='span17'>17</span>
        <div className='ellipse17' />
      </div>
      <div className='group-517'>
        <span className='control-symptoms17'>CONTROLE DOS SINTOMAS</span>
        <div className='rectangle-617' />
      </div>
      <div className='prancheta-copia17' />
      <div className='group-717'>
        <div className='flex-row-ed17'>
          <button className='rectangle-817' />
          <span className='falta-de-apetite17'>FALTA DE APETITE</span>
        </div>
        <span className='criancas-e-adolescentes-cancer-avancado17'>
          Em crianças e adolescentes com câncer avançado há uma diminuição do
          apetite, sendo importante não forçar o alimento ofertado. <br />É
          importante nesse momento, pedir o que gostaria de comer.
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
