import React, { useState, useEffect } from 'react';
import styles from './HeaderSemEmpresa.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa'; // Ícones de sol e lua para alternar o tema

function HeaderSemEmpresa() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Verificar e aplicar o tema no carregamento da página
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.body.classList.toggle('dark', savedTheme === 'dark');
        }
    }, []);

    // Alternar o tema
    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.body.classList.toggle('dark', newMode); // Aplicando a classe 'dark' no body

        // Salvar a preferência do usuário no localStorage
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    const handleLogout = () => {
        // Adicionar a lógica de logout
        console.log('Usuário deslogado');
    };

    return (
        <header className={styles.header}>
            <div className={styles.infor}>
                <div className={styles.empresa}>
                </div>
                <p className={styles.admin}>Admin</p>
                <h4>Nome funcionário</h4>
                {/* Ícone de Logout */}
                <IconButton onClick={handleLogout} color="error">
                    <LogoutIcon />
                </IconButton>
                
                {/* Ícone de alternância de tema (sol/lua) */}
                <IconButton onClick={toggleTheme} color="default">
                    {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                </IconButton>
            </div>
        </header>
    );
}

export default HeaderSemEmpresa;
