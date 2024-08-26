import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
// Certifique-se de que os caminhos para as imagens estão corretos
import avancarImg from '../../assets/images/avancar.png'; 
import voltarImg from '../../assets/images/voltarp.png';

export default function PaginaDois() {
  const navigate = useNavigate();

  // Função para navegar para a próxima página
  const avancarPagina = () => {
    navigate('/pagina-tres'); // Substitua '/pagina-tres' pela rota correta
  };

  // Função para voltar para a página anterior
  const voltarPagina = () => {
    navigate('/pagina-nova'); // Substitua '/pagina-um' pela rota correta
  };

  return (
    <div className='main-container2a'>
      <div className='group2a'>
        <div className='flex-column-be2'>
          <span className='mestrado-profissional-saude2a'>
            Mestrado Profissional <br />
            em Saúde Materno Infantil
          </span>
          <span className='universidade-franciscana-ufn2a'>
            Universidade Franciscana - UFN
            <br />
            2023
          </span>
        </div>
        <div className='rectangle2a' />
      </div>
      <div className='group-12a'>
        <div className='flex-column2a'>
          <span className='titulo2a'>Título</span>
          <span className='cuidando-de-quem-amamos2a'>
            Cuidando de quem amamos: E-book interativo para familiares que
            cuidam de crianças e adolescentes com doença hemato-oncológica.
          </span>
        </div>
        <div className='rectangle-22a' />
      </div>
      <div className='group-32a'>
        <div className='flex-row-ea2a'>
          <div className='rectangle-42a' />
          <span className='autoria-e-elaboracao2a'>Autoria e Elaboração</span>
        </div>
        <span className='enfermeira-mestre2a'>
          Enfermeira Mestre Heloisa Catto Dal Forno
          <br />
          Prof. Dr. Carla Lizandra de Lima Ferreira
        </span>
      </div>
      <div className='group-52a'>
        <div className='flex-row-ceda2a'>
          <div className='rectangle-62a' />
          <span className='design-ilustracoes2a'>Design e ilustrações</span>
        </div>
        <span className='davi-oleques-pavao2a'>
          Davi Oleques Pavão
          <br />
          Prof. Dr. Roberto Osvaldo Gerhardt
        </span>
      </div>
      <div className='group-72a'>
        <div className='flex-column-acda2a'>
          <span className='execucao2a'>Execução</span>
          <span className='text-a2a'>
            Kalleby Evangelho Mota
            <br />
            Prof. Dr. Luiz Fernando Rodrigues Junior
          </span>
        </div>
        <div className='section-52a' />
      </div>
      <div className='group-62a'>
        <div className='wrapper-42a'>
          <span className='text-b2a'>Revisão</span>
          <span className='text-c2a'>
            Prof. Dr. Carla Lizandra de Lima Ferreira
          </span>
        </div>
        <div className='section-62a' />
        <div style={{ width: '700px', position: 'absolute', bottom: '-55px', left: '65%', transform: 'translateX(-50%)', zIndex: '1000' }}>
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
      <div className='rectangle-92a' />

      {/* Botões de navegação */}
    
    </div>
  );
}
