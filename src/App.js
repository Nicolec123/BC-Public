import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PolygonComponent from './components/Login';
import Menu from './pages/layout/Menu'; 
import Header from './pages/layout/Header';
import Inicio from './pages/Inicio';
import Empresa from './pages/Empresa';
import DadosEmpresa from './pages/DadosEmpresa';
import PedidosEmpresa from './pages/PedidosEmpresa';
import ChamadosEmpresa from '../src/pages/Chamados/ChamadosEmpresa';
import ChamadosAdicionar from '../src/pages/Chamados/ChamadosAdicionar';
import Roteirizacao from './pages/Roteirizacao';
import Contatos from './pages/Contatos';
import EmpresaContaCorrente from './pages/EmpresaContaCorrente';
import FuncionarioEmpresa from './pages/FuncionarioEmpresa';
import DepartamentoEmpresa from './pages/DepartamentoEmpresa';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importando ícones
import { useEffect, useState } from 'react';
import CalendarioIncio from './pages/layout/CalendarioInicio'
import HoldingEmpresa from './pages/HoldingEmpresa'
import ProdutosRecorrentes from './pages/ProdutosRecorrentes'
import FichaTecnicaEmisores from './pages/FichaTecnicaEmissores'
import RegistroEmpresa from './pages/RegistroEmpresa'
import GruposEmpresa from './pages/GruposEmpresa'
import EndereçoEmpresa from './pages/EndereçoEmpresa'
import PeríodosEmpresa from './pages/PeríodosEmpresa'
import ImportacaoExportacao from './pages/Importacao/ImportacaoExportacao'
import Usuarios from './pages/Usuarios'
import CondicoesComerciais from './pages/CondicoesComerciais'


// Componente Layout para rotas com Menu e Footer
function Layout({ children, toggleTheme, isDarkMode }) {
  return (
    <>
      <Menu isDarkMode={isDarkMode} />
      {children}
    </>
  );
}

function App() {
  // Recuperar o tema do localStorage ou definir o padrão como 'light'
  const savedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'dark');

  // Alternar o tema entre claro e escuro
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Aplicar o tema no body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para a página inicial (Polygon) sem Menu e Footer */}
        <Route path="/" element={<PolygonComponent />} />

        {/* Rota para a página de início com Menu e Footer */}
        <Route path="/inicio" element={<Inicio />} />

        {/* Rota para a página "Empresa" com Header e Menu */}
        <Route path="/empresa" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><Empresa /></Layout>} />

        <Route path="/DadosEmpresa" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><DadosEmpresa /></Layout>} />

        <Route path="/PedidosEmpresa" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><PedidosEmpresa /></Layout>} />

        <Route path="/ChamadosEmpresa" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><ChamadosEmpresa /></Layout>} />

        <Route path="/ChamadosAdicionar" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><ChamadosAdicionar /></Layout>} />

        <Route path="/Roteirizacao" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><Roteirizacao /></Layout>} />
        
        <Route path="/Contatos" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><Contatos /></Layout>} />

        <Route path="/Empresa_Conta_Corrente" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><EmpresaContaCorrente /></Layout>} />

        <Route path="/Funcionarios" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><FuncionarioEmpresa /></Layout>} />
        
        <Route path="/Departamentos" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><DepartamentoEmpresa /></Layout>} />

        
        <Route path="/CalendarioIncio" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><CalendarioIncio /></Layout>} />
        
        <Route path="/HoldingEmpresa" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><HoldingEmpresa /></Layout>} />
        
        <Route path="/ProdutosRecorrentes" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><ProdutosRecorrentes /></Layout>} />
        
        <Route path="/FichaTecnicaEmisores" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><FichaTecnicaEmisores /></Layout>} />
        
        <Route path="/RegistroEmpresa" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><RegistroEmpresa /></Layout>} />
        
        <Route path="/GruposEmpresa" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><GruposEmpresa /></Layout>} />
        
        <Route path="/EndereçoEmpresa" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><EndereçoEmpresa /></Layout>} />
        
        <Route path="/PeríodosEmpresa" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><PeríodosEmpresa /></Layout>} />
        
        <Route path="/ImportacaoExportacao" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><ImportacaoExportacao /></Layout>} />
        
        <Route path="/Usuarios" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><Usuarios /></Layout>} />
        
        <Route path="/CondicoesComerciais" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}><CondicoesComerciais /></Layout>} />

        {/* Rota com Layout, Menu, e Header, aplicando tema */}
        <Route path="/*" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}>
          <Route path="*" element={<div>Page Not Found</div>} /> {/* Rota padrão para "Página Não Encontrada" */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
