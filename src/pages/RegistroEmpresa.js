import React, { useState } from 'react';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import tituloBonito from './Contatos.module.css';
import Footer from './layout/Footer';
import ScrollToTop from '../pages/layout/ScrollToTop';
import styles from './RegistroEmpresa.module.css';
import PesquisarButton from '../pages/buttom/Pesquisar_Button';
import Adicionar from '../pages/buttom/Adicionar';
import Contatos from './Contatos.module.css';

function RegistroEmpresa() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [registros, setRegistros] = useState([]); // Estado para armazenar os registros
    const [descrição, setDescrição] = useState(''); // Estado para armazenar a descrição

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedOption('');
    };

    const handleSave = () => {
        if (selectedOption) {
            const novoRegistro = {
                id: Date.now(),
                numero: registros.length + 1,
                nome: selectedOption,
                descrição: descrição.trim(),
                datacalendar: new Date().toLocaleDateString('pt-BR'),
            };
    
            fetch('http://localhost:3000/registros', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoRegistro),
            })
                .then((response) => response.json())
                .then((data) => {
                    setRegistros((prevRegistros) => [...prevRegistros, data]);
                    alert(`Registro salvo: ${data.nome}`);
                    setDescrição(""); // Limpa o campo de descrição após salvar
                    setSelectedOption(""); // Reseta o dropdown
                })
                .catch((error) => console.error('Erro ao salvar registro:', error));
    
            closePopup();
        } else {
            alert('Por favor, selecione uma opção antes de salvar.');
        }
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

   


    return (
        <>
            <Header />
            <CabeçarioEmpresa2 />
            <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />
            <div>
                <h1 className={tituloBonito.contatos_h2}>Registro de Empresa</h1>
                <div className={`${Contatos.container_table} ${isMenuOpen ? styles.smallTableRegsitros : ''}`}>

                <Adicionar onAdd={openPopup} />
                <div className={styles.flex_box_registros}>
                    {/* Grupos de filtros */}
                    <div className={styles.label_select_group}>
                        <label htmlFor="dataRegistroFiltro">Data do registro</label>
                        <select id={styles.dataRegistroFiltro}>
                            <option value="0">Todas</option>
                            <option value="1">Todas</option>
                        </select>
                    </div>

                    {/* Grupo 2: Tipo de registro */}
                    <div className={styles.label_select_group}>
                        <label htmlFor="tipoRegistroFiltro">Tipo de registro</label>
                        <select id={styles.dataRegistroFiltro}>
                            <option value="0">Todas</option>
                            <option value="1">Todas</option>
                        </select>
                    </div>

                    {/* Grupo 3: Registrado por */}
                    <div className={styles.label_select_group}>
                        <label htmlFor="situacaoRegistroFiltro">Registrado por</label>
                        <select id={styles.dataRegistroFiltro}>
                            <option value="0">Todas</option>
                            <option value="1">Todas</option>
                        </select>
                    </div>

                    {/* Grupo 4: Número do registro */}
                    <div className={styles.label_select_group}>
                        <label htmlFor="numeroRegistroFiltro">N do registro</label>
                        <input
                            type="search"
                            name="emissor"
                            id={styles.numeroRegistroFiltro}
                            aria-controls="tb1Fornecedores"
                            placeholder="Digite o nome do emissor"
                        />
                    </div>

                    {/* Botão para iniciar pesquisa */}
                    <PesquisarButton
                        aoPesquisar={() => console.log('Pesquisa iniciada')}
                        className={`${styles.botao_pesquisa_registro} ${styles.alinharDireita}`}
                    />
                </div>

                {/* Exibição dos registros salvos */}
<div className={styles.salvosPagina}>
    <h3 className={styles.salvosPagina_h3}>Registros Salvos:</h3>
    <div className={styles.registrosContainer}>
        
        {registros.map((registro, index) => (
            <div key={registro.id} className={styles.registroCard}>
                <div className={styles.registroHeader}>
                    <span className={styles.numeroRegistro}>#{index + 1}</span>
                    <h3 className={styles.nomeRegistro}>{registro.nome}</h3>
                </div>
                <div className={styles.registroDetalhes}>
                    {/*adicionar mais informações do registro  */}
                    <p className={styles.paragrafo_description}>Criado por: {registro.id} Nicole</p>
                    <br/>
                    <p className={styles.paragrafo_description}>Data: {registro.datacalendar}</p> {/* Exibe a descrição salva */}
                    <br/>
                    <p className={styles.paragrafo_description}>Descrição: {registro.descrição}</p> {/* Exibe a descrição salva */}
                    <br/>
                </div>
            </div>
        ))}
    </div>
</div>
            </div>
            </div>
            {/* Pop-up */}
            {isPopupOpen && (
                <div className={styles.popup}>
                    <div className={styles.popup_inner}>
                        <h2>Adicionar Informação</h2>
                        <form>
                            <label>
                                Escolha uma opção:
                                <select
                                    className={styles.select_pop_up_register}
                                    value={selectedOption}
                                    onChange={handleChange}
                                >
                                     <option value="">Selecione</option>
                                        <option value="Acompanhamento de Pedido">Acompanhamento de Pedido</option>
                                        <option value="Alteração de Data de Entrega">Alteração de Data de Entrega</option>
                                        <option value="Apresentação Benefício Certo">Apresentação Benefício Certo</option>
                                        <option value="Apresentação Cross-Sell">Apresentação Cross-Sell</option>
                                        <option value="Atraso de Entrega Cartão">Atraso de Entrega Cartão</option>
                                        <option value="Atraso de Entrega de VT Papel">Atraso de Entrega de VT Papel</option>
                                        <option value="Atualização de Cadastro">Atualização de Cadastro</option>
                                        <option value="Atualizar Boleto">Atualizar Boleto</option>
                                        <option value="Cancelamento de Pedido">Cancelamento de Pedido</option>
                                        <option value="Condição Comercial">Condição Comercial</option>
                                        <option value="Créditos Indisponíveis">Créditos Indisponíveis</option>
                                        <option value="Devolução de Benefícios">Devolução de Benefícios</option>
                                        <option value="E-mail Enviado">E-mail Enviado</option>
                                        <option value="E-mail Recebido">E-mail Recebido</option>
                                        <option value="Endereço Incorreto">Endereço Incorreto</option>
                                        <option value="Falta de Vales Transporte">Falta de Vales Transporte</option>
                                        <option value="Fidelização">Fidelização</option>
                                        <option value="Implantações">Implantações</option>
                                        <option value="Importações">Importações</option>
                                        <option value="Inclusão Cadastro de Vales Transporte">Inclusão Cadastro de Vales Transporte</option>
                                        <option value="Inclusão Receptiva Cross-Sell">Inclusão Receptiva Cross-Sell</option>
                                        <option value="Informação de Atraso de Entrega">Informação de Atraso de Entrega</option>
                                        <option value="Informação de Roteirização">Informação de Roteirização</option>
                                        <option value="Informação de Taxas">Informação de Taxas</option>
                                        <option value="Informação de Vale Transporte">Informação de Vale Transporte</option>
                                        <option value="Inversão de Encomendas">Inversão de Encomendas</option>
                                        <option value="Monitoria de Pedido">Monitoria de Pedido</option>
                                        <option value="Negociação Cross-Sell">Negociação Cross-Sell</option>
                                        <option value="Nota Fiscal">Nota Fiscal</option>
                                        <option value="Notas Gerais">Notas Gerais</option>
                                        <option value="Pedido Segunda Via de Cartão">Pedido Segunda Via de Cartão</option>
                                        <option value="Processamento de Pedido">Processamento de Pedido</option>
                                        <option value="Retorno de Ocorrências">Retorno de Ocorrências</option>
                                        <option value="Reunião Realizada">Reunião Realizada</option>
                                        <option value="Suporte de Site">Suporte de Site</option>
                                </select>
                                <label>
                                    Descrição:
                                    <textarea
                                     className={styles.Descrição_pop_up_register}
                                     value={descrição} 
                                     placeholder='Descreva o motivo da realização do Registro'
                                    onChange={(e) => setDescrição(e.target.value)}>
                                   </textarea>

                                    <small>
                                        A descrição será salva e apresentada junto ao registro.
                                    </small>
                                    <div className={styles.observacoes_container}></div>
                                </label>
                            </label>
                            <div className={styles.popup_buttons}>
                                <button
                                    type="button"
                                    className={styles.salvar_button}
                                    onClick={handleSave}
                                >
                                    Salvar
                                </button>
                                <button
                                    type="button"
                                    className={styles.fechar_button}
                                    onClick={closePopup}
                                >
                                    Fechar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ScrollToTop />
            <Footer />
        </>
    );
}

export default RegistroEmpresa;
