import styles from './Form.Tabelas.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function FormTabelas({ onSearch }) {
    return (
        <div className={styles.formContainer}>
            <form onSubmit={onSearch}>
                <input type="text" placeholder="CPF-Nome do Funcionário-Matrícula" className={styles.inputField} />
                <button type="submit" className={styles.submitButton}>
                    <FontAwesomeIcon icon={faSearch} />Pesquisar
                </button>
            </form>
        </div>
    );
}

export default FormTabelas;