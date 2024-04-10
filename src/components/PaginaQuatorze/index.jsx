import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaQuatorze() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-treze'); // Atualize esta rota conforme necessário
  };

  const avancarPagina = () => {
    navigate('/pagina-quinze'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container14'>
      <button className='group14'>
        <div className='rectangle14' />
        <span className='care14'>CUIDADOS</span>
      </button>
      <span className='care-instructions14'>
        Observe qual a temperatura e de quanto em quanto tempo a febre retorna;
        <br />
        Se se filho estiver com febre não deixe- o com roupas úmidas, não
        agasalhe muito a menos que esteja com calafrios; <br />
        Ofereça líquidos; <br />
        Dê banho morno e coloque compressas frias abaixo das axilas e na região
        acima dos olhos na face; <br />
        Oferte medicamentos conforme o seu médico prescreveu e orientou o uso;
        <br />
        Se apesar destes cuidados a febre não diminuir comunique a equipe de
        saúde, procure atendimento médico.
      </span>
      <div className='group-114'>
        <div className='chevron-right-icon14'>
          <div className='vector14' />
        </div>
        <div className='chevron-right-icon-214' />
      </div>
      <div className='rectangle-314' />
      <div className='group-414'>
        <span className='span14'>14</span>
        <div className='ellipse14' />
      </div>
      <div className='group-514'>
        <span className='controle-dos-sintomas14'>CONTROLE DOS SINTOMAS</span>
        <button className='rectangle-button14' />
      </div>
      <div className='prancheta-copia14' />
      <div className='group-614'>
        <div className='flex-row-f14'>
          <button className='rectangle-button-714' />
          <span className='fever14'>FEBRE</span>
        </div>
        <span className='high-temperature14'>
          A febre pode acontecer devido várias causas e leva ao aumento da
          temperatura do corpo acima do normal. Considera-se febre o valor igual
          ou acima de 38ºC. <br />
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
