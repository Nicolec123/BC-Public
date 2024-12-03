import React, { useState } from 'react';
import Form from '../pages/layout/Forms/Form';
import Menu from './layout/Menu';
import HeaderSemEmpresa from './layout/header/HeaderSemEmpresa';
import Footer from './layout/Footer';
import CarrosselInicio from '../pages/layout/Carrossel/CarrosselInicio';
import styles from './Inicio.module.css';


function Inicio(onSearch,isOpen) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <HeaderSemEmpresa />
            <Menu toggleMenu={toggleMenu} isOpen={isMenuOpen} /> 
            <div className={`${styles.container} ${isOpen ? styles.small : ''}`}>

            <Form />
            <div>
            <button 
            id={styles.searchButtonInicio } 
            onClick={onSearch}
        >
            <i className="fas fa-search"></i> Pesquisar
        </button>
            </div>
            <CarrosselInicio/>
<div className={styles.Inicio_conatiner_bc_avisos_eventos}>
         <div className={styles.bc_avisos_eventos}>
            <h3 className={styles.paragrafo_bc_avisos_eventos}><a href="../CalendarioInicio.js">Calendário</a></h3>
            <h3 className={styles.paragrafo_bc_avisos_eventos}><a href="./layout/CalendarioInicio.js">FAQ</a></h3>
            <h3 className={styles.paragrafo_bc_avisos_eventos}><a href="./layout/CalendarioInicio.js">Hierarquias</a></h3>
         </div>

         <div className={styles.bc_avisos_eventos1}>
            <h3 className={styles.paragrafo_bc_avisos_eventos}><a href="./layout/CalendarioInicio.module.css">Eventos</a></h3>
            <h3 className={styles.paragrafo_bc_avisos_eventos}><a href="fsd">Banco de Dados!</a></h3>{/*Fazer api ou alguma coisa para quye tem acesso porder acessar o banco de dados ao clicar no link ou algo assim que for gerado */}
            <h3 className={styles.paragrafo_bc_avisos_eventos}><a href="./layout/CalendarioInicio.module.css">Slack</a></h3>{/*Criar um caminho para o slack */}
         </div>
         </div>
            </div>
            <Footer />
        </div>
    );
}

export default Inicio;
