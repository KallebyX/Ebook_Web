import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';

export default function PaginaDez() {
  const navigate = useNavigate();

  const avancarPagina = () => {
    navigate('/pagina-onze'); // Atualize esta rota conforme necessário
  };

  const voltarPagina = () => {
    navigate('/pagina-nove'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container10'>
      <span className='care-span10'>
        Como já vimos anteriormente a equipe que irá realizar os cuidados
        paliativos é formada por vários profissionais qualificados que
        trabalharão junto com você, familiar, todas as dimensões que dizem
        respeito a busca da qualidade de vida.
      </span>
      <div className='care-group10'>
        <button className='care-button10' />
        <span className='care-span-110'>
          É possível compreender as dimensões abaixo:
        </span>
      </div>
      <div className='care-div-210'>
        <div className='care-div-310' />
        <span className='care-span-410'>
          Os cuidados paliativos serão realizados de forma precoce, ou seja,
          assim que a criança ou adolescente receber o diagnóstico de uma doença
          hemato-oncológica e estes cuidados serão prestados por profissionais
          qualificados ao paciente e a você familiar.
        </span>
      </div>
      <div className='group10'>
        <div className='rectangle10' />
        <span className='care-palliative10'>
          Ao receber o diagnóstico de uma doença grave que ameaça ou limita a
          continuidade da vida, como por exemplo, o câncer a equipe formada para
          realizar os cuidados paliativos dentro do estabelecimento de saúde que
          você se encontra irá reconhecer a necessidade de iniciar tais cuidados
          ou também você familiar poderá solicitar estes cuidados, visto que
          eles trazem muitos benefícios.
        </span>
      </div>
      <div className='group-510'>
        <div className='chevron-right-icon10'>
          <div className='vector10' />
        </div>
        <div className='chevron-right-icon-610' />
      </div>
      <div className='rectangle-710' />
      <div className='group-810'>
        <span className='span10'>10</span>
        <div className='ellipse10' />
      </div>
      <div className='group-910'>
        <span className='como-os-cuidados10'>
          COMO OS CUIDADOS PALIATIVOS
          <br />
          SERÃO REALIZADOS?
        </span>
        <button className='rectangle-a10' />
      </div>
      <button className='rectangle-b10' />
      <button className='rectangle-c10' />
      <div className='physical-dimension10'>
        <span className='physical-dimension-d10'>
          Dimensão física
          <br />
        </span>
        <span className='physical-dimension-e10'>
          Relacionado ao corpo, saúde e bem estar físico. Todos os profissionais
          poderão ajudar no controle dos sintomas.
        </span>
      </div>
      <div className='emotional-dimension10'>
        <span className='emotional-dimension-f10'>
          Dimensão emocional
          <br />
        </span>
        <span className='emotional-dimension-1010'>
          Relacionado a mente. Psicólogos, psiquiatras e psicoterapeutas
          ajudarão no controle dos sintomas.
        </span>
      </div>
      <div className='rectangle-1110' />
      <div className='rectangle-1210' />
      <div className='social-family10'>
        <span className='social-family-1310'>
          Dimensão social e familiar
          <br />
        </span>
        <span className='social-family-1410'>
          Relacionado aos hábitos, valores, cultura e sociedade. Assistentes
          sociais e psicólogos ajudarão.
        </span>
      </div>
      <div className='spiritual10'>
        <span className='spiritual-1510'>
          Dimensão espiritual
          <br />
        </span>
        <span className='spiritual-1610'>
          Relacionado a busca pelo sagrado.
          <br />
          Padres, pastores e sacerdotes ajudarão.
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
