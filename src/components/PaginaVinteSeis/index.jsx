import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaVinteSeis() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-vinte-cinco');
  };

  const avancarPagina = () => {
    navigate('/pagina-vinte-sete');
  };

  return (
    <div className='main-container26'>
      <button className='button-group26'>
        <div className='rectangle26' />
        <div className='rectangle-126' />
        <div className='rectangle-226' />
        <span className='livros-acqa26'>
          <a href="https://www.acqa.com.br/livros/
">
  <button className='botao1'>Livros de Ana Cláudia Quintana Arantes. <br />
Site: acqa
    </button></a>      
        </span>
        <div className='link-icon26'>
          <div className='vector26' />
        </div>
        <div className='chevron-right-icon26'>
          <div className='vector-326' />
        </div>
      </button>
      <button className='button-group-426'>
        <div className='rectangle-526' />
        <div className='rectangle-626' />
        <div className='rectangle-726' />
        <span className='youtube-page26'><a href="https://www.youtube.com/c/AnaClaudiaQuintanaArantes"> <button className='botao2'>
        Página no Youtube de Ana Cláudia Quintana Arantes
          </button> </a>
        
        </span>
        <div className='link-icon-826'>
          <div className='vector-926' />
        </div>
        <div className='chevron-icon26'>
          <div className='vector-a26' />
        </div>
      </button>
      <button className='group26'>
        <div className='rectangle-b26' />
        <div className='rectangle-c26' />
        <div className='rectangle-d26' />
        <span className='quality-life-series26'>
          <a href="https://iris.paho.or jág/bitstream/handle/10665.2/56094/OPASNMHNVcvn2210040_por.pdf?sequence=1&isAllowed=y"> <button className='botao3'>
          Série Qualidade de Vida para Crianças com Câncer. Módulos em Cuidados
          Paliativos Pediátricos. Atenção Domiciliar. Organização Mundial da
          Saúde e Organização Pan-Americana da Saúde.
            </button > </a>
       
        </span>
        <div className='duck-icon-link26'>
          <div className='vector-e26' />
        </div>
        <div className='duck-icon-chevron-right'>
          <div className='vector-f26' />
        </div>
      </button>
      <button className='button-group-1026'>
        <div className='rectangle-1126' />
        <div className='rectangle-1226' />
        <div className='rectangle-1326' />
        <span className='cartilha-cuidados-paliativos26'>
          <a href="https://api-wordpress.paliativo.org.br/wp-content/uploads/2022/06/Cartilha_Cuidados-paliativos-Pediatricosfinal.pdf
"><button className='botao4'>
  Cartilha sobre cuidados paliativos pediátricos para familiares e
          pacientes. Academia Nacional de Cuidados Paliativos.
  </button></a>
          
        </span>
        <div className='duck-icon-link-1426'>
          <div className='vector-1526' />
        </div>
        <div className='duck-icon-chevron-right-1626'>
          <div className='vector-1726' />
        </div>
      </button>
      <button className='button26'>
        <div className='rectangle-1826' />
        <div className='rectangle-1926' />
        <div className='rectangle-1a26' />
        <span className='site-association-brasileira26'>
          <a href="https://www.abrale.org.br/#" target="_blank" rel="noopener noreferrer" ><button className='botao5'>Site da Associação Brasileira de Linfoma e Leucemia. Câncer infantil.
            </button></a>
        </span>
        <div className='icon-link26'>
          <div className='vector-1b26' />
        </div>
        <div className='icon-chevron-right26'>
          <div className='vector-1c26' />
        </div>
      </button>
      <div className='group-1d26'>
        <div className='icon-chevron-right-1e26'>
          <div className='vector-1f26' />
        </div>
        <div className='chevron-right-icon-2026' />
      </div>
      <div className='rectangle-2126' />
      <div className='group-2226'>
        <span className='number-2626'>26</span>
        <div className='ellipse26' />
      </div>
      <span className='suggestion-of-reading26'>SUGESTÃO DE LEITURA</span>
      <div className='rectangle-2326' />
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
