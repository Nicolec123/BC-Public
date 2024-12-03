import ChamadosEmpresas from './ChamadosEmpresa.module.css';
import MenuEmpresa from '../layout/MenuEmpresa';
import CabeçarioEmpresa2 from '../layout/cabeçarios/CabeçarioEmpresa2';
import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import PesquisarButton from '../buttom/Pesquisar_Button';
import Select from '../selects/Select'
import styles from '../PedidosEmpresa.module.css';
import Adicionar from '../buttom/Adicionar';
import tituloBonito from '../Contatos.module.css';
import Footer from '../layout/Footer';
import MostrarRegistros from '../layout/FiltroMostrarRegistros/MostrarRegistros'
import Pagination from '../layout/PaginacaoTable/PaginacaoTable'
import Usuarios from '../Usuarios.module.css';


function ChamadosEmpresa() {
    // Estado para controlar o menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Estado para controlar a pesquisa
    const [searchTerm, setSearchTerm] = useState('');
    const [status, setStatus] = useState('');
    const [motivo, setMotivo] = useState('');
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);


    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para lidar com a pesquisa
    const handleSearch = () => {
        // Lógica de pesquisa aqui
        console.log('Pesquisar por:', searchTerm);
    };
    const handleAddClick = () => {
        navigate('/ChamadosAdicionar'); // ele vai para a parte de adicionar um novo chamado
    };

    const statusOptions = [
        { value: '0', label: 'Selecionar' },
        { value: 'Todos', label: 'Todos' },
        { value: 'Não Concluídos', label: 'Aberto' },
        { value: 'Aberto', label: 'Em Andamento' },
        { value: 'Concluído', label: 'Concluído' },
        { value: 'Aguardando', label: 'Aguardando Retorno' },
    ];

    const motivoOptions = [
        { value: 'Todos', label: 'Todos' },
        { value: 'Análise Pedido Econômico', label: 'Análise Pedido Econômico' },
        { value: 'Análise Roteirização', label: 'Análise Roteirização' },
        { value: 'Cadastro de Itinerário', label: 'Cadastro de Itinerário' },
        { value: 'Desassociar Cartão', label: 'Desassociar Cartão' },
        { value: 'Informação de Crédito', label: 'Informação de Crédito' },
        { value: 'Informação de Entrega', label: 'Informação de Entrega' },
        { value: 'Informação de Número de Cartão Associado', label: 'Informação de Número de Cartão Associado' },
        { value: 'Outros', label: 'Outros' },
        { value: 'Problemas Importação', label: 'Problemas Importação' },
        { value: 'Solicitação 2 via cartão', label: 'Solicitação 2 via cartão' },
        { value: 'Valor de Passagem', label: 'Valor de Passagem' },
    ];

    const data = [
        {
            id: 1,
            chamado: '123',
            cnpjCpf: '12.345.678/0001-90',
            empresa: 'Empresa A',
            emissor: 'João Silva',
            cpf: '123.456.789-00',
            matricula: '001',
            funcionario: 'João Silva',
            descricao: 'Análise Pedido Econômico',
            dataAbertura: '2022-01-01 10:00:00',
            dataConclusao: '2022-01-05 15:00:00'
        },

            {
                id: 2,
                chamado: '123',
                cnpjCpf: '12.345.678/0001-90',
                empresa: 'Empresa A',
                emissor: 'João Silva',
                cpf: '123.456.789-00',
                matricula: '001',
                funcionario: 'João Silva',
                descricao: 'Análise Pedido Econômico',
                dataAbertura: '2022-01-01 10:00:00',
                dataConclusao: '2022-01-05 15:00:00'
            },
            {
                id: 3,
                chamado: '456',
                cnpjCpf: '98.765.432/0001-00',
                empresa: 'Empresa B',
                emissor: 'Pedro Santos',
                cpf: '987.654.321-00',
                matricula: '002',
                funcionario: 'Pedro Santos',
                descricao: 'Cadastro de Itinerário',
                dataAbertura: '2022-02-15 14:30:00',
                dataConclusao: '2022-02-20 12:00:00'
            },
            {
                id: 4,
                chamado: '789',
                cnpjCpf: '11.223.344/0001-55',
                empresa: 'Empresa C',
                emissor: 'Maria Oliveira',
                cpf: '321.654.987-00',
                matricula: '003',
                funcionario: 'Maria Oliveira',
                descricao: 'Desassociar Cartão',
                dataAbertura: '2022-03-10 09:00:00',
                dataConclusao: '2022-03-15 17:00:00'
            },
            {
                id: 5,
                chamado: '101',
                cnpjCpf: '22.334.455/0001-66',
                empresa: 'Empresa D',
                emissor: 'Lucas Pereira',
                cpf: '654.321.987-00',
                matricula: '004',
                funcionario: 'Lucas Pereira',
                descricao: 'Informação de Crédito',
                dataAbertura: '2022-04-05 11:45:00',
                dataConclusao: '2022-04-10 13:30:00'
            },
            {
                id: 6,
                chamado: '112',
                cnpjCpf: '33.445.566/0001-77',
                empresa: 'Empresa E',
                emissor: 'Ana Costa',
                cpf: '789.123.456-00',
                matricula: '005',
                funcionario: 'Ana Costa',
                descricao: 'Informação de Entrega',
                dataAbertura: '2022-05-20 16:20:00',
                dataConclusao: '2022-05-25 10:00:00'
            },
            {
                id:7,
                chamado: '131',
                cnpjCpf: '44.556.677/0001-88',
                empresa: 'Empresa F',
                emissor: 'Rafael Lima',
                cpf: '456.789.123-00',
                matricula: '006',
                funcionario: 'Rafael Lima',
                descricao: 'Solicitação 2 via cartão',
                dataAbertura: '2022-06-25 08:10:00',
                dataConclusao: '2022-06-30 14:00:00'
            },
        {
            id:8,
            chamado: '131',
            cnpjCpf: '44.556.677/0001-88',
            empresa: 'Empresa F',
            emissor: 'Rafael Lima',
            cpf: '456.789.123-00',
            matricula: '006',
            funcionario: 'Rafael Lima',
            descricao: 'Solicitação 2 via cartão',
            dataAbertura: '2022-06-25 08:10:00',
            dataConclusao: '2022-06-30 14:00:00'
        },
    
    ];
    



    const itemsPerPage = 5;
    const offset = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1); // selected começa em 0
    };

    return (
        <>
            <Header />
            <CabeçarioEmpresa2/>
            <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />
            <h2 className={tituloBonito.contatos_h2}>Chamados</h2>
            <div className={`${ChamadosEmpresas.container_table} ${isMenuOpen ? ChamadosEmpresas.smallTable : ''}`}>
            <div className={ChamadosEmpresas.container}>
            <div className={Usuarios.flex_button_user}>
            <Adicionar onAdd={handleAddClick} />
            <MostrarRegistros/>
            </div>
</div>


            {/* Lista de chamados */}
                <label className={ChamadosEmpresas.date}>Data Inicial</label>

                <Select className={ChamadosEmpresas.selectChamados}
                    options={statusOptions} 
                    onChange={(e) => setStatus(e.target.value)} 
                    value={status} 
                />
  
                <p className={ChamadosEmpresas.paragrafo_selects}>Motivo</p>
                <Select className={ChamadosEmpresas.selectChamados}
                    options={motivoOptions} 
                    onChange={(e) => setMotivo(e.target.value)} 
                    value={motivo} 
                />

                <div className={ChamadosEmpresas.container_filtro}>
                                <label>Data Inicial</label>
                    <input 
                        type="text" 
                        id="search_input" 
                        className={styles.inputFiltro} 
                        placeholder="CPF-N do chamado-Nome do funcionáro" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                                    
                                 
                 </div>
                </div>
                   <PesquisarButton/>
                   <div className={`${styles.chamados_table} ${isMenuOpen ? styles.smallTable : ''}`}>{/*importado da tabela pedidos para obter a responsividade quando o menu for aberto*/ }
                <table >
                <thead>
                        <tr>
                            <th>Nº do chamado</th>
                            <th>CNPJ/CPF</th>
                            <th>Empresa</th>
                            <th>Emissor</th>
                            <th>CPF</th>
                            <th>Matrícula</th>
                            <th>Funcionário</th>
                            <th>Descrição</th>
                            <th>Data Abertura</th>
                            <th>Data Conclusão</th>
                        </tr>
                    </thead>
                    <tbody>
                          {currentItems.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.chamado}</td>
                                    <td>{contact.cnpjCPF}</td>
                                    <td>{contact.empresa}</td>
                                    <td>{contact.emissor}</td>
                                    <td>{contact.cpf}</td>
                                    <td>{contact.matricula}</td>
                                    <td>{contact.funcionario}</td>
                                    <td>{contact.descricao}</td>
                                    <td>{contact.dataAbertura}</td>
                                    <td>{contact.dataConclusao}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <Pagination
                      totalItems={data.length} // Total de itens no array
                      itemsPerPage={itemsPerPage} // Itens por página
                      onPageChange={handlePageChange}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      />
                      </div>
                <Footer />
        </>
    );
}

export default ChamadosEmpresa;
