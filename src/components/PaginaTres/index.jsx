import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';

export default function PaginaTres() {
  const navigate = useNavigate();

  // Função para navegar para a próxima página
  const avancarPagina = () => {
    navigate('/pagina-quatro'); // Atualize esta rota conforme necessário
  };

  // Função para voltar para a página anterior
  const voltarPagina = () => {
    navigate('/pagina-dois'); // Atualize esta rota conforme necessário
  };

  return (
    <div className="page-wrapper">
      <div className='main-container3'>
        <div className='group3'>
          <div className='flex-row-a3'>
            <div className='rectangle3' />
            <div className='rectangle-13' />
            <div className='chevron-right3'>
              <div className='vector3' />
            </div>
            <div className='duck-icon-chevron-right3' />
          </div>
          <div className='flex-row-b3'>
            <span className='change-page3'>Mudar de página</span>
            <span className='back-page3'>Voltar a página anterior</span>
            <span className='next-page-icon3'>
              Aperte nesse ícone para avançar para a próxima página
            </span>
            <span className='back-page-icon3'>
              Aperte nesse ícone para voltar a página anterior
              <br />
            </span>
          </div>
          <div className='flex-row-ff3'>
            <div className='rectangle-23' />
            <div className='rectangle-33' />
            <div className='player-skip-forward3' />
            <div className='vector-43' />
          </div>
          <div className='flex-row-c3'>
            <span className='open-link3'>Abrir um link</span>
            <span className='listen-audio3'>Ouvir um áudio</span>
            <span className='open-link-53'>
              Aperte nesse ícone para abrir um link e abrir uma página externa.
            </span>
            <span className='play-audio3'>
              Aperte nesse ícone para ouvir um áudio
              <br />
            </span>
          </div>
          
        </div>
        <div style={{ width: '700px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000' }}>
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
        <div className='group-63'>
          <div className='chevron-right-73'>
            <div className='vector-83' />
            
          </div>
          <div className='chevron-right-93' />
        </div>
        <div className='rectangle-a3' />
        <div className='group-b3'>
          <span className='span3'>3</span>
          <div className='ellipse3' />
        </div>
        <div className='rectangle-c3' />
        <span className='como-navegar-este3'>COMO NAVEGAR NESTE E-BOOK</span>
      </div>

      {/* Botões de navegação com medidas especificadas */}
      
    </div>
  );
}
