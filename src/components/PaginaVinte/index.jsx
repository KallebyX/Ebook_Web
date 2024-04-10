import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaVinte() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-dezenove');
  };

  const avancarPagina = () => {
    navigate('/pagina-vinte-um');
  };

  return (
    <div className='main-container20'>
      <div className='group20'>
        <div className='rectangle20' />
        <span className='care-continuation20'>CUIDADOS (CONTINUAÇÃO)</span>
      </div>
      <span className='nutritionist-assessment20'>
        Solicite a avaliação do profissional nutricionista, este é o
        profissional mais indicado para esclarecer suas dúvidas sobre
        alimentação. A consulta com o nutricionista é de grande importância para
        que ele adapte os alimentos conforme os hábitos da família e
        necessidades do paciente; <br />
        Ao usar medicamento para náusea e vômito, atente se este fará efeito ou
        não. Observe se se filho(a) sentiu náusea ou teve vômito, se os sintomas
        foram após ingesta de alguma bebida e alimento ou após a administração
        de algum medicamento; <br />
        Procure manter o seu filho(a) calmo antes do inicio da quimioterapia.
        Possibilite ele a fazer alguma atividade (ler, ouvir música, brincar,
        meditar).
      </span>
      <div className='group-120'>
        <div className='chevron-right-icon20'>
          <div className='vector20' />
        </div>
        <div className='chevron-right-icon-220' />
      </div>
      <div className='rectangle-320' />
      <div className='group-420'>
        <span className='span20'>20</span>
        <div className='ellipse20' />
      </div>
      <div className='group-520'>
        <span className='control-symptoms20'>CONTROLE DOS SINTOMAS</span>
        <button className='rectangle-button20' />
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
