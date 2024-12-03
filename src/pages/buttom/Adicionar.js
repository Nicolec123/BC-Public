import styles from './Adicionar.module.css';

function Adicionar({ onAdd, title = "Adicionar", icone ="fas fa-plus" }) {
    // Botão de Adicionar com título dinâmico
    return (
        <button id={styles.adicionar} onClick={onAdd}>
            <i className={icone}></i> {title}
        </button>
    );
}

export default Adicionar;
