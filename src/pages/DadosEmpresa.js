import styles from './DadosEmpresa.module.css'
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import React, { useState } from 'react';
import tituloBonito from './Contatos.module.css';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import Footer from './layout/Footer';

function DadosEmpresa(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
        <Header />
        <CabeçarioEmpresa2 /> 

        <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} /> 
        <div className={`${styles.container_table} ${isMenuOpen ? styles.smallTable2 : ''}`}>
        <h2 className={tituloBonito.contatos_h2}>Visão Geral da Empresa</h2>

        <div className={styles.menuDados}>
           <ul className={styles.nav_tabs} id='tabEmpresa'>
             <li>Dados Empresa</li>
             <li>Dados Operacionais</li>
             <li>Resumo</li>
             <li>Receita Federal</li>
             <li>Inconsistências</li>
             <li>Funcionários sem Beneficios</li>
             <li>Recargas Pendentes</li>
             <li>Saldo em Cartões</li>
           </ul>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default DadosEmpresa;