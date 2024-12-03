import Departamento from './DepartamentoEmpresa.module.css';
import styles from './Usuarios.module.css'
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
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Pagination from './layout/PaginacaoTable/PaginacaoTable';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros';
import PopUpASP from './layout/PopUp/AdicionarSemPesquisa/PopUpASP'
import PopUp from './layout/PopUp/Editar/PopUp'
import { Select } from '@mui/material';

function Usuarios ()  {
    const [currentContact, setCurrentContact] = useState({ descricao: '' });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isPopupOpenAdicionar, setIsPopupOpenAdicionar] = useState(false);


    const [isMenuOpen, setIsMenuOpen] = useState(false);
  

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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

     
      const field = [
        { label: "Nome", name: "descricao" },
        { label: "Login", name: "descricao" },
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
        { id: 1, Status: 'Ativo', Login: '01781795000185', Nome: 'Nicole Daniele', Perfil: 'Administrador' },
        { id: 2, Status: 'Ativo', Login: '01781795000185', Nome: 'Nicole', Perfil: 'Administrador' },
        { id: 3, Status: 'Ativo', Login: '01781795000185', Nome: 'João', Perfil: 'Administrador' },
        { id: 4, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 5, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 6, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 7, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 8, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 9, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 10, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 11, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 12, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 13, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 14, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 15, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 16, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 17, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 18, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 19, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
        { id: 20, Status: 'Ativo', Login: '01781795000185', Nome: 'Danilo Silva', Perfil: 'Administrador' },
    ];

    const itemsPerPage = 10;
    const offset = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1); // selected começa em 0
    };

    const openPopup = (user = { Status: '' }) => {
        setCurrentContact(user);
        setIsPopupOpen(true);
    };

    const openPopupSenha = (user = { Senha: '' }) => {
        setCurrentContact(user);
        setIsPopupOpen(true);
    };


   

    const handleAddClick = () => {
        openPopup(); // Abre o pop-up com um novo usuário vazio
    };
 

    return (
        <>
            <Header />
            <CabeçarioEmpresa2 />
            <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} /> 
            <h2 className={tituloBonito.contatos_h2}>Usuarios</h2>

            <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
                <div>
                    <div className={styles.flex_button_user}>
                        <Adicionar onAdd={handleAddClick} />
                        <MostrarRegistros />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Senha</th>
                                <th>Login</th>
                                <th>Nome</th>
                                <th>Perfil</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(user => (
                                <tr key={user.id}>
                                    <td>
                                        {user.Status} 
                                        <FontAwesomeIcon 
                                            icon={faEdit} 
                                            className={Departamento.editIcon2} 
                                            onClick={() => openPopup({ Status: user.Status })}
                                        />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon 
                                            icon={faLock} 
                                            className={styles.editIconLock} 
                                            onClick={() => openPopupSenha({ Senha: user.Senha })}
                                        />
                                    </td>
                                    <td>{user.Login}</td>
                                    <td>{user.Nome}</td>
                                    <td><span className={styles.spandoidao}>{user.Perfil}</span></td>
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
                    customWidth="600px" // Altera a largura do Popup
                    customHeight="500px" // Altera a altura do Popup
                          title="Usuário" //props responsavel por titulos dinamicos
                          isOpen={isPopupOpen} //abre
                          onClose={handleClose}//fecha
                          onSave={handleSave} //finge que salva
                          field={field} // Passa os campos dinamicamente
                          values={formValues} // Valores do formulário
                          onChange={Change} // Função para atualizar os valores
                          
                        />
                                    </>
            )}

            <Footer />
        </>
    );
};

export default Usuarios;



















