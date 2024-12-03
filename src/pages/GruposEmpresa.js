import React, { useState } from 'react';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import tituloBonito from './Contatos.module.css';
import Footer from './layout/Footer';
import ScrollToTop from '../pages/layout/ScrollToTop';
import styles from './RegistroEmpresa.module.css';
import styles2 from './GruposEmpresa.module.css';
import Adicionar from '../pages/buttom/Adicionar';
import PedidosEmpresa from './PedidosEmpresa.module.css';
import { FaSearch } from "react-icons/fa"; // Biblioteca de ícones (react-icons)
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Pagination from './layout/PaginacaoTable/PaginacaoTable'
import Usuarios from './Usuarios.module.css';
import TrashlinkIcon  from './Icon/FaTrash';



function GruposEmpresa(){
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
            razaoSocial: 'PONTO FRIO UTILIDADES S A',
            cnpjCpf: '08.655.788/0002-67',
            nomeFantasia: 'PONTO FRIO',
            remover:<TrashlinkIcon />
        },
        {
            razaoSocial: 'BENEFICIO CERTO LTDA ME',
            cnpjCpf: '08.655.788/0002-67',
            nomeFantasia: 'BENEFICIO CERTO',
            remover: <TrashlinkIcon />
        },
        {
            razaoSocial: 'MAARABRAZ UTILIDADES S A',
            cnpjCpf: '08.655.788/0002-67',
            nomeFantasia: 'MAARABRAZ',
            remover: <TrashlinkIcon />
        },
        {
            razaoSocial: 'SEM IDEIAS PARA AGORA S A',
            cnpjCpf: '08.655.788/0002-67',
            nomeFantasia: 'Empresa GHI',
            remover:<TrashlinkIcon />
        },
        {
            razaoSocial: 'SEM IDEIAS PARA AGORA S A',
            cnpjCpf: '08.655.788/0002-67',
            nomeFantasia: 'Empresa JKL',
            remover:<TrashlinkIcon />
        },

        {
            razaoSocial: 'SEM IDEIAS PARA AGORA S A',
            cnpjCpf: '08.655.788/0002-67',
            nomeFantasia: 'Empresa JKL',
            remover: <TrashlinkIcon />
        },

        {
            razaoSocial: 'SEM IDEIAS PARA AGORA S A',
            cnpjCpf: '08.655.788/0002-67',
            nomeFantasia: 'Empresa JKL',
            remover: <TrashlinkIcon />
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
        <h2 className={tituloBonito.contatos_h2}>Grupos</h2>
        <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
        <div className={Usuarios.flex_button_user}>
        <Adicionar onAdd={openPopup} />
        <MostrarRegistros />
            </div>
        
        {/* Pop-up */}
          {isPopupOpen && (
                <div className={styles.popup}>
                    <div className={styles.popup_inner}>
                        <h2>Adicionar Informação</h2>
                        <form>
                            <label className={styles2.flex_box_grupoEmpresa}>
                                Escolha uma opção:
                                <select
                                    className={styles2.selectGE}
                                  
                                >
                                     <option value="">Selecione</option>
                                        <option value="">PESQUISAR USANDO API BC</option>

                                </select>
                                <button className={styles2.searchButton}>
                        <FaSearch className={styles2.searchIcon} />
                    </button>
                            </label>
                            <div className={styles.popup_buttons}>
                                <button
                                    type="button"
                                    className={styles.salvar_button}
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
        {/* tabela de Grupos */}

       
      <div>
     <table> 
                        <thead>
                            <tr>
                                <th>Razão Social</th>
                                <th>CNPJ/CPF</th>
                                <th>Nome Fantasia</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.razaoSocial}</td>
                                    <td>{contact.cnpjCpf}</td>
                                    <td>{contact.nomeFantasia}</td>
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
            <ScrollToTop />
        </div>
        </div>
        <Footer />
        </>
    )
}

export default GruposEmpresa;