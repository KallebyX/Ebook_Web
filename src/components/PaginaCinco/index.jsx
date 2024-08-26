import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';
import video from '../../assets/video/pag5.mp4';

export default function PaginaCinco() {
  const navigate = useNavigate();

  const avancarPagina = () => {
    navigate('/pagina-seis'); // Atualize esta rota conforme necessário
  };

  const voltarPagina = () => {
    navigate('/pagina-quatro'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container5'>
      <video className='rectangle5' controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='group5'>
        <div className='chevron-right5'>
          <div className='vector5' />
        </div>
        <div className='duck-icon-chevron-right5' />
      </div>
      <div className='rectangle-15' />
      <div className='group-25'>
        <span className='number-55'>5</span>
        <div className='ellipse5' />
      </div>
      <div className='rectangle-35' />
      <span className='apresentacao-e-book5'>APRESENTAÇÃO DO E-BOOK</span>
      <div className='rectangle-45' />
      <span className='abordagem-familia5'>
        A abordagem com a família foi descrita de uma maneira leve, sincera e
        compreensiva, instigando a leitura sobre um tema que ainda é tabu para
        muitas pessoas. Construído a partir da vivência de uma equipe
        multiprofissional com familiares que vivenciam uma doença crônica por
        vezes sem chances de cura. <br /> <br />
        Espera-se que o e-book sensibilize para a inserção do cuidado paliativo
        precoce sem sofrimento proporcionando uma melhor qualidade de vida a
        todos envolvidos nesse cuidado: crianças, adolescentes e aqueles que os
        amam imensamente, seus familiares.
      </span>

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
