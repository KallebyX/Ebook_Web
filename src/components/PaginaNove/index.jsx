import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import video2 from '../../assets/video/QOEZVGGRKH3N5GGE.mp4';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';

export default function PaginaNove() {
  const navigate = useNavigate();

  const avancarPagina = () => {
    navigate('/pagina-dez'); // Atualize esta rota conforme necessário
  };

  const voltarPagina = () => {
    navigate('/pagina-oito'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container9'>
      {/* Video element for page 9 */}
      <video className='rectangle9' controls>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='group9'>
        <button className='rectangle-19' />
        <span className='suffering-manifestation9'>
          O sofrimento se manifesta de diferentes formas:
        </span>
      </div>
      <span className='possible-cure9'>
        Quando se tem um diagnóstico onde a cura é possível, mas talvez não
        aconteça. São exemplos alguns problemas congênitos ou adquiridos do
        coração e o câncer. <br />
        Quando o paciente tem um diagnóstico de doença que necessitará um
        tratamento longo. São exemplos algumas doenças pulmonares, HIV/AIDS.
        <br />
        Quando o paciente tem um diagnóstico onde ainda não se tem tratamento
        específico. São exemplos doenças metabólicas progressivas e doenças
        genéticas. <br />E ainda, quando se tem um diagnóstico de doença grave
        incapacitante como a paralisia cerebral, sequelas de infecções graves
        como meningite e trauma grave na coluna e no cérebro.
      </span>
      <span className='palliative-care9'>
        Vale ressaltar que se o seu familiar apresenta alguma dessas condições,
        você tem indicação para receber os cuidados paliativos que serão
        planejados de forma conjunta - profissional qualificado, família,
        paciente – para assim buscar a singularidade e compreensão da realidade
        de cada pessoa envolvida.
      </span>
      <div className='group-29'>
        <div className='chevron-right9'>
          <div className='vector9' />
        </div>
        <div className='duck-icon9' />
      </div>
      <div className='rectangle-39' />
      <div className='group-49'>
        <span className='number-99'>9</span>
        <div className='ellipse9' />
      </div>
      <div className='group-59'>
        <span className='minha-familia9'>
          MINHA FAMÍLIA PRECISA <br />
          DE CUIDADOS PALIATIVOS?
        </span>
        <button className='rectangle-69' />
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
