import React, { useState } from 'react';
import styles from './Empresa.module.css';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import ConfiguracoesPagEmpresa from './Config/ConfiguracoesPagEmpresa';
import CarrosselEmpresa from './layout/Carrossel/CarrosselEmpresa';
import TermosUso from './TermosUsoAceite/TermosUso';
import ComunicadosEmpresa from './Comunicados/Termos/ComunicadosEmpresa';
import CabeçarioEmpresa from './layout/CabeçarioEmpresa';
import Footer from './layout/Footer';

function Empresa() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <Header />
            <ConfiguracoesPagEmpresa />
            <CabeçarioEmpresa /> 
           
            <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />
          
            <CarrosselEmpresa isOpen={isMenuOpen} />
            <div className={styles.container}>
                <TermosUso isOpen={isMenuOpen} />
                <ComunicadosEmpresa isOpen={isMenuOpen} />
            </div>
            <Footer/>

        </div>
    );
}

export default Empresa;
