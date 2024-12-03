import roteirizacaoStyles from './Roteirizacao.module.css';
import styles from './PedidosEmpresa.module.css';
import React, { useState } from 'react';
import PesquisarButton from './buttom/Pesquisar_Button';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import Select from '../pages/selects/Select'
import tituloBonito from './Contatos.module.css';
import Footer from './layout/Footer';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Pagination from './layout/PaginacaoTable/PaginacaoTable'

function Roteirizacao() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Opções de status da roteirização
    const statusOptions = [
        { value: '0', label: 'Selecionar status' },
        { value: '1', label: 'Endereço não localizado' },
        { value: '2', label: 'Erro Processamento' },
        { value: '3', label: 'Local não localizado' },
        { value: '4', label: 'Processado - Manualmente com otimização total' },
        { value: '5', label: 'Processado - Manualmente com otimização parcial' },
        { value: '6', label: 'Processado - Manualmente sem otimização' },
        { value: '7', label: 'Processado - Otimizado parcialmente' },
        { value: '8', label: 'Processado - Otimizado totalmente' },
        { value: '9', label: 'Processado - Sem Otimização' },
        { value: '10', label: 'Processado - Sem Otimização por Valor Inferior' },
        { value: '11', label: 'Processado - Valor inicial abaixo do mínimo' },
        { value: '12', label: 'Reprocessado - Manualmente com otimização total' },
        { value: '13', label: 'Reprocessado - Abatido' },
        { value: '14', label: 'Reprocessado - Otimizado totalmente' },
        { value: '15', label: 'Transportes inexistente ida' },
        { value: '16', label: 'Transportes inexistente ida/volta' },
        { value: '17', label: 'Transportes inexistente volta' },
    ];

    const data = [
      {
        status: "Processando",
        id: 123456,
        empresa: "Empresa XYZ",
        n: 1,
        tipo: "Processado - Manualmente com otimização total",
        dataSolicitacao: "01/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "01/01/2022",
        usuarioAtualizacao: "Usuário B",
        dataAtualizacao: "02/01/2022",
        cpfFuncionario: "123.456.789-00",
        nomeFuncionario: "Funcionário A",
      },
      {
        status: "Processando",
        id: 123457,
        empresa: "Empresa ABC",
        n: 2,
        tipo: "Processado - Automaticamente",
        dataSolicitacao: "02/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "02/01/2022",
        usuarioAtualizacao: "Usuário D",
        dataAtualizacao: "03/01/2022",
        cpfFuncionario: "123.456.789-01",
        nomeFuncionario: "Funcionário B",
      },
      {
        status: "Erro-Reprocessar",
        id: 123458,
        empresa: "Empresa DEF",
        n: 3,
        tipo: "Em Processamento",
        dataSolicitacao: "03/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "03/01/2022",
        usuarioAtualizacao: "Usuário F",
        dataAtualizacao: "04/01/2022",
        cpfFuncionario: "123.456.789-02",
        nomeFuncionario: "Funcionário C",
      },
      {
        status: "Erro-Reprocessar",
        id: 123458,
        empresa: "Empresa DEF",
        n: 3,
        tipo: "Em Processamento",
        dataSolicitacao: "03/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "03/01/2022",
        usuarioAtualizacao: "Usuário F",
        dataAtualizacao: "04/01/2022",
        cpfFuncionario: "123.456.789-02",
        nomeFuncionario: "Funcionário C",
      },
      {
        status: "Erro-Reprocessar",
        id: 123458,
        empresa: "Empresa DEF",
        n: 3,
        tipo: "Em Processamento",
        dataSolicitacao: "03/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "03/01/2022",
        usuarioAtualizacao: "Usuário F",
        dataAtualizacao: "04/01/2022",
        cpfFuncionario: "123.456.789-02",
        nomeFuncionario: "Funcionário C",
      },
      {
        status: "Erro-Reprocessar",
        id: 123458,
        empresa: "Empresa DEF",
        n: 3,
        tipo: "Em Processamento",
        dataSolicitacao: "03/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "03/01/2022",
        usuarioAtualizacao: "Usuário F",
        dataAtualizacao: "04/01/2022",
        cpfFuncionario: "123.456.789-02",
        nomeFuncionario: "Funcionário C",
      },
      {
        status: "Erro-Reprocessar",
        id: 123458,
        empresa: "Empresa DEF",
        n: 3,
        tipo: "Em Processamento",
        dataSolicitacao: "03/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "03/01/2022",
        usuarioAtualizacao: "Usuário F",
        dataAtualizacao: "04/01/2022",
        cpfFuncionario: "123.456.789-02",
        nomeFuncionario: "Funcionário C",
      },
      {
        status: "Erro-Reprocessar",
        id: 123458,
        empresa: "Empresa DEF",
        n: 3,
        tipo: "Em Processamento",
        dataSolicitacao: "03/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "03/01/2022",
        usuarioAtualizacao: "Usuário F",
        dataAtualizacao: "04/01/2022",
        cpfFuncionario: "123.456.789-02",
        nomeFuncionario: "Funcionário C",
      },
      {
        status: "Erro-Reprocessar",
        id: 123458,
        empresa: "Empresa DEF",
        n: 3,
        tipo: "Em Processamento",
        dataSolicitacao: "03/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "03/01/2022",
        usuarioAtualizacao: "Usuário F",
        dataAtualizacao: "04/01/2022",
        cpfFuncionario: "123.456.789-02",
        nomeFuncionario: "Funcionário C",
      },
      {
        status: "Erro-Reprocessar",
        id: 123458,
        empresa: "Empresa DEF",
        n: 3,
        tipo: "Em Processamento",
        dataSolicitacao: "03/01/2022",
        usuarioCriacao: "Nicole Ferrari",
        dataCriacao: "03/01/2022",
        usuarioAtualizacao: "Usuário F",
        dataAtualizacao: "04/01/2022",
        cpfFuncionario: "123.456.789-02",
        nomeFuncionario: "Funcionário C",
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
            <CabeçarioEmpresa2 /> 
            <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />
            <h2 className={tituloBonito.contatos_h2}>Roteirização</h2>
            <div className={roteirizacaoStyles.container}>
            <MostrarRegistros/>

                <p className={roteirizacaoStyles.paragrafo_selects}>Status da Roteirização</p>
                <Select 
                    options={statusOptions} 
                    onChange={(e) => setStatus(e.target.value)} 
                    value={status} 
                />

                {/*input data de solicitação*/}
                <div className={roteirizacaoStyles.data}>
                    <label>Data Inicial</label>
                    <input type="date" className={roteirizacaoStyles.input} />
                </div>

                {/*numero de roteirização*/}
                <div className={roteirizacaoStyles.numeroRoteirizacao}>
                    <label>Número de Roteirização</label>
                    <input type="text" className={roteirizacaoStyles.input} />
                </div>

                {/*input CPF*/}
                <div className={roteirizacaoStyles.cpf}>
                    <label>CPF</label>
                    <input type="text" className={roteirizacaoStyles.input} />
                </div>

                {/*nome da empresa*/}
                <div className={roteirizacaoStyles.nomeEmpresa}>
                    <label>Nome da Empresa</label>
                    <input type="text" className={roteirizacaoStyles.input} />
                </div>
            </div>
            
                 {/*Botão para buscar as coisas tudo*/}
                 <PesquisarButton onSearch={() => console.log('Pesquisar')} />

<div className={`${styles.container_table} ${isMenuOpen ? styles.smallTable : ''}`}>              

            {/*tabela com os resultados*/ }
            <table className={roteirizacaoStyles.tabela}>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>ID</th>
                        <th>Empresa</th>
                        <th>n</th>
                        <th>Tipo</th>
                        <th>Data Solicitação</th>
                        <th>Usuário Criação</th>
                        <th>Data Criação</th>
                        <th>Usuário Atualização</th>
                        <th>Data Atualização</th>
                        <th>CPF Funcionário</th>
                        <th>Nome Funcionário</th>

                    </tr>
                </thead>
                <tbody>
                {currentItems.map((item, index) => (
        <tr key={index}>
          <td>{item.status}</td>
          <td>{item.id}</td>
          <td>{item.empresa}</td>
          <td>{item.n}</td>
          <td>{item.tipo}</td>
          <td>{item.dataSolicitacao}</td>
          <td>{item.usuarioCriacao}</td>
          <td>{item.dataCriacao}</td>
          <td>{item.usuarioAtualizacao}</td>
          <td>{item.dataAtualizacao}</td>
          <td>{item.cpfFuncionario}</td>
          <td>{item.nomeFuncionario}</td>
        </tr>
      ))}
  </tbody>
  <tfoot>
    <tr>
      <td colSpan="5">Total de resultados: 10</td>
    </tr>
  </tfoot>
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
    )
}

export default Roteirizacao;