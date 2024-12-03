import React, { useState } from 'react';
import PedidosEmpresa from '../PedidosEmpresa.module.css';
import Header from '../layout/Header';
import MenuEmpresa from '../layout/MenuEmpresa';
import CabeçarioEmpresa2 from '../layout/cabeçarios/CabeçarioEmpresa2';
import tituloBonito from '../Contatos.module.css';
import Footer from '../layout/Footer';
import ScrollToTop from '../layout/ScrollToTop'
import Adicionar from '../buttom/Adicionar';
import { FaEdit } from 'react-icons/fa';
import styles from './Importacao/ImportacaoExpotacao.module.css'
import FichaTecnicaEmissores from '../FichaTecnicaEmissores.module.css';
import Contatos from '../Contatos.module.css'
import PeríodosEmpresa from '../PeríodosEmpresa.module.css';
import Pagination from '../layout/PaginacaoTable/PaginacaoTable'


function ImportacaoExportacao() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [codigosDepara, setCodigosDepara] = useState('');
    const [codigosBeneficioCerto, setCodigosBeneficioCerto] = useState('');
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    // Funções de atualização para cada input
    const handleCodigosDeparaChange = (e) => {
        setCodigosDepara(e.target.value);
    };

    const handleCodigosBeneficioCertoChange = (e) => {
        setCodigosBeneficioCerto(e.target.value);
    };


    const toggleTableVisible = () => {
        setIsTableVisible(!isTableVisible);
    };
    const openPopup = () => {
        setIsPopupOpen(true);
      };
    
      const closePopup = () => {
        setIsPopupOpen(false);
      };
    
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

            <h2 className={tituloBonito.contatos_h2}>Importação e Exportação</h2>
            
             <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? styles.smallTableIEC : ''}`}>

            
                {/* Histórico de importação */}
                <div className={PedidosEmpresa.container_historico_importacao}>
                    <div ClassName={styles.mover_button}>
                    <button id={styles.button_historico_importacao} onClick={toggleTableVisible}>Histórico de importação</button>
                    </div>
                    {isTableVisible && (
                        <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Data Importação</th>
                                    <th>Nome do arquivo</th>
                                    <th>Formato</th>
                                    <th>Quantidade CNPJ</th>
                                    <th>Total Arquivo Cliente</th>
                                    <th>Total Arquivo Sistema</th>
                                    <th>Usuário</th>
                                    <th>Arquivo</th>
                                    <th>Detalhes</th>
                                </tr>
                            </thead>
                            <tbody>
                            {currentItems.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.status}</td>
                                    <td>{contact.empresa}</td>
                                    <td>{contact.n}</td>
                                    <td>{contact.tipo}</td>
                                    <td>{contact.dataSolicitacao}</td>
                                    <td>{contact.usuarioCriacao}</td>
                                    <td>{contact.dataCriacao}</td>
                                    <td>{contact.usuarioAtualizacao}</td>
                                    <td>{contact.dataAtualizacao}</td>
                                    <td>{contact.cpfFuncionario}</td>
                                    <td>{contact.nomeFuncionario}</td>
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
                          </>
                    )}
                </div>
                </div>
                <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? styles.smallTablePr : ''}`}>

                {/* Importação */}
                <div className={styles.container_importacao_exportacao}>
                    <div className={styles.container_importacao}>
                        <h3 className={styles.Importacao}>Importação</h3>
                        <div className={styles.Lista_importacao}>
                            <ul className={styles.container_lista_importacao}>
                                <u>Regras de importação </u>
                                <Adicionar />
                                <li>
                                    1-São permitidos arquivos com a extensão *.xls ou *.txt
                                </li>
                                <li>
                                    2-Os arquivos devem seguir o layout da Benefício Certo
                                </li>
                                <li>
                                    3-Verifique a documentação sobre como criar o arquivo de
                                    importação. (Aba Exportar).
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Exportação */}
                    <div className={styles.container_exportacao}>
                        <h3 className={styles.Exportacao}>Exportação</h3>
                        <div className={styles.Lista_exportacao}>
                            <div className={styles.container_conteudo}>
                                <p className={styles.pagrafos_exportacao}>
                                    Cadastro todos os funcionários - Ativos
                                </p>
                                <div className={styles.flex_box_icon}>
                                    <h4 className={styles.h4_icon}>
                                        <i className={`fas fa-book ${styles.bookIcon}`}></i> Empresa
                                    </h4>
                                    <button id={styles.button_icon}>
                                        <a href={''}>
                                            <i
                                                className={`fas fa-download ${styles.downloadIcon}`}
                                            ></i>
                                        </a>
                                    </button>
                                </div>
                                <p className={styles.paragrafo_baixo_icone}>
                                    Cadastro completo dos funcionários ativos.
                                </p>
                            </div>
                            <div className={styles.container_conteudo}>
                                <p className={styles.pagrafos_exportacao}>Benefícios</p>
                                <div className={styles.flex_box_icon}>
                                    <h4 className={styles.h4_icon}>
                                        <i className={`fas fa-list ${styles.bookIcon}`}></i> Itens
                                    </h4>
                                    <button id={styles.button_icon}>
                                        <a href={''}>
                                            <i
                                                className={`fas fa-download ${styles.downloadIcon}`}
                                            ></i>
                                        </a>
                                    </button>
                                </div>
                                <p className={styles.paragrafo_baixo_icone}>
                                    Lista de todos os benefícios disponíveis.
                                </p>
                            </div>
                            <div className={styles.container_conteudo}>
                                <p className={styles.pagrafos_exportacao}>Layout</p>
                                <div className={styles.flex_box_icon}>
                                    <h4 className={styles.h4_icon}>
                                        <i className={`fas fa-columns ${styles.bookIcon}`}></i>{' '}
                                        Layout
                                    </h4>
                                    <button id={styles.button_icon}>
                                        <a href={''}>
                                            <i
                                                className={`fas fa-download ${styles.downloadIcon}`}
                                            ></i>
                                        </a>
                                    </button>
                                </div>
                                <p className={styles.paragrafo_baixo_icone}>
                                    Documento com detalhes sobre a implementação do arquivo de
                                    importação.
                                </p>
                            </div>
                            <div className={styles.container_conteudo}>
                                <p className={styles.pagrafos_exportacao}>
                                    Cadastro de todos os funcionários - Ativos e Inativos
                                </p>
                                <div className={styles.flex_box_icon}>
                                    <h4 className={styles.h4_icon}>
                                        <i className={`fas fa-user ${styles.bookIcon}`}></i> Empresa
                                    </h4>
                                    <button id={styles.button_icon}>
                                        <a href={''}>
                                            <i
                                                className={`fas fa-download ${styles.downloadIcon}`}
                                            ></i>
                                        </a>
                                    </button>
                                </div>
                                <p className={styles.paragrafo_baixo_icone}>
                                    Cadastro completo de todos os funcionários.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.container_códigos_depara}>
      <h3 className={styles.Exportacao}>Códigos Depara</h3>
      <div className={styles.Lista_códigos_depara}>
        <label className={styles.label_codigo_cliente}>
          <span className={styles.span_CC}>Códigos Cliente</span>
          <input
            type="text"
            name="codigosDepara"
            value={codigosDepara}
            onChange={handleCodigosDeparaChange}
          />
        </label>
        <div className={styles.flex_box_button_IE}>
          <label className={styles.label_codigo_cliente}>
            <span className={styles.span_CC}>Códigos Benefício Certo</span>
            <input
              type="text"
              name="codigosBeneficioCerto"
              value={codigosBeneficioCerto}
              onChange={handleCodigosBeneficioCertoChange}
            />
          </label>
          <button className={styles.botao_salvar}>Salvar</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Códigos Cliente</th>
            <th>Códigos Benefício Certo</th>
            <th>Descrição</th>
            <th>Descrição de Tipo</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              20512
              <FaEdit onClick={openPopup} className={styles.edit_icon} />
            </td>
            <td>668003</td>
            <td>
              INATIVO | V.CAMBUI - SAO PAULO / CAMBUI C/SEG 07:30 20:00 | AUTO
              VIACAO CAMBUI LTDA | VT
            </td>
            <td>PAPEL</td>
            <td className={styles.lixeira_icon}>
              <i className="fas fa-trash"></i>
            </td>
          </tr>
           
        </tbody>
      </table>

      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popup_inner}>
            <h2 ClassName={styles.popup_h2}>Editar Códigos</h2>
            <label >
              <span>Códigos Cliente</span>
              <input
                type="text"
                value={codigosDepara}
                onChange={handleCodigosDeparaChange}
              />
            </label>
            <label>
              <span>Códigos Benefício Certo</span>
              <input
              ClassName={styles.popup_inner}
                type="text"
                value={codigosBeneficioCerto}
                onChange={handleCodigosBeneficioCertoChange}
              />
            </label>
            <div className={styles.popup_buttons}>
            <button id={Contatos.salvar}type="submit">Salvar</button>
            <button type="button" onClick={closePopup}>Fechar</button>
            
            </div>
          </div>
        </div>
      )}
          </div>
          </div>
          <ScrollToTop/>
          </div>
            <Footer />
        </>
    );
}

export default ImportacaoExportacao;