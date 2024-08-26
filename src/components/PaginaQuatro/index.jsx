import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';

export default function PaginaQuatro() {
  const navigate = useNavigate();

  const avancarPagina = () => {
    navigate('/pagina-cinco'); // Substitua '/pagina-cinco' pela rota correta para a próxima página
  };

  const voltarPagina = () => {
    navigate('/pagina-tres'); // Substitua '/pagina-tres' pela rota correta para a página anterior
  };

  return (
    <>
      <div className='main-container4'>
        <div className='group4'>
          <span className='enfermagem-oncologia-maternoinfantil4'>
            Nascida na cidade de São João do Polêsine, possui graduação em Enfermagem, especialização em Oncologia e atualmente é mestranda em Saúde Materno Infantil pela Universidade Franciscana. Profissionalmente, atua na assistência em Urgência e Emergência.
            <br /> <br />O interesse pela temática “Cuidados Paliativos’’ surge da vivência acadêmica na assistência ao paciente oncológico e o aprofundamento nos estudos acerca da temática a partir da especialização. Ao ingressar no mestrado a preocupação em relação à temática aumentava, quando então por meio de estudos pode-se observar a necessidade de elaborar um material para a família de crianças e adolescentes sobre Cuidados Paliativos na hemato-oncologia. Dessa forma surge a elaboração e concretização do e-book.
          </span>
          <div className='rectangle4' />
          <span className='heloisa-catto-dal-forno4'>Heloisa Catto Dal Forno</span>
        </div>
        <div className='group-14'>
          <div className='flex-row-ac4'>
            <span className='carla-lizandra-de-lima-ferreira4'>
              Carla Lizandra de Lima Ferreira
            </span>
            <div className='rectangle-24' />
          </div>
          <span className='text-44'>
            Graduada em Enfermagem e Obstetrícia pela Faculdade de Enfermagem Nossa Senhora Medianeira (1992), Mestre em Enfermagem pela Universidade Federal de Santa Catarina (2003), Doutora em Ciências pela Universidade Federal de São Paulo - UNIFESP. Coordenadora do Curso de Enfermagem e Professora Assistente da Universidade Franciscana. Membro do Núcleo de Apoio Pedagógico - NAP - UFN. Professora do Mestrado Profissional em Saúde Materno Infantil - UFN.
            <br /> <br />
            Tem experiência na área de Enfermagem, com ênfase em Administração em Enfermagem, atuando principalmente nos seguintes temas: criança em situação de violência, enfermagem, escola, tecnologias educativas, vulnerabilidade e gestão.
          </span>
        </div>
        <div className='group-34'>
          <div className='chevron-right-icon4'>
            <div className='vector4' />
          </div>
          <div className='chevron-right-icon-44' />
        </div>
        <div className='rectangle-54' />
        <span className='author-presentation4'>APRESENTAÇÃO DAS AUTORAS</span>
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
      </div>

      {/* Botões de navegação */}
     
    </>
  );
}
