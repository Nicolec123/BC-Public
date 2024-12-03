import styles from './DepartamentoEmpresa.module.css';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import React, { useState } from 'react';
import tituloBonito from './Contatos.module.css';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import Footer from './layout/Footer';
import Adicionar from '../pages/buttom/Adicionar';
import PedidosEmpresa from './PedidosEmpresa.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Pagination from './layout/PaginacaoTable/PaginacaoTable'
import Usuarios from './Usuarios.module.css';
import ImportacaoExportacao from './Importacao/Importacao/ImportacaoExpotacao.module.css';
import { FaTrash } from "react-icons/fa"; // Biblioteca de ícones (react-icons)
import PopUpASP from './layout/PopUp/AdicionarSemPesquisa/PopUpASP'
import PopUp from './layout/PopUp/Editar/PopUp'


function DepartamentoEmpresa() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpenAdicionar, setIsPopupOpenAdicionar] = useState(false);
    const [currentContact, setCurrentContact] = useState({ descricao: '' });
    const [currentPage, setCurrentPage] = useState(1);


    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para abrir o pop-up de edição com a descrição atual
    const openPopup = (contact = { descricao: '' }) => {
        setCurrentContact(contact);
        setIsPopupOpen(true);
    };


    // Função para lidar com a mudança no campo de edição de descrição
    const handleChange = (e) => {
        const { value } = e.target;
        setCurrentContact({ ...currentContact, descricao: value });
    };

   const openPopupAdcionar = () => {
    setIsPopupOpenAdicionar(true)
   };

    // Função para fechar o pop-up de edição
    const closePopupAdcionar = () => {
        setIsPopupOpenAdicionar(false)
    };
   
   const [formValues, setFormValues] = useState({
    descricao: "",
  });

  // Configuração dinâmica dos campos
  const fields = [
    { label: "Descrição", name: "descricao" },
  ];

  const Change = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = (e) => {
    e.preventDefault();
    alert(`Dados salvos: ${JSON.stringify(formValues)}`);
    setIsPopupOpen(false);
  };

  const handleClose = () => setIsPopupOpen(false);
   const data = [
    { id: 1, descricao: 'ADMINISTRATIVO', quantidade: 8, status: 'Ativo', remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> },
    { id: 2, descricao: 'FINANCEIRO', quantidade: 20, status: 'Desativo', remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> },
    { id: 3, descricao: 'RECURSOS HUMANOS', quantidade: 3, status: 'Desativo', remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> },
    { id: 4, descricao: 'GESTÃO', quantidade: 5, status: 'Ativo', remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> },
    { id: 5, descricao: 'TI', quantidade: 4, status: 'Ativo', remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> },
    { id: 6, descricao: 'COMPRAS', quantidade: 15, status: 'Ativo', remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> },
    { id: 7, descricao: 'LOGÍSTICA', quantidade: 10, status: 'Ativo', remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> },
    { id: 8, descricao: 'MÉDICO', quantidade: 2, status: 'Ativo', remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> },
    { id: 9, descricao: 'VETERINÁRIO', quantidade: 6, status: 'Ativo', remover: <FaTrash className={ImportacaoExportacao.lixeira_icon} /> }
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
            <h2 className={tituloBonito.contatos_h2}>Departamentos</h2>

            <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
                <div>
                <div className={Usuarios.flex_button_user}>
                <Adicionar onAdd={openPopupAdcionar} />
      {isPopupOpenAdicionar && (
        <>
          <PopUpASP 
          title='Departamentos'
            isOpen={isPopupOpenAdicionar}
            onClose={closePopupAdcionar}
            currentContact={currentContact}
            handleChange={handleChange}
            handleSave={handleSave}
            fields={fields} // Passa os campos dinamicamente

          />
        </>
      )}

                
                <MostrarRegistros/>
                </div>
                <table>
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>quant.Funcionários</th>
                                <th>Status</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.descricao}
                                    <FontAwesomeIcon 
                                            icon={faEdit} 
                                            className={styles.editIcon2} 
                                            onClick={() => openPopup({ descricao: contact.descricao })}
                                        />
    
                                    </td>
                                    <td>{contact.quantidade}</td>
                                    <td>{contact.status}</td>
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

            {isPopupOpen && (
                <>
           <PopUp
         
                 title="Departamento"
                 isOpen={isPopupOpen}
                 onClose={handleClose}
                 onSave={handleSave}
                 fields={fields} // Passa os campos dinamicamente
                 values={formValues} // Valores do formulário
                 onChange={Change} // Função para atualizar os valores
                 
               />
                           </>
            )}

            <Footer />
        </>
    );
}

export default DepartamentoEmpresa;
