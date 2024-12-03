import React from 'react';
import styles from './MostrarRegistros.module.css'; // Substitua pelo caminho correto do seu arquivo CSS

const MostrarRegistros = ({ onChange,}) => {
    return (
        <div className={styles.FichaTecnicaEmissores_label_left}>
            <label className={styles.flex_box_filtros_label}
           
            >

                <p className={styles.mostrar_text}>Mostrar</p>
                <select 
                    className={styles.form_control_input_sm} 
                    name="Fornecedores_lenght" 
                    aria-controls="tb1Fornecedores"
                    onChange={onChange}
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="Todos">Todos</option>
                </select>
                <p className={styles.mostrar_text}>Registros</p>
            </label>
        </div>
    );
};

export default MostrarRegistros;