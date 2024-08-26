import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaUm from '../components/PaginaUm'; // Caminho para o seu componente PaginaUm
import PaginaNova from '../components/PaginaNova'; // Caminho para o seu componente PaginaNova

import PaginaDois from '../components/PaginaDois'; // Caminho para o seu componente PaginaDois
import PaginaTres from '../components/PaginaTres'; // Caminho para o seu componente PaginaTres
import PaginaQuatro from '../components/PaginaQuatro'; // Caminho para o seu componente PaginaQuatro
import PaginaCinco from '../components/PaginaCinco'; // Caminho para o seu componente PaginaCinco
import PaginaSeis from '../components/PaginaSeis'; // Caminho para o seu componente PaginaSeis
import PaginaSete from '../components/PaginaSete'; // Caminho para o seu componente PaginaSete
import PaginaOito from '../components/PaginaOito'; // Caminho para o seu componente PaginaOito
import PaginaNove from '../components/PaginaNove'; // Caminho para o seu componente PaginaNove
import PaginaDez from '../components/PaginaDez'; // Caminho para o seu componente PaginaDez
import PaginaOnze from '../components/PaginaOnze'; // Caminho para o seu componente PaginaOnze
import PaginaDoze from '../components/PaginaDoze'; // Caminho para o seu componente PaginaDoze
import PaginaTreze from '../components/PaginaTreze'; // Caminho para o seu componente PaginaTreze
import PaginaQuatorze from '../components/PaginaQuatorze'; // Caminho para o seu componente PaginaQuatorze
import PaginaQuinze from '../components/PaginaQuinze'; // Caminho para o seu componente PaginaQuinze
import PaginaDezeseis from '../components/PaginaDezeseis'; // Caminho para o seu componente PaginaDezesseis
import PaginaDezesete from '../components/PaginaDezesete'; // Caminho para o seu componente PaginaDezessete
import PaginaDezoito from '../components/PaginaDezoito'; // Caminho para o seu componente PaginaDezoito
import PaginaDezenove from '../components/PaginaDezenove'; // Caminho para o seu componente PaginaDezenove
import PaginaVinte from '../components/PaginaVinte'; // Caminho para o seu componente PaginaVinte
import PaginaVinteUM from '../components/PaginaVinteUM'; // Caminho para o seu componente PaginaVinteUm
import PaginaVinteDois from '../components/PaginaVinteDois'; // Caminho para o seu componente PaginaVinteDois
import PaginaVinteTres from '../components/PaginaVinteTres'; // Caminho para o seu componente PaginaVinteTres
import PagineVinteQuatro from '../components/PagineVinteQuatro'; // Caminho para o seu componente PaginaVinteQuatro
import PaginaVinteCinco from '../components/PaginaVinteCinco'; // Caminho para o seu componente PaginaVinteCinco
import PaginaVinteSeis from '../components/PaginaVinteSeis'; // Caminho para o seu componente PaginaVinteSeis
import PaginaVinteSete from '../components/PaginaVinteSete'; // Caminho para o seu componente PaginaVinteSete



function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<PaginaUm />} />
      <Route path="/pagina-um" element={<PaginaUm />} />
      <Route path="/pagina-nova" element={<PaginaNova />} />
      <Route path="/pagina-dois" element={<PaginaDois />} />
      <Route path="/pagina-tres" element={<PaginaTres />} />
        <Route path="/pagina-quatro" element={<PaginaQuatro />} />
        <Route path="/pagina-cinco" element={<PaginaCinco />} />
        <Route path="/pagina-seis" element={<PaginaSeis />} />
        <Route path="/pagina-sete" element={<PaginaSete />} />
        <Route path="/pagina-oito" element={<PaginaOito />} />
        <Route path="/pagina-nove" element={<PaginaNove />} />
        <Route path="/pagina-dez" element={<PaginaDez />} />
        <Route path="/pagina-onze" element={<PaginaOnze />} />
        <Route path="/pagina-doze" element={<PaginaDoze />} />
        <Route path="/pagina-treze" element={<PaginaTreze />} />
        <Route path="/pagina-quatorze" element={<PaginaQuatorze />} />
        <Route path="/pagina-quinze" element={<PaginaQuinze />} />
        <Route path="/pagina-dezeseis" element={<PaginaDezeseis />} />
        <Route path="/pagina-dezesete" element={<PaginaDezesete />} />
        <Route path="/pagina-dezoito" element={<PaginaDezoito />} />
        <Route path="/pagina-dezenove" element={<PaginaDezenove />} />
        <Route path="/pagina-vinte" element={<PaginaVinte />} />
        <Route path="/pagina-vinte-um" element={<PaginaVinteUM />} />
        <Route path="/pagina-vinte-dois" element={<PaginaVinteDois />} />
        <Route path="/pagina-vinte-tres" element={<PaginaVinteTres />} />
        <Route path="/pagine-vinte-quatro" element={<PagineVinteQuatro />} />
        <Route path="/pagina-vinte-cinco" element={<PaginaVinteCinco />} />
        <Route path="/pagina-vinte-seis" element={<PaginaVinteSeis />} />
        <Route path="/pagina-vinte-sete" element={<PaginaVinteSete />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
}

export default Rotas;
