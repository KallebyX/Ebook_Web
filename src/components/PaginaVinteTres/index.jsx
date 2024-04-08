import React from 'react';
import './index.css';

export default function PaginaVinteTres() {
  return (
    <div className='main-container'>
      <div className='group'>
        <div className='rectangle' />
        <span className='cuidados'>CUIDADOS</span>
      </div>
      <span className='alimentos'>
        É importante mudar a consistênsia da dieta a fim de amenizar a sensação
        de dor. Prefira alimentos pastosos ou liquidificados; <br />
        Diminua o sal ao preparar os alimentos; <br />
        Evite alimentos secos e duros; <br />
        Evite alimentos ácidos que possam prejudicar a mucosa da boca; <br />
        Prefira alimentos em temperatura ambiente ou frio; <br />
        Mastigue bem os alimentos a fim de evitar o engasgo.
      </span>
      <div className='group-1'>
        <div className='chevron-right-icon'>
          <div className='vector' />
        </div>
        <div className='chevron-right-icon-2' />
      </div>
      <div className='rectangle-3' />
      <div className='group-4'>
        <span className='span'>23</span>
        <div className='ellipse' />
      </div>
      <div className='group-5'>
        <span className='control-symptoms'>CONTROLE DOS SINTOMAS</span>
        <button className='rectangle-button' />
      </div>
      <div className='copied-prancheta' />
      <div className='group-6'>
        <button className='rectangle-button-7' />
        <span className='mucosite-symptoms'>
          A mucosite é uma inflamação na região interna da boca que pode levar a
          feridas dolorosas e a odinofagia é a sensação de dor ao engolir.
          <br />
          Estes sintomas são comuns em tratamentos quimioterápicos e
          radioterápicos.
        </span>
      </div>
      <span className='mucosite-odinofagia'>
        MUCOSITE (FERIDAS NA BOCA) <br />E ODINOFAGIA <br />
        (DOR PARA ENGOLIR)
      </span>
    </div>
  );
}
