import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PolygonComponent = () => {
  const [selectedProfile, setSelectedProfile] = useState('');
  const [showLoginContainer, setShowLoginContainer] = useState(false); // Estado para mostrar a tela de login
  const navigate = useNavigate();

  // Função para lidar com a seleção do perfil
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    setShowLoginContainer(true); // Mostra o container de login após selecionar o perfil
  };

  // Função para submissão do login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate('/Inicio'); // Redireciona após login
  };

  return (
    <>

      <div className="polygon-container">
        <div className="polygon active">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
          <div className="line line4"></div>
          <div className="line line5"></div>
          <div className="line line6"></div>

          {!showLoginContainer ? (
            // Tela de seleção de perfil
            <div id="profile-selection">
              <h2>Sistema Benefício Certo</h2>
              <h2>Escolha seu perfil de Homologação</h2>
              <div className="flex-box">
                <div className="profile" onClick={() => handleProfileClick('Cliente')}>Cliente</div>
                <div className="profile" onClick={() => handleProfileClick('Colaborador')}>Colaborador</div>
                <div className="profile" onClick={() => handleProfileClick('L’Oréal')}>L’Oréal</div>
              </div>
            </div>
          ) : (
            <div className="losangulo">
              <div id="loginContainer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/img/imagem2-sem-fundo.jpeg.png" alt="Logo" className="logo" />
                <h2>{selectedProfile}</h2>
                <form id="loginForm" onSubmit={handleLoginSubmit}>
                  <div className="user-icon">
                    <FaUser size={30} />
                    <FaLock className="lock-icon" size={22} />
                  </div>
                  <input type="text" id="username" placeholder="Usuário" required />
                  <input type="password" id="password" placeholder="Senha" required />
                  <div className="flex-box-button">
                    <button type="submit">Login</button>
                    <button type="button" onClick={() => setShowLoginContainer(false)}>Voltar</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PolygonComponent;
