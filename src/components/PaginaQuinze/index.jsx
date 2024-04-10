import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaQuinze() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-quatorze'); // Atualize esta rota conforme necessário
  };

  const avancarPagina = () => {
    navigate('/pagina-dezeseis'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container15'>
      <div className='group15'>
        <div className='rectangle15' />
        <span className='care15'>CUIDADOS</span>
      </div>
      <span className='care-instructions15'>
        Observe a cor da pele no geral atentando para os lábios, mãos e pés, é
        importante ver se estão corados ou pálidos; <br />
        Acomode seu filho(a) na posição mais confortável para ele; <br />
        Observe se há ruídos quando seu filho respira ou presença de secreção na
        boca e nariz; <br />
        Mantenha o ambiente ventilado, abra janelas ligue o ventilador; <br />
        Fique junto de seu familiar o auxiliando a manter o ritmo da inspiração
        e expiração pausado; <br />
        Atividade física moderada e atendendo as condições de seu familiar irá
        auxiliar; <br />A oferta de oxigênio, nebulização e medicamentos devem
        ser prescritas e orientadas pelos profissionais de saúde; <br />
        Em caso de aumento do sintoma ou persistência comunique a equipe de
        saúde, procure atendimento médico.
      </span>
      <div className='group-115'>
        <div className='chevron-right-icon15'>
          <div className='vector15' />
        </div>
        <div className='chevron-right-icon-215' />
      </div>
      <div className='rectangle-315' />
      <div className='group-415'>
        <span className='span15'>15</span>
        <div className='ellipse15' />
      </div>
      <div className='group-515'>
        <span className='control-symptoms15'>CONTROLE DOS SINTOMAS</span>
        <div className='rectangle-615' />
      </div>
      <div className='prancheta-copia15' />
      <div className='group-715'>
        <div className='flex-row15'>
          <button className='rectangle-815' />
          <span className='dificuldade-para-respirar15'>
            DIFICULDADE PARA RESPIRAR
          </span>
        </div>
        <span className='sensacao-de-falta-de-ar15'>
          A sensação de falta de ar ou também chamada de dispnéia provoca
          angústia tanto no paciente quanto na sua família.
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
