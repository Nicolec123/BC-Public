import MenuEmpresa from '../layout/MenuEmpresa';
import CabeçarioEmpresa2 from '../layout/cabeçarios/CabeçarioEmpresa2';
import Header from '../layout/Header';
import Buttom from '../buttom/Buttom';
import Select from '../selects/Select';
import React, { useState } from 'react';
import styles from './DepartamentoEmpresaAdicionar.module.css';
import Footer from '../layout/Footer';

function DepartamentoEmpresaAdicionar() {
    // Estado para controlar o menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Estado para controlar a pesquisa
    const [pesquisa, setPesquisa] = useState('');

    // Estado para controlar a seleção do select motivo do chamado
    const [motivo, setMotivo] = useState('');

     // Estado para controlar a seleção do select prioridade do chamado
     const [urgencia, setUrgencia] = useState('');

    // Estado para controlar a seleção do textarea
    const [searchTerm, setSearchTerm] = useState('');

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para lidar com a pesquisa
    const handleSearch = () => {
        // Lógica de pesquisa aqui
        console.log('Pesquisar por:', searchTerm);
    };

//itens para preencher o select motivo do chamado
    const motivoOptions = [
        { value: '0', label: 'Escolha um motivo' },
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
        { value: 'Associar Cartão', label: 'Associar Cartão' },
    ];

//itens para preencher o select prioridade do chamado
    const urgenciaOptions = [
        { value: 'Urgente', label: 'Urgente' },
        { value: 'Alta', label: 'Alta' },
        { value: 'Média', label: 'Média' },
        { value: 'Baixa', label: 'Baixa' },
        { value: 'Todos', label: 'Todos' },
    ];
    


    return (
        <>
            <Header />
            <CabeçarioEmpresa2 /> 
            <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />

            <div className={styles.conatiner_adicionar_chamado}>
                <h1>Adicionar Novo Chamado</h1>
                <form className={styles.conatiner_form}>
                    <div className={styles.adicionar_chamado_container_filtro}>
                        <label htmlFor="funcionarios">Funcionário:</label>
                        <input
                            type="text"
                            id="search_input"
                            className={styles.inputFiltro}
                            placeholder="CPF-nome-matricula"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className={styles.adicionar_chamado_container_filtro}>
                        <label htmlFor="Encaminhar para">Encaminhar para:</label>
                        <input
                            type="text"
                            id="search_input"
                            className={styles.inputFiltro}
                            placeholder="email para resposta"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <label htmlFor="chamado_descricao">Descrição do Chamado:</label>
                    <textarea id="chamado_descricao" name="chamado_descricao" required></textarea>

                    <label htmlFor="chamado_prioridade">Prioridade:</label>
                    <Select options={urgenciaOptions} 
                    onChange={(e) => setUrgencia(e.target.value)} 
                    value={urgencia} />

                    <label htmlFor="chamado_motivo">Motivo:</label>
                    <Select options={motivoOptions} 
                    onChange={(e) => setMotivo(e.target.value)} 
                    value={motivo} />

                    <button id={styles.button_adicionar} type="submit">Adicionar Chamado</button>

                    <Buttom />
                    </form>
            </div>
            <Footer/>
        </>
    );
}

export default DepartamentoEmpresaAdicionar;
