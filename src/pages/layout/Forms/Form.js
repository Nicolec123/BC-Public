import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';

function Form() {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const value = event.target.value;
        if (value === "empresa") {
            navigate('/empresa');
        }
        // Adicionar mais condições para outras opções
    };

    return (
        <div className={styles.form_busca}>
            <div className={styles.form_container}>
                <form>
                    <input name="busca" type="text" placeholder="Busca..." />
                </form>
                <select name="filtro" className={styles.form_select} onChange={handleSelectChange}>
                    <option value="">Selecione</option>
                    <option value="empresa">Empresa</option>
                    <option value="funcionario">Funcionário</option>
                    <option value="pedido">Pedido</option>
                    <option value="pedidos_do_dia">Pedidos do dia</option>
                </select>
            </div>
        </div>
    );
}

export default Form;
