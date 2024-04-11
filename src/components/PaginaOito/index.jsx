import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';
import audioSrc1 from '../../assets/video/audio1.mp3';
import audioSrc2 from '../../assets/video/audio2.mp3';

export default function PaginaOito() {
  const navigate = useNavigate();

  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const [audioProgress1, setAudioProgress1] = useState(0);
  const [audioProgress2, setAudioProgress2] = useState(0);

  // Toggle play/pause for the first audio
  const togglePlayAudio1 = () => {
    const audio = audioRef1.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      setAudioProgress1(0);
    }
  };

  // Toggle play/pause for the second audio
  const togglePlayAudio2 = () => {
    const audio = audioRef2.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      setAudioProgress2(0);
    }
  };

  useEffect(() => {
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;

    const updateProgress1 = () => {
      const progress = (audio1.currentTime / audio1.duration) * 100;
      setAudioProgress1(progress);
    };

    const updateProgress2 = () => {
      const progress = (audio2.currentTime / audio2.duration) * 100;
      setAudioProgress2(progress);
    };

    audio1.addEventListener('timeupdate', updateProgress1);
    audio2.addEventListener('timeupdate', updateProgress2);

    return () => {
      audio1.removeEventListener('timeupdate', updateProgress1);
      audio2.removeEventListener('timeupdate', updateProgress2);
    };
  }, []);

  const avancarPagina = () => {
    navigate('/pagina-nove'); // Atualize esta rota conforme necessário
  };

  const voltarPagina = () => {
    navigate('/pagina-sete'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container8'>
      <span className='equipe-saude8'>
        Toda a equipe de saúde participa da realização dos cuidados paliativos de forma conjunta com família e paciente.
      </span>
      <div className='group8'>
        <div className='rectangle8' />
        <span className='plano-cuidados8'>
          Para cada etapa e necessidade do tratamento, um profissional diferente irá trabalhar com vocês e juntos criarão um plano conjunto de cuidados respeitando os seus limites, desejos e escolhas.
        </span>
      </div>
      <span className='enfermeira-noeli8'>
        Ouça a seguir uma fala a respeito da realização destes cuidados, através da fala da Enfermeira Noeli Maria Birk, Mestre em Enfermagem, Especialista em Educação Profissional na Área da Saúde, Saúde Pública e Cuidados Paliativos.
      </span>
      <div className='group-18'>
        <div className='rectangle-28' />
        <div className='rectangle-38' />
        <div className='rectangle-48' />
        <div className='player-skip-forward8' onClick={togglePlayAudio1}></div>
        <audio ref={audioRef1} src={audioSrc1} style={{ display: 'none' }}></audio>
        <div className='volume-down8'>
          <div className='vector8' />
        </div>
        <div className='ellipse8' />
        <div className='rectangle-58' style={{ width: '100%', backgroundColor: '#ddd' }}>
          <div className='button8' style={{ width: `${audioProgress1}%`, backgroundColor: 'green', height: '100%' }} />
        </div>
      </div>
      <span className='fisioterapeuta-claudia-turra-rossato8'>
        Ouça também a Fisioterapeuta Cláudia Turra Rossato, Pós Graduada em Terapia Intensiva com Ênfase em Oncologia e Controle de Infecção Hospitalar e Mestranda em Ciências do Movimento e Reabilitação.
      </span>
      <div className='group-68'>
        <div className='rectangle-78' />
        <div className='rectangle-88' />
        <div className='rectangle-98' />
        <div className='player-skip-forward-a8' onClick={togglePlayAudio2}></div>
        <audio ref={audioRef2} src={audioSrc2} style={{ display: 'none' }}></audio>
        <div className='volume-down-b8'>
          <div className='vector-c8' />
        </div>
        <div className='ellipse-d8' />
        <div>
          <div className='rectangle-e8' style={{ width: '100%', backgroundColor: '#ddd' }}>
          </div>
          <div>
            <div className='rectangle-f8' style={{ width: `${audioProgress2}%`, backgroundColor: 'white', height: '100%' }} />
          </div>
        </div>
      </div>
      <div className='group-108'>
        <div className='chevron-right-icon8'>
          <div className='vector-118' />
        </div>
        <div className='chevron-right-icon-128' />
      </div>
      <div className='rectangle-138' />
      <div className='group-148'>
        <span className='span8'>8</span>
        <div className='ellipse-158' />
      </div>
      <div className='group-168'>
        <span className='span-178'>
          QUEM PARTICIPA DOS CUIDADOS PALIATIVOS?
        </span>
        <button className='button-188' />
      </div>
      <div className='rectangle-198' />
      <span className='span-1a8'>
        O diagnóstico de uma doença grave trás consigo o sofrimento, sentimento de medo e angústia frente a várias situações da vida como a morte, o desamparo com a família, afastamento de atividades diárias, por exemplo. Assim, uma equipe com profissionais qualificados como enfermeiros, psicólogos, médicos, fisioterapeutas, assistente social, entre outros serão os responsáveis por prestar o cuidado para você e sua família durante todo o processo de diagnóstico, tratamento e reabilitação para que sintam-se protegidos e confiantes.
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
