import React, { useState } from 'react'; 

import styles from './ProdutosRecorrentes.module.css';
import Header from './layout/Header';   
import MenuEmpresa from './layout/MenuEmpresa';
import tituloBonito from './Contatos.module.css';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import Footer from './layout/Footer';
import PedidosEmpresa from './PedidosEmpresa.module.css';
import Modal from 'react-modal';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Usuarios from './Usuarios.module.css';
import Pagination from './layout/PaginacaoTable/PaginacaoTable'
import EditLinkIcon from './Icon/FaEdit';
import AnexarlinkIcon from './Icon/FaAnexar';

// estilo para o modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

function ProdutosRecorrentes() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);


    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Funções para abrir e fechar o modal
    const openModal = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const data = [
        { id: 1, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 50, Vidas_na_Folha: 40, Vidas_Subsidiadas: 20, Valor_Pago_BC: 200, Valor_Cobrado: 800, Ativo: 'sim', Edicao: '', Anexar: '', Acao: '' },
        { id: 2, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 20, Vidas_Subsidiadas: 30, Valor_Pago_BC: 400, Valor_Cobrado: 1000, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id: 3, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id: 4, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id: 5, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:6, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:7, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:8, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:9, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:10, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:11, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:12, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:13, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:14, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:15, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:16, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:17, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:18, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:19, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:20, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:21, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:22, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:23, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:24, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:25, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:26, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:27, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:28, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:29, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:30, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:31, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
        { id:32, Produto: 'Total Pass', Vigência: '20/08/2010', Vidas_Contratadas: 70, Vidas_Ativas: 20, Vidas_na_Folha: 30, Vidas_Subsidiadas: 30, Valor_Pago_BC: 300, Valor_Cobrado: 100, Ativo: 'Desativo', Edicao: '', Anexar: '', Acao: '' },
    ];

    const itemsPerPage = 10;//quantidade que deve aparecer na tela por vez
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
            <div>

                <h2 className={tituloBonito.contatos_h2}>Produtos Recorrentes</h2>
                <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? styles.smallTablePr : ''}`}>
                <div className={Usuarios.flex_button_user}>
                    <button id={styles.button_adicionar_produtos_recorrentes}><i className="fas fa-plus"></i>Produto Recorrente</button>
                    <MostrarRegistros  />
                    </div>
                    <table>
                        <thead>
                            <tr>
                            <th className={styles.colProdutospr}>Produtos</th>
                            <th className={styles.colVigencia}>Vigência</th>
                                <th className={styles.colVidasContradas}>Vidas Contratadas</th>
                                <th className={styles.colVidasAtivas}>Vidas Ativas</th>
                                <th className={styles.colVidasFolhas}>Vidas na Folha</th>
                                <th className={styles.colVidasSunsidiadas}>Vidas Subsidiadas</th>
                                <th className={styles.colDatadaGeração}>Valor Pago BC</th>
                                <th className={styles.colValorCobrado}>Valor Cobrado</th>
                                <th className={styles.colAtivo}>Ativo</th>
                                <th className={styles.colEdicao}>Edição</th>
                                <th className={styles.colAnexar}>Anexar</th>
                                <th className={styles.colAcao}>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.Produto} <span onClick={() => openModal(contact)} className={styles.infoIcon}>!</span></td>
                                    <td>{contact.Vigência}</td>
                                    <td>{contact.Vidas_Contratadas}</td>
                                    <td>{contact.Vidas_Ativas}</td>
                                    <td>{contact.Vidas_na_Folha}</td>
                                    <td>{contact.Vidas_Subsidiadas}</td>
                                    <td>{contact.Valor_Pago_BC}</td>
                                    <td>{contact.Valor_Cobrado}</td>
                                    <td>{contact.Ativo}</td>
                                    <td id={styles.editar_PCC1}><EditLinkIcon/></td>
                                    <td id={styles.editar_PCC2}><AnexarlinkIcon/></td>
                                    <td id={styles.editar_PCC3}><a href={contact.Acao}>Conta Corrente</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                      totalItems={data.length} // Total de itens no array
                      itemsPerPage={itemsPerPage} // Itens por página
                      onPageChange={handlePageChange}
                      marginPagesDisplayed={3}
                      pageRangeDisplayed={5}
                      />
                </div>
            </div>
            <Footer />

            {/* Modal */}
            {selectedProduct && (
    <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.customModal} 
        overlayClassName={styles.customOverlay}     
        contentLabel="Product Information"
    >
        <h2 className={styles.modal_title}>Informações do Produto</h2>
        <div className={styles.modal_content}>
            <p className={styles.pop_up_pcc}><strong>Tipo:</strong> Outro</p>
            <p className={styles.pop_up_pcc}><strong>Arquivo:</strong> {selectedProduct.Anexar}</p>
            <p className={styles.pop_up_pcc}><strong>Data/Hora do Upload:</strong> {new Date().toLocaleString()}</p>
            <p className={styles.pop_up_pcc}><strong>Usuário:</strong> Usuário Exemplo</p>
            <p className={styles.pop_up_pcc}><strong>Downloads:</strong> <a href={selectedProduct.Anexar} download><i className="fas fa-download"></i></a></p>
        </div>
        <button className={styles.modal_close_button} onClick={closeModal}>Fechar</button>
    </Modal>
)}

        </>
    );
}

export default ProdutosRecorrentes;
