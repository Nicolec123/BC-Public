import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import tituloBonito from './Contatos.module.css';
import Footer from './layout/Footer';
import ScrollToTop from '../pages/layout/ScrollToTop';
import styles from './FuncionarioEmpresa.module.css';
import PedidosEmpresa from './PedidosEmpresa.module.css';
import Adicionar from '../pages/buttom/Adicionar';
import FormTabelas from '../pages/layout/Forms/FormTabelas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faToggleOn, faToggleOff,faHandPointer, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Pagination from './layout/PaginacaoTable/PaginacaoTable'
import Usuarios from './Usuarios.module.css';
import EditLinkIcon from './Icon/FaEdit';

function FuncionarioEmpresa() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [funcionarios, setFuncionarios] = useState([]);
    const [filtroStatus, setFiltroStatus] = useState(''); // Para o filtro de status

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [filtersVisible, setFiltersVisible] = useState(false);

    const toggleFilters = () => {
        setFiltersVisible(!filtersVisible);
    };

    useEffect(() => {
        // Simulação de uma chamada de API para obter os dados dos funcionários
        const data = [
            { id: 1, editar: '', nome: 'Ana Amanada Cardoso', CPF: '932.429.995-68', status: 'ativo', departamento: 'Atendimento', funcao: 'Atendente' },
            { id: 2, editar: '', nome: 'Carlos Henrique  RIBEIRO',CPF: '932.429.995-68', status: 'inativo', departamento: 'Financeiro', funcao: 'Analista' },
            { id: 3,  editar: '',nome: 'Julia Santos FATIMA',CPF: '932.429.995-68', status: 'ativo', departamento: 'RH', funcao: 'Gerente' },
            { id: 4, editar: '', nome: 'Pedro Lemos MAYA ',CPF: '932.429.995-68', status: 'demitido', departamento: 'Atendimento', funcao: 'Atendente' },
            { id: 5, editar: '', nome: 'Pedro Lemos MAYA ',CPF: '932.429.995-68', status: 'demitido', departamento: 'Atendimento', funcao: 'Atendente' },
            { id: 6, editar: '', nome: 'Pedro Lemos MAYA ',CPF: '932.429.995-68', status: 'demitido', departamento: 'Atendimento', funcao: 'Atendente' },
            { id: 7, editar: '', nome: 'Pedro Lemos MAYA ',CPF: '932.429.995-68', status: 'demitido', departamento: 'Atendimento', funcao: 'Atendente' },
            { id: 8, editar: '', nome: 'Pedro Lemos MAYA ',CPF: '932.429.995-68', status: 'demitido', departamento: 'Atendimento', funcao: 'Atendente' },
            // MUDAR ISSO PARA UMA API QUE PEGUE OS DADOS REAIS !
        ];
        setFuncionarios(data);
    }, []);

    // Contagem por status
    const totalFuncionarios = funcionarios.length;
    const totalAtivos = funcionarios.filter(f => f.status === 'ativo').length;
    const totalInativos = funcionarios.filter(f => f.status === 'inativo').length;
    const totalDemitidos = funcionarios.filter(f => f.status === 'demitido').length;

    // Função para filtrar a tabela com base no status
    const handleFiltrarStatus = (status) => {
        setFiltroStatus(status);
    };

    // Filtra a lista de funcionários conforme o status selecionado
    const funcionariosFiltrados = filtroStatus
        ? funcionarios.filter(f => f.status === filtroStatus)
        : funcionarios;


        
    return (
        <>
            <Header />
            <CabeçarioEmpresa2 />
            <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />
            <h2 className={tituloBonito.contatos_h2}>Funcionários</h2>

            {/* Botões de Status com Contagem */}
            <div className={styles.statusButtons}>
                <button onClick={() => handleFiltrarStatus('')}>Todos ({totalFuncionarios})</button>
                <button onClick={() => handleFiltrarStatus('ativo')}>Ativos ({totalAtivos})</button>
                <button onClick={() => handleFiltrarStatus('inativo')}>Inativos ({totalInativos})</button>
                <button onClick={() => handleFiltrarStatus('demitido')}>Demitidos ({totalDemitidos})</button>
            </div>

            <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
            <div className={Usuarios.flex_button_user}>
                <Adicionar />
                <MostrarRegistros/>
                </div>
                <FormTabelas />
                <div className={styles.container_funcionarios}>
                    <div className={styles.actions}>
                        <button className={styles.actionButton}>
                            <FontAwesomeIcon icon={faFileExcel} /> Exportar para Excel
                        </button>
                       
                        <button className={styles.actionButton}>
                    <FontAwesomeIcon icon={faHandPointer} /> Opção manual de benefício
                </button>
                <button className={styles.actionButton}>
                    <FontAwesomeIcon icon={faFileAlt} /> Relatório de Cadastro Completo
                </button>
                    </div>
                    <div className={styles.filters}>
                        <div className={styles.filterItem}>Funcionários:</div>
                        <div className={styles.filterItem}>
                            Ativos Todos: <FontAwesomeIcon icon={faToggleOn} />
                        </div>
                        <div className={styles.filterItem}>
                            Inativos Todos: <FontAwesomeIcon icon={faToggleOff} />
                        </div>
    
                        <div className={styles.filters}>
    <div className={styles.filterItem}>
        <select id="batchChanges" className={styles.selectField} name="filtro">
        <option value="">Alterações em lote</option>
            <option value="1">Período</option>
            <option value="2">Departamento</option>
            <option value="3">Função</option>
            <option value="4">Endereço</option>
            <option value="5">Status</option>
        </select>
    </div>
</div>

                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Editar</th>
                                <th>Matrícula</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Departamento</th>
                                <th>Função</th>
                                <th>Status</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                            {funcionariosFiltrados.map((funcionario) => (
                                <tr key={funcionario.id}>
                <td><EditLinkIcon /> {funcionario.editar}</td>
                <td>{funcionario.id}</td>
                                    <td>{funcionario.nome}</td>
                                    <td>{funcionario.CPF}</td>
                                    <td>{funcionario.departamento}</td>
                                    <td>{funcionario.funcao}</td>
                                    <td>{funcionario.status}</td>
                                    <td>
                                        {/* Botão de remover ou ícone */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default FuncionarioEmpresa;
