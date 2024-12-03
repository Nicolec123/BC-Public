import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuEmpresa.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Buttom from '../buttom/Buttom';

function MenuEmpresa({ toggleMenu, isOpen }) {
    return (
        <div className={styles.container_menu}>
            <Buttom className={styles.backButton} />
            <button onClick={toggleMenu} className={styles.menuButton}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
                {isOpen && (
                    <ul>
                        <li><Link to="/Empresa">Empresa</Link></li>
                        <li><Link to="/DadosEmpresa">Dados Empresa</Link></li>
                        <li><Link to="/HoldingEmpresa">Holding</Link></li>
                        <li><Link to="/ProdutosRecorrentes">Produtos Recorrentes</Link></li>
                        <li><Link to="/Empresa_Conta_Corrente">Empresa Conta Corrente</Link></li>
                        <li><Link to="/FichaTecnicaEmisores">Ficha Técnica Emissor</Link></li>
                        <li><Link to="/ChamadosEmpresa">Chamados</Link></li>
                        <li><Link to="/RegistroEmpresa">Registros</Link></li>
                        <li><Link to="/Contatos">Contatos</Link></li>
                        <li><Link to="/GruposEmpresa">Grupos</Link></li>
                        <li><Link to="/CondicoesComerciais">Cond.Comerciais</Link></li>
                        <li><Link to="/EndereçoEmpresa">Endereços</Link></li>
                        <li><Link to="/Departamentos">Departamentos</Link></li>
                        <li><Link to="/PeríodosEmpresa">Períodos</Link></li>
                        <li><Link to="/Funcionarios">Funcionários</Link></li>
                        <li><Link to="/Roteirizacao">Roteirizacão</Link></li>
                        <li><Link to="/PedidosEmpresa">Pedidos</Link></li>
                        <li><Link to="/ImportacaoExportacao">Importação/Exportação</Link></li>
                        <li><Link to="/Usuarios">Usuários</Link></li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default MenuEmpresa;
