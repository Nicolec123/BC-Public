import React, { useState } from 'react';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import tituloBonito from './Contatos.module.css';
import Footer from './layout/Footer';
import ScrollToTop from '../pages/layout/ScrollToTop';
import styles from './EndereçoEmpresa.module.css';
import DepartamentoEmpresa from './DepartamentoEmpresa.module.css';
import Adicionar from '../pages/buttom/Adicionar';
import PedidosEmpresa from './PedidosEmpresa.module.css';
import { FaSearch } from "react-icons/fa"; // Biblioteca de ícones (react-icons)
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Pagination from './layout/PaginacaoTable/PaginacaoTable'
import Usuarios from './Usuarios.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EndereçoEmpresa(){
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
        {
            tipo: 'Faturamento/Entrega',
            endereco: '02611000 - PARADA PINTO - 171 - V N CACHOEIRINHA - SAO PAULO - SP',
            responsavel: '1199854635',
        },
        {
            tipo: 'Faturamento/Entrega',
            endereco: '02611000 - PARADA PINTO - 171 - V N CACHOEIRINHA - SAO PAULO - SP',
            responsavel: '1199854635',
        },
        {
            tipo: 'Faturamento/Entrega',
            endereco: '02611000 - PARADA PINTO - 171 - V N CACHOEIRINHA - SAO PAULO - SP',
            responsavel: '1199854635',
        },
        {
            tipo: 'Faturamento/Entrega',
            endereco: '02611000 - PARADA PINTO - 171 - V N CACHOEIRINHA - SAO PAULO - SP',
            responsavel: '1199854635',
        },
        {
            tipo: 'Faturamento/Entrega',
            endereco: '02611000 - PARADA PINTO - 171 - V N CACHOEIRINHA - SAO PAULO - SP',
            responsavel: '1199854635',
        }
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
                <h2 className={tituloBonito.contatos_h2}>Endereço Empresa</h2>
                <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
                <div className={Usuarios.flex_button_user}>
                    <Adicionar onAdd={openPopup} />
                    <MostrarRegistros />
                    </div>
                    {/* Pop-up */}
                    {isPopupOpen && (
                        <div className={styles.popup_endereço_empresa}>
                            <div className={styles.popup_inner_endereço_empresa}>
                                <h2>Endereço</h2> {/* Adicionar ícone no título */}
                                <form>
                        
                                    {/* Campos de entrada */}
                                    <div className={styles.input_group_endereço_empresa}>
                                        <label>
                                            Tipo:
                                            <select className={styles.selectGE_endereço_empresa}>
                                                <option value="1">Endereço</option>
                                                <option value="2">Faturamento/Entrega</option>
                                            </select>
                                        </label>
                                        <label>
                                            Entrega:
                                            <input type="text" placeholder="Ex.: Correios, Transportadora" className={styles.input_field_endereço_empresa} />
                                        </label>
                                        <label>
                                            CEP:
                                            <input type="text" placeholder="Ex.: 00000-000" className={styles.endereço_empresa_cep} />
                                        </label>
                                        <label>
                                            Logradouro:
                                            <input type="text" placeholder="Ex.: Rua, Avenida" className={styles.input_field_endereço_empresa} />
                                        </label>
                                        <label>
                                            Número:
                                            <input type="text" placeholder="Número da residência" className={styles.input_field_endereço_empresa} />
                                        </label>
                                        <label>
                                            Complemento:
                                            <input type="text" placeholder="Ex.: Apto, Bloco, etc." className={styles.input_field_endereço_empresa} />
                                        </label>
                                        <label>
                                            Bairro:
                                            <input type="text" placeholder="Bairro" className={styles.input_field_endereço_empresa} />
                                        </label>
                                        <label>
                                            Cidade:
                                            <input type="text" placeholder="Cidade" className={styles.input_field_endereço_empresa} />
                                        </label>
                                        <label>
                                            Estado:
                                            <input type="text" placeholder="Estado" className={styles.input_field_endereço_empresa} />
                                        </label>
                                        <label>
                                            Responsável pelo recebimento:
                                            <input type="text" placeholder="Nome do responsável" className={styles.input_field_endereço_empresa} />
                                        </label>
                                    </div>
                                </form>
                                  {/* Botões já existentes */}
                                  <div className={styles.popup_buttons_endereço_empresa}>
                                        <button type="button" className={styles.salvar_button_endereço_empresa}>
                                            Salvar
                                        </button>
                                        <button type="button" className={styles.fechar_button_endereço_empresa} onClick={closePopup}>
                                            Fechar
                                        </button>
                                    </div>
                            </div>
                        </div>
                    )}

                    <div className={styles.search_container_endereço_empresa}>
                        <label className={styles.search_label_endereço_empresa}>
                            <input
                                type="text"
                                placeholder="Pesquisar por CEP - Logradouro"
                                className={styles.search_input_endereço_empresa}
                            />
                            <button className={styles.search_button_endereço_empresa}>
                                <FaSearch className={styles.search_icon_endereço_empresa} />
                            </button>
                        </label>
                    </div>

                    <div>
                        <table> 
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Endereço</th>
                                    <th>Responsável</th>
                                </tr>
                            </thead>
                            <tbody>
                            {currentItems.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.tipo}
                                    <FontAwesomeIcon 
                                            icon={faEdit} 
                                            className={DepartamentoEmpresa.editIcon2} 
                                            onClick={() => openPopup({ tipo: contact.tipo })}
                                        />
                                    </td>
                                    <td>{contact.endereco}</td>
                                    <td>{contact.responsavel}</td>
                                    
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
  
export default EndereçoEmpresa;
