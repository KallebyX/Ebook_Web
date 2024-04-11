import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';

export default function PaginaSete() {
  const navigate = useNavigate();

  // Função para avançar para a próxima página
  const avancarPagina = () => {
    navigate('/pagina-oito');
  };

  // Função para voltar para a página anterior
  const voltarPagina = () => {
    navigate('/pagina-seis');
  };

  // Função para abrir o vídeo em uma nova aba
  const abrirVideo = () => {
    window.open("https://www.youtube.com/watch?v=Fa4ctd1uxNc", "_blank");
  };

  return (
    <div className='main-container7'>
      <div className='understand-concept7'>
        <span className='understand-meaning7'>
          Para compreender o significado destes cuidados, convido você a leitura do conceito do termo
        </span>
        <span className='palliative-care7'>Cuidado Paliativo</span>
        <span className='colon7'>:</span>
      </div>
      <div className='group7'>
        <button className='rectangle7' />
        <span className='suffering-forms7'>
          O sofrimento se manifesta de diferentes formas:
        </span>
      </div>
      <span className='questioning7'>
        Ainda, em meio a isso poderá se questionar: Quem cuidará dos meus outros
        filhos? Quem fará os serviços de casa? E o meu trabalho, minhas contas,
        a escola do meu filho(a)? Ou também questionar sobre sua
        espiritualidade: Por que comigo? Ainda tem muito a viver, por que com
        ele(a)? <br />
        <br />
        São muitos os questionamentos e os cuidados paliativos objetivam
        promover o bem-estar do paciente e família de maneira a compreender e se
        adaptar as necessidades particulares com a finalidade de reduzir o
        sofrimento.
      </span>
      <div className='group-17'>
        <span className='qualified-speech7'>
          Aperte no botão abaixo para ouvir uma fala qualificada sobre cuidados
          paliativos e entender melhor o assunto:
        </span>
        <div className='rectangle-27' />
      </div>
      <div className='group-37'>
        <div className='chevron-right-icon7'>
          <div className='vector7' />
        </div>
        <div className='chevron-right-icon-47' />
      </div>
      <div className='rectangle-57' />
      <div className='group-67'>
        <span className='number-77'>7</span>
        <div className='ellipse7' />
      </div>
      <div className='rectangle-77' />
      <span className='palliative-care-definition7'>
        O QUE SÃO CUIDADOS PALIATIVOS?
      </span>
      <div className='rectangle-87' />
      <div className='cuidado-paliativo7'>
        <span className='cuidado-paliativo-97'>Cuidado Paliativo</span>
        <span className='significa7'> significa </span>
        <span className='cuidado-paliativo-a7'>proteger</span>
        <span className='significa-b7'>
          . A palavra paliativo ou paliar deriva do latim
        </span>
        <span className='pallium7'>pallium</span>
        <span className='significa-c7'>
          
          e este termo diz respeito a um manto usado por cavaleiros nas
          cavalgadas para fins de proteção das tempestades percorridas por eles.
          <br />
          Proteger é
        </span>
        <span className='cuidado-paliativo-d7'>cuidar de alguém</span>
        <span className='significa-e7'>
          , e o objetivo dos cuidados paliativos é
        </span>
        <span className='cuidado-paliativo-f7'>
          amenizar o sofrimento do paciente e de quem está ao lado nesse
          processo do cuidado a vida
        </span>
        <span className='empty-class7'>
          . <br /> <br /> <br />
        </span>
      </div>
      <button className='group-107'>
        <div className='physical-suffering7'>
          <span className='physical-suffering-117'>
            Sofrimento físico
            <br />
          </span>
          <span className='difficulty-sleeping-pain-shortness-of-breath-tremors7'>
            Dificuldade para dormir, dor, falta de ar, tremores.
          </span>
        </div>
        <div className='rectangle-127' />
      </button>
      <button className='group-137'>
        <div className='mental-suffering7'>
          <span className='mental-suffering-147'>
            Sofrimento mental
            <br />
          </span>
          <span className='fear-loneliness-sadness-overwhelm7'>
            Medo, solidão, tristeza, sensação de sobrecarga.
          </span>
        </div>
        <div className='rectangle-157' />
      </button>
      <div className='rectangle-167' />
      <div className='rectangle-177' />
      <div className='rectangle-187' />
      <a href="https://www.youtube.com/watch?v=Fa4ctd1uxNc" target="_blank" rel="noopener noreferrer" className="button-link">
        <button className='button7'>
          O que são cuidados paliativos? - YouTube
        </button>
      </a>
      <a href="https://www.youtube.com/watch?v=Fa4ctd1uxNc" target="_blank" rel="noopener noreferrer" className="button-link">
      <div className='link-icon7'>
        <button className='vector-197' />
      </div>
      </a>
      <div className='chevron-right-icon-1a7'>
        <div className='vector-1b7' />
      </div>

      {/* Botões de navegação */}
      <div style={{ width: '700px', position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000' }}>
        <img src={voltarImg} alt="Voltar" onClick={voltarPagina} style={{ cursor: 'pointer', marginRight: '600px' }} />
        <img src={avancarImg} alt="Avançar" onClick={avancarPagina} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
}
