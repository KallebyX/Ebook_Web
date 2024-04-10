import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';

export default function PaginaVinteSete() {
  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/pagina-vinte-seis');
  };

  const avancarPagina = () => {
    navigate('/');
  };

  return (
    <div className='main-container27'>
      <div className='group27'>
        <div className='rectangle27' />
        <span className='maria-perez-soares-dalessandro27'>
          Maria Perez Soares D’Alessandro; et al. Manual de cuidados paliativos.
          São Paulo: Hospital Sírio-Libanês,2023. E-book. Disponível em:
          file:///C:/Users/hello/Downloads/manual-paliativos_HSL%20Digital_Set23%20(3).pdf.
          Acesso em 12/11/2023
        </span>
      </div>
      <div className='group-127'>
        <div className='rectangle-227' />
        <span className='opas-organizacao-pan-americana27'>
          OPAS. Organização Pan-Americana de Saúde. Série Qualidade de Vida para
          Crianças com Câncer. Módulos em Cuidados Paliativos Pediátricos. Mód.
          6, pg 1-6. OPAS/NMH/NV/cvn6/21-0040. Disponível em
          https://iris.paho.org/bitstream/handle/10665.2/56098/OPASNMHNVcvn6210040_por.pdf?sequence=1&isAllowed=y
          Acesso em 10/11/2023
        </span>
      </div>
      <div className='group-327'>
        <div className='rectangle-427' />
        <span className='sociedade-brasileira-de-pediatria27'>
          Sociedade Brasileira de Pediatria. Cuidados Paliativos Pediátricos: O
          que são e qual sua importância? Cuidando das crianças em todos os
          momentos. Departamento científico de medicina da dor e cuidados
          paliativos. São Paulo. Nº01 fev 2017. Disponível em
          https://www.sbp.com.br/fileadmin/user_upload/2017/03/Medicina-da-Dor-Cuidados-Paliativos.pdf.
          Acesso em 10/11/2023
        </span>
      </div>
      <div className='group-527'>
        <div className='rectangle-627' />
        <span className='brasil-ministerio-saude27'>
          Brasil. Ministério da Saúde. Instituto Nacional de Câncer - INCA.
          Cuidados Paliativos Pediátricos. Atualizado em 18/07/2022 às 09h17.
          Disponível em
          https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/infantojuvenil/especificos/cuidados-paliativos-pediatricos
          Acesso em 12/11/2023
        </span>
      </div>
      <div className='group-727'>
        <div className='rectangle-827' />
        <span className='opa-health27'><a href=""></a>
          OPAS. Organização Pan-Americana de Saúde. Série Qualidade de Vida para
          Crianças com Câncer. Módulos em Cuidados Paliativos Pediátricos. Mód.
          5, pg 1-5. OPAS/NMH/NV/cvn5/21-0040. Disponível em:
          https://iris.paho.org/bitstream/handle/10665.2/56097/OPASNMHNVcvn5210040_por.pdf?sequence=1&isAllowed=y.
          Acesso em 10/11/2023
        </span>
      </div>
      <div className='group-927'>
        <div className='chevron-right-icon27' />
      </div>
      <div className='rectangle-a27' />
      <div className='group-b'>
        <span className='number-2727'>27</span>
        <div className='ellipse' />
      </div>
      <span className='references-c27'>REFERÊNCIAS</span>
      <button className='rectangle-d' />
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
