import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaVinteQuatro() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-vinte-tres');
  };

  const avancarPagina = () => {
    navigate('/pagina-vinte-cinco');
  };

  return (
    <div className='main-container24'>
      <div className='group24'>
        <div className='rectangle24' />
        <span className='cuidados24'>CUIDADOS</span>
      </div>
      <span className='converse-medico24'>
        Converse com o médico para saber quais sinais de alarme você deve
        atentar e se será necessário o uso de medicamentos para o controle;
        <br />
        Evite o uso de alimentos crus nesta fase; <br />
        Use leite e derivados pasteurizados, esterilizados ou fervido; <br />
        Converse com a equipe de enfermagem e solicite máscaras apropriadas para
        uso; <br />
        Redobre os cuidados de higiene pessoal como a lavagem de mãos tanto para
        o seu filho(a) quanto para você familiar.
      </span>
      <div className='group-124'>
        <div className='chevron-right-icon24'>
          <div className='vector24' />
        </div>
        <div className='chevron-right-icon-224' />
      </div>
      <div className='rectangle-324' />
      <div className='group-424'>
        <span className='span24'>24</span>
        <div className='ellipse24' />
      </div>
      <div className='group-524'>
        <span className='control-symptoms24'>CONTROLE DOS SINTOMAS</span>
        <div className='rectangle-624' />
      </div>
      <div className='prancheta-copia24' />
      <div className='group-724'>
        <span className='neutropenia-info24'>
          A neutropenia acontece em virtude da diminuição das células de defesa
          do corpo do seu filho(a) que está realizando quimioterapia,
          radioterapia ou outro tratamento por ser um efeito colateral destes.
          Ela é identificada através de um exame de sangue o qual é solicitado
          pelo médico que acompanha seu filho(a).
        </span>
        <button className='rectangle-824' />
        <span className='neutropenia-defense-immunity24'>
          NEUTROPENIA (QUEDA DA DEFESA E IMUNIDADE)
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
