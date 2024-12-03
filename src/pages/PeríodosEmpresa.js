import React, { useState } from 'react';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import tituloBonito from './Contatos.module.css';
import Footer from './layout/Footer';
import ScrollToTop from '../pages/layout/ScrollToTop';
import styles from './PeríodosEmpresa.module.css';
import Adicionar from '../pages/buttom/Adicionar';
import PedidosEmpresa from './PedidosEmpresa.module.css';
import EndereçoEmpresa from './EndereçoEmpresa.module.css';
import { FaSearch } from "react-icons/fa"; // Biblioteca de ícones (react-icons)
import Registro from './RegistroEmpresa.module.css';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Pagination from './layout/PaginacaoTable/PaginacaoTable'
import Usuarios from './Usuarios.module.css';
import ImportacaoExportacao from './Importacao/Importacao/ImportacaoExpotacao.module.css';
import { FaTrash } from "react-icons/fa"; // Biblioteca de ícones (react-icons)
import DepartamentoEmpresa from './DepartamentoEmpresa.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function PeríodosEmpresa(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

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

    const data = [
        { descricao: "PERÍODO DE 22 DIAS", qtdDias: 22, qtdFuncionarios: 11,  remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> } ,
        { descricao: "PERÍODO DE 22 DIAS", qtdDias: 22, qtdFuncionarios: 11, remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> } ,
        { descricao: "PERÍODO DE 22 DIAS", qtdDias: 22, qtdFuncionarios: 11,  remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> } ,
        { descricao: "PERÍODO DE 22 DIAS", qtdDias: 22, qtdFuncionarios: 11,  remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> } ,
        { descricao: "PERÍODO DE 22 DIAS", qtdDias: 22, qtdFuncionarios: 11,  remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> },
    ];
    
    

const itemsPerPage = 5;
const offset = (currentPage - 1) * itemsPerPage;
const currentItems = data.slice(offset, offset + itemsPerPage);

const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1); // selected começa em 0
};

    return(
        <>
            <Header />
            <CabeçarioEmpresa2 />
            <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />
            <div>
                <h2 className={tituloBonito.contatos_h2}>Períodos</h2>
                <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
                <div className={Usuarios.flex_button_user}>
                    <Adicionar onAdd={openPopup} />
                    {/* Pop-up */}
                    <MostrarRegistros />
                    </div>
                    {isPopupOpen && (
                        <div className={styles.popup_periodo_empresa}>
                            <div className={styles.popup_inner_periodo_empresa}>
                                <h2 className={styles.popup_h2_periodo_empresa}>Períodos</h2> {/* Adicionar ícone no título */}
                                <form>
                    
                                    {/* Campos de entrada */}
                                    <div className={styles.input_group_periodo_empresa}>
                                        <label className={styles.flex_label}>
                                        Descrição <i className={styles.italic_text}>(mínimo 5 dias)</i>:
                                        <input type="text" className={styles.input_field_periodo_empresa} />
                                        </label>
                                        <label>
                                            Qtd.Dias:
                                            <input type="text"  className={styles._periodo_empresa} />
                                        </label>
                                    </div>
                                  {/* Botões já existentes */}
                                  <button type="submit" id={styles.salvar2}>Salvar</button>
                                  <button type="button" onClick={closePopup}>Fechar</button>
                                  </form>
                            </div>
                            </div>
                        
                    )}

                    <div className={EndereçoEmpresa.search_container_endereço_empresa}>
                        <label className={EndereçoEmpresa.search_label_endereço_empresa}>
                            <input
                                type="text"
                                placeholder="Pesquisar por CEP - Logradouro"
                                className={EndereçoEmpresa.search_input_endereço_empresa}
                            />
                            <button className={EndereçoEmpresa.search_button_endereço_empresa}>
                                <FaSearch className={EndereçoEmpresa.search_icon_endereço_empresa} />
                            </button>
                        </label>
                    </div>

                    <div>
                        <table> 
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Qtd.Dias</th>
                                    <th>Qtd.Funcionários</th>
                                        <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                            {currentItems.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.descricao}
                                    <FontAwesomeIcon 
                                            icon={faEdit} 
                                            className={DepartamentoEmpresa.editIcon2} 
                                            onClick={() => openPopup({ descricao: contact.descricao })}
                                        />
    
                                    </td>
                                    <td>{contact.qtdDias}</td>
                                    <td>{contact.qtdFuncionarios}</td>
                                    <td>{contact.remover}</td>
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
                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    );
}
  
export default PeríodosEmpresa;
