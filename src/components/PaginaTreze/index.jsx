import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaTreze() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-doze'); // Atualize esta rota conforme necessário
  };

  const avancarPagina = () => {
    navigate('/pagina-quatorze'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container13'>
      <span className='estagio-evolucao13'>
        Para cada estágio da doença e evolução é possível que os profissionais
        realizem a indicação e controle dos sintomas a depender do objetivo e
        planejamento de cuidado que paciente e família tenham realizado em
        conjunto com equipe de saúde. O controle dos sintomas leva em
        consideração a garantia da qualidade de vida minimizando o sofrimento.
      </span>
      <span className='sintomas-tratamento13'>
        Dentre os vários sintomas que podem vir a surgir durante o tratamento
        vale ressaltar a dor, febre, dificuldade para respirar, prisão de ventre
        e incapacidade para urinar ou esvaziar a bexiga por completo e falta de
        apetite. Estes sintomas poderão surgir durante a internação hospitalar e
        no seu lar, para isso, vamos atentar para as dicas:
      </span>
      <span className='cuidados-dor13'>
        É preciso acreditar na dor referida pelo seu filho(a) para que assim
        sejam realizados cuidados que amenizem tal sofrimento; <br />
        Mantenha o ambiente calmo, tranquilo; <br />
        Observe sintomas que venham a surgir junto com a dor; <br />
        Observe se há estímulos que favorecem o surgimento do sintoma e
        evite-os; <br />
        Use medicamentos de orientação e prescrição do médico que o acompanha;
      </span>
      <div className='group13'>
        <div className='duck-icon-chevron-right13'>
          <div className='vector13' />
        </div>
        <div className='duck-icon-chevron-right-113' />
      </div>
      <div className='rectangle13' />
      <div className='group-213'>
        <span className='span13'>13</span>
        <div className='div-ellipse13' />
      </div>
      <div className='div-group13'>
        <span className='span-controle-dos-sintomas13'>
          CONTROLE DOS SINTOMAS
        </span>
        <button className='button-rectangle13' />
      </div>
      <div className='prancheta-copia13' />
      <div className='group-313'>
        <div className='flex-row-e13'>
          <button className='rectangle-413' />
          <span className='dor13'>DOR</span>
        </div>
        <span className='unpleasant-emotional-sensation13'>
          A dor é uma sensação emocional desagradável, é pessoal pois sua
          intensidade dependerá da sensibilidade de cada um. A dor se não
          tratada pode levar a outros sintomas como fadiga, depressão, medo,
          ansiedade e falta de esperança.
        </span>
      </div>
      <button className='rectangle-513' />
      <span className='care13'>CUIDADOS</span>

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
