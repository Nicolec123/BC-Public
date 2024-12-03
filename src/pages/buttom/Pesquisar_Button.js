import React from 'react';
import styles from './Pesquisar_Button.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function PesquisarButton({ onSearch, className }) {
    return (
        <button 
            id={styles.searchButton} 
            onClick={onSearch}
            className={className}
        >
            <i className="fas fa-search"></i> Pesquisar
        </button>
    );
}

export default PesquisarButton;
