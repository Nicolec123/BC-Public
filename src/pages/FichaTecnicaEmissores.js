import React, { useState } from 'react';
import styles from './FichaTecnicaEmissores.module.css';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import tituloBonito from './Contatos.module.css';
import Footer from './layout/Footer';
import ScrollToTop from '../pages/layout/ScrollToTop';
import PedidosEmpresa from '../pages/PedidosEmpresa.module.css';
import ReactPaginate from 'react-paginate';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Pagination from './layout/PaginacaoTable/PaginacaoTable'
import DownloadlinkIcon from './Icon/FaDowload';

const options = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Emissor', label: 'Emissor' },
    { value: 'Descrição', label: 'Descrição' },
    { value: 'Valor Mínimo', label: 'Valor Mínimo' },
    { value: 'Valor Máximo', label: 'Valor Máximo' },
    { value: 'Download', label: 'Download' },
];


function FichaTecnicaEmissores() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const data = [
        { id: 1, Emissor: 'Emissor 1', Descricao: 'Descrição 1', ValorMinimo: 'R$100,00', ValorMaximo: 'R$1000,00', Download: '' },
        { id: 2, Emissor: 'Emissor 2', Descricao: 'Descrição 2', ValorMinimo: 'R$200,00', ValorMaximo: 'R$2000,00', Download: '' },
        { id: 3, Emissor: 'Emissor 3', Descricao: 'Descrição 3', ValorMinimo: 'R$300,00', ValorMaximo: 'R$3000,00', Download: '' },
        { id: 4, Emissor: 'Emissor 4', Descricao: 'Descrição 4', ValorMinimo: 'R$400,00', ValorMaximo: 'R$4000,00', Download: '' },
        { id: 5, Emissor: 'Emissor 5', Descricao: 'Descrição 5', ValorMinimo: 'R$500,00', ValorMaximo: 'R$5000,00', Download: '' },
        { id: 6, Emissor: 'Emissor 6', Descricao: 'Descrição 6', ValorMinimo: 'R$600,00', ValorMaximo: 'R$6000,00', Download: '' },
        { id: 7, Emissor: 'Emissor 7', Descricao: 'Descrição 7', ValorMinimo: 'R$700,00', ValorMaximo: 'R$7000,00', Download: '' },
        { id: 8, Emissor: 'Emissor 8', Descricao: 'Descrição 8', ValorMinimo: 'R$800,00', ValorMaximo: 'R$8000,00', Download: '' },
        { id: 9, Emissor: 'Emissor 9', Descricao: 'Descrição 9', ValorMinimo: 'R$900,00', ValorMaximo: 'R$9000,00', Download: '' },
        { id: 11, Emissor: 'Emissor 10', Descricao: 'Descrição 10', ValorMinimo: 'R$1000,00', ValorMaximo: 'R$10000,00', Download: '' },
        { id: 12, Emissor: 'Emissor 10', Descricao: 'Descrição 10', ValorMinimo: 'R$1000,00', ValorMaximo: 'R$10000,00', Download: '' },
        { id: 13, Emissor: 'Emissor 10', Descricao: 'Descrição 10', ValorMinimo: 'R$1000,00', ValorMaximo: 'R$10000,00', Download: '' },
        { id: 14, Emissor: 'Emissor 10', Descricao: 'Descrição 10', ValorMinimo: 'R$1000,00', ValorMaximo: 'R$10000,00', Download: '' },
        { id: 15, Emissor: 'Emissor 10', Descricao: 'Descrição 10', ValorMinimo: 'R$1000,00', ValorMaximo: 'R$10000,00', Download: '' },
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
            <h2 className={tituloBonito.contatos_h2}>Ficha Técnica Emissores</h2>
            <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
                <div className={styles.flex_box_filtros}>
                <MostrarRegistros />
                    <div className={styles.FichaTecnicaEmissores_label_left}>
                    <div className={styles.label_ordenar}>
                        <label className={styles.label_options} htmlFor="ordenar">
                            <span className={styles.ordenar}>Ordenar por:</span>
                        </label>
                        <select id="ordenar" name="ordenar">
                            {options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    </div>
                    <div className={styles.FichaTecnicaEmissores_label_right}>
                        <label className={styles.label_buscar}>Buscar:
                            <input type="search" name="emissor" aria-controls="tb1Fornecedores" placeholder="Digite o nome do emissor" />
                        </label>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Emissor</th>
                            <th>Descrição</th>
                            <th>Valor mínimo</th>
                            <th>Valor máximo</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.Emissor}</td>
                                <td>{contact.Descricao}</td>
                                <td>{contact.ValorMinimo}</td>
                                <td>{contact.ValorMaximo}</td>
                                <td><DownloadlinkIcon/></td>
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
                <ScrollToTop />

                </div>
                <Footer />
        </>
    );
}

export default FichaTecnicaEmissores;
