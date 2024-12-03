import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link do react-router-dom
import styles from './MenuEmpresa.module.css';
import CabeçarioEmpresa from './CabeçarioEmpresa';
import Buttom from '../buttom/Buttom'
        

function Menu({ toggleMenu, isOpen }) {
    return (
        <>
            <div className={styles.container_menu}>
                <Buttom className={styles.backButton} />
                <button onClick={toggleMenu} className={styles.menuButton}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
                    {isOpen && (
                        <ul>
                            <li><Link to="/Empresa_s_Pedido">Empresa Sem Pedido</Link></li>
                            <li><Link to="/Contato">Contato</Link></li>
                            <li><Link to="/Editar_Banner">Editar Banner</Link></li>
                            <li><Link to="/Relatorio_Produtos_Recorrentes">Relatório Produtos Recorrentes</Link></li>
                            <li><Link to="/Importar_ClienteEmpresa">Importar Cliente Empresa</Link></li>
                            <li><Link to="/Ficha_Tecnica_Emissores">Ficha Técnica Emissores</Link></li>
                            <li><Link to="/Usuarios">Usuários</Link></li>
                            <li><Link to="/Termo_Sistema">Termo Sistema</Link></li>
                            <li><Link to="/Termos_Log">Termos Log</Link></li>
                            <li><Link to="/Chamados">Chamados</Link></li>
                            <li><Link to="/Beneficios">Benefícios</Link></li>
                            <li><Link to="/Roteirizacao">Roteirização</Link></li>
                            <li><Link to="/Analise_Recargas">Análise Recargas</Link></li>
                            <li><Link to="/Itens_Solicitados">Itens Solicitados</Link></li>
                            <li><Link to="/Controle_Logistico">Controle Logístico</Link></li>
                            <li><Link to="/GSL_Itens_Entrega">GSL - Itens Entrega</Link></li>
                            <li><Link to="/Fornecedores">Fornecedores</Link></li>
                            <li><Link to="/Financeiro">Financeiro</Link></li>
                            <li><Link to="/Pedidos">Pedidos</Link></li>
                            <li><Link to="/Controle_de_Pedidos">Controle de Pedidos</Link></li>
                            <li><Link to="/Monitor">Monitor</Link></li>
                            <li><Link to="/Clientes_Online">Clientes Online</Link></li>
                            <li><Link to="/Cadastro_Empresa">Cadastro Empresa</Link></li>
                            <li><Link to="/Adm_IKE">Adm IKE</Link></li>
                            <li><Link to="/Monitor_de_recargas">Monitor de Recargas</Link></li>
                        </ul>
                    )}
                </div>
            </div>
                    </>
    );
}

export default Menu;
