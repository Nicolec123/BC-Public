import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MenuEmpresa from '../layout/MenuEmpresa';
import CabeçarioEmpresa2 from '../layout/cabeçarios/CabeçarioEmpresa2';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import styles from './CalendarioInicio.module.css';

function CalendarioIncio() {
    const [date, setDate] = useState(new Date());
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <Header />
            <MenuEmpresa isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <CabeçarioEmpresa2 />
            <div className={styles.calendarioContainer}>
                <h1>Calendário de Início</h1>
                <p>Este é o calendário da farra!</p>
                <Calendar
                    onChange={setDate}
                    value={date}
                />
                <p>Data selecionada: {date.toDateString()}</p>
            </div>
            <Footer />
        </>
    );
}

export default CalendarioIncio;