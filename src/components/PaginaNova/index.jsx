import React from 'react';
import { useNavigate } from 'react-router-dom';
import avancarImg from '../../assets/images/avancar.png';
import voltarImg from '../../assets/images/voltarp.png';
import fichaImg from '../../assets/images/ficha.png'; // Importando a imagem diretamente

export default function PaginaNova() {
  const navigate = useNavigate();

  // Função para navegar para a próxima página
  const avancarPagina = () => {
    navigate('/pagina-dois'); // Atualize esta rota conforme necessário
  };

  // Função para voltar para a página anterior
  const voltarPagina = () => {
    navigate('/pagina-um'); // Atualize esta rota conforme necessário
  };

  return (
    <div className="main-container3" style={styles.mainContainer}>
      <div className="boxxxxx" style={styles.boxxxxx}>
        <div className="ficha-catalogr-fica" style={styles.fichaCatalogrFica}>
          <img className="image-1" src={fichaImg} style={styles.image1} alt="Imagem" />
        </div>
      </div>

      <div className="navigation" style={styles.navigation}>
        <img
          src={voltarImg}
          alt="Voltar"
          onClick={voltarPagina}
          style={styles.navButton}
        />
        <img
          src={avancarImg}
          alt="Avançar"
          onClick={avancarPagina}
          style={styles.navButton}
        />
      </div>
    </div>
  );
}

// Estilos para a página e os elementos
const styles = {
  mainContainer: {
    position: 'relative',
    width: '700px',
    height: '1000px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', // Alinha o conteúdo na parte inferior
    border: '1px solid black', // Borda para depuração
  },
  boxxxxx: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Centraliza verticalmente o conteúdo dentro do box
    width: '100%',
    marginBottom: '60px', // Adiciona espaço acima dos botões
  },
  fichaCatalogrFica: {
    background: '#ffffff',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  image1: {
    width: '638px',
    height: 'auto',
    objectFit: 'cover',
  },
  navigation: {
    width: '640px',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
  },
  navButton: {
    cursor: 'pointer',
    width: '45px',
    height: '45px',
  },
};