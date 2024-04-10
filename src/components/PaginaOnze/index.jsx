import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';

export default function PaginaOnze() {
  const navigate = useNavigate();

  const avancarPagina = () => {
    navigate('/pagina-doze'); // Atualize esta rota conforme necessário
  };

  const voltarPagina = () => {
    navigate('/pagina-dez'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container-11'>
      <span className='apos-reconhecer-11'>
        Após reconhecer que você, familiar, e seu filho(a) necessitam e aceitam
        receber estes cuidados e compreendem a importância deles iniciará uma
        conversa qualificada e escuta atenta aos desejos, medos, incertezas e
        todos demais questionamentos que você têm em relação a essa nova fase da
        vida que se inicia pós diagnóstico de uma doença grave bem como,
        questionamentos/dúvidas sobre a doença e o tratamento curativo.
      </span>
      <span className='planejamento-11'>
        Assim, após esta conversa e escuta qualificada juntos vocês farão um
        planejamento com base nas expectativas e necessidade individuais do
        paciente com vista a qualidade da sua saúde no decorrer do tratamento.
      </span>
      <div className='group-11'>
        <span className='primeiro-contato-11'>
          Os balões a seguir indicam como será o primeiro contato com os
          cuidados paliativos:
        </span>
        <button className='rectangle-11' />
      </div>
      <div className='group-1-11'>
        <div className='chevron-right-icon-11'>
          <div className='vector-11' />
        </div>
        <div className='chevron-right-icon-2-11' />
      </div>
      <div className='rectangle-3-11' />
      <div className='group-4-11'>
        <span className='span-eleven-11'>11</span>
        <div className='div-ellipse-11' />
      </div>
      <div className='div-group-11'>
        <span className='span-cuidados-paliativos-11'>
          COMO OS CUIDADOS PALIATIVOS
          <br />
          SERÃO REALIZADOS?
        </span>
        <button className='button-rectangle-11' />
      </div>
      <div className='div-ellipse-5-11' />
      <div className='ellipse-11' />
      <span className='care-request-11'>
        Profissional reconhece a necessidade de iniciar os cuidados paliativos;
        <br />
        Família pede pelos cuidados paliativos.
      </span>
      <span className='conversation-11'>Conversa e escuta qualificada.</span>
      <div className='arrow-11' />
      <div className='arrow-6-11' />
      <div className='ellipse-7-11' />
      <div className='ellipse-8-11' />
      <span className='necessidades-individuais-11'>
        Necessidades individuais do paciente e família em todas as dimensões;
        <br />
        Respeito as escolhas da família e filho(a).
      </span>
      <span className='organizacao-cuidados-11'>
        Organização do plano de cuidados individuais para inicio dos cuidados
        paliativos.
      </span>
      <div className='arrow-9-11' />

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
