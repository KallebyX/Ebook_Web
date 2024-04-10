import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import voltarImg from '../../assets/images/voltarp.png';
import avancarImg from '../../assets/images/avancar.png';

export default function PaginaDezeseis() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-quinze'); // Atualize esta rota conforme necessário
  };

  const avancarPagina = () => {
    navigate('/pagina-dezesete'); // Atualize esta rota conforme necessário
  };

  return (
    <div className='main-container16'>
      <div className='group16'>
        <div className='clipboard-copy16' />
        <div className='group-116'>
          <div className='group-216'>
            <button className='button16'>
              <span className='span16'>
                PRISÃO DE VENTRE E INCAPACIDADE PARA URINAR OU ESVAZIAR A BEXIGA
                POR COMPLETO
              </span>
              <div className='rectangle16' />
            </button>
            <span className='span-316'>
              Prisão de ventre é a presença de fezes secas ou endurecidas que
              levam a diminuição da evacuação já a retenção urinária é quando há
              presença de dificuldade para urinar espontaneamente.
            </span>
          </div>
        </div>
      </div>
      <button className='button-416'>
        <div className='rectangle-516' />
        <span className='cuidados16'>CUIDADOS</span>
      </button>
      <span className='observacoes16'>
        Observe a quantidade, consistência e cor das fezes; <br />
        Observe se há presença de sangue nas fezes ou urina; <br />
        Realize massagem na região abdominal de forma suave; <br />
        Tem dor ao urinar ou evacuar; <br />
        Apresenta diarreia ou perda das fezes; <br />
        Apoie seu familiar caso não tenha controle esfincteriano; <br />
        Observe se há presença de hemorroidas; <br />
        Aumente o consumo de alimentos rico em fibra (trigo, chia, frutas com
        casca) e líquidos; <br />
        Comunique a equipe de saúde sobre qualquer sintoma observado para que
        possa ser orientado e prescrito medicamentos corretamente.
      </span>
      <div className='group-616'>
        <div className='chevron-right16'>
          <div className='vector16' />
        </div>
        <div className='chevron-right-icon16' />
      </div>
      <div className='rectangle-716' />
      <div className='group-816'>
        <span className='number-1616'>16</span>
        <div className='ellipse16' />
      </div>
      <div className='group-916'>
        <span className='control-symptoms16'>CONTROLE DOS SINTOMAS</span>
        <div className='rectangle-a16' />
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
