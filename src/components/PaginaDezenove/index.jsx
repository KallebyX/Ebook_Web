import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaDezenove() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-dezoito');
  };

  const avancarPagina = () => {
    navigate('/pagina-vinte');
  };

  return (
    <div className='main-container19'>
      <div className='group19'>
        <div className='rectangle19' />
        <span className='care19'>CUIDADOS</span>
      </div>
      <span className='nutrition-plan19'>
        Planeje sua alimentação: opte por oferecer a seu filho(a) alimentos
        leves, de fácil digestão, evite alimentos gordurosos e frituras e
        prefira alimentos secos e frios ou gelados; <br />
        Observe a aceitação dos alimentos e líquidos pelo seu filho(a); <br />
        Faça pequenas refeições de 5 a 6 vezes ao dia; <br />
        Evite cheiros / odores fortes como o de alimentos, temperos, perfumes
        que provocam náusea; <br />
        Mantenha a cabeceira do leito elevada ao fazer a ingesta de alimentos ou
        sente-se; <br />
        Evite o excesso de líquidos durante as refeições; <br />
        Converse com os profissionais da saúde que cuidam do seu filho(a) e
        solicite a avaliação para uso de medicamentos para náusea e vômito se
        houver necessidade;
      </span>
      <div className='group-119'>
        <div className='chevron-right-icon19'>
          <div className='vector19' />
        </div>
        <div className='chevron-right-icon-219' />
      </div>
      <div className='rectangle-319' />
      <div className='group-419'>
        <span className='span19'>19</span>
        <div className='ellipse19' />
      </div>
      <div className='group-519'>
        <span className='control-symptoms19'>CONTROLE DOS SINTOMAS</span>
        <div className='rectangle-619' />
      </div>
      <div className='prancheta-copia19' />
      <div className='group-719'>
        <div className='flex-row-c19'>
          <button className='rectangle-819' />
          <span className='nausea-vomiting19'>NÂUSEA E VÔMITO</span>
        </div>
        <span className='chemo-side-effects19'>
          A presença de náuseas e vômito pode ocorrer durante ou após a
          administração de quimioterápicos.
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
