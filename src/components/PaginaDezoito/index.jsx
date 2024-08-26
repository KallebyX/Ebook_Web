import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaDezoito() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-dezesete');
  };

  const avancarPagina = () => {
    navigate('/pagina-dezenove');
  };
  return (
    <div className='main-container18'>
      <div className='group18'>
        <div className='rectangle18' />
        <span className='care18'>CUIDADOS</span>
      </div>
      <span className='care-instructions18'>
        Possibilite que seu filho(a) tenha autonomia para realizar as atividades
        de acordo com a limitação dele(a); <br />
        Se for necessário, providencie cadeira de banho para evitar a fadiga
        durante a realização de sua higiene; <br />
        Possibilite a realização de atividade física; <br />
        Conserve a energia, evite atividades de esforço físico desnecessária;
        <br />
        Converse com a equipe de saúde e realize junto a eles a observação de
        condições que possam estar levando seu filho(a) a fadiga, como por
        exemplo a depressão os distúrbios do sono e a dor.
      </span>
      <div className='group-118'>
        <div className='chevron-right-icon18'>
          <div className='vector18' />
        </div>
        <div className='chevron-right-icon-218' />
      </div>
      <div className='rectangle-318' />
      <div className='group-418'>
        <span className='span18'>18</span>
        <div className='ellipse18' />
      </div>
      <div className='group-518'>
        <span className='control-symptoms18'>CONTROLE DOS SINTOMAS</span>
        <button className='rectangle-button18' />
      </div>
      <div className='prancheta-copia18' />
      <div className='group-618'>
        <div className='flex-row-fc18'>
          <button className='rectangle-button-718' />
          <span className='fadiga18'>FADIGA</span>
        </div>
        <span className='sensacao-pessoal18'>
          É uma sensação pessoal do seu filho(a) que pode se manifestar como uma
          sensação de angústia, exaustão física, emocional e cognitiva. A fadiga
          pode dificultar as atividades diárias e desejo de melhora de sua
          saúde.
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
