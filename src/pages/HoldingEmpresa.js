import styles from './DepartamentoEmpresa.module.css';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import React, { useState } from 'react';
import tituloBonito from './Contatos.module.css';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import Footer from './layout/Footer';
import Adicionar from '../pages/buttom/Adicionar';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Pagination from './layout/PaginacaoTable/PaginacaoTable'
import PedidosEmpresa from './PedidosEmpresa.module.css';
import Usuarios from './Usuarios.module.css';
import PopUpACP from './layout/PopUp/AdicionarComPesquisa/PopUpACP'
import UnlinkIcon from './Icon/FaUnlink'
function HoldingEmpresa() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
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

    // Função para fechar o pop-up de edição
    const closePopup = () => {
        setIsPopupOpen(false);
        setCurrentContact({ descricao: '' });
    };

    // Função para lidar com a mudança no campo de edição de descrição
    const handleChange = (e) => {
        const { value } = e.target;
        setCurrentContact({ ...currentContact, descricao: value });
    };

   // const handleAddClick = () => {
       // navigate('/ChamadosAdicionar'); // ele vai para a parte de adicionar um novo chamado
   // };

   const [formValues, setFormValues] = useState({
    descricao: "",
  });

  // Configuração dinâmica dos campos
  const fields = [
    { label: "Holding", name: "descricao" },
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

   const data =[
    { id: 1, Razão_Social: 'Holding - MARABRAZ COMERCIAL LTDA', CNPJ_CPF: '19.922.504/0001-97',Nome_fantasia: 'julinho Paçocas', Desassociar:'' },
    { id: 2, Razão_Social: 'Holding - MARABRAZ COMERCIAL LTDA', CNPJ_CPF: '19.922.504/0001-97',Nome_fantasia: 'julinho Paçocas', Desassociar:'' },
    { id: 3, Razão_Social: 'Holding - MARABRAZ COMERCIAL LTDA', CNPJ_CPF: '19.922.504/0001-97',Nome_fantasia: 'julinho Paçocas', Desassociar:'' },
    { id: 4, Razão_Social: 'JJC CONFEITARIA EIRELI - EPP', CNPJ_CPF: '19.922.504/0001-97',Nome_fantasia: 'julinho Paçocas', Desassociar:'' },
    { id: 5, Razão_Social: 'JJC CONFEITARIA EIRELI - EPP', CNPJ_CPF: '19.922.504/0001-97',Nome_fantasia: 'julinho Paçocas', Desassociar:'' },
    { id: 6, Razão_Social: 'JJC CONFEITARIA EIRELI - EPP', CNPJ_CPF: '19.922.504/0001-97',Nome_fantasia: 'julinho Paçocas' ,Desassociar:'' },
    { id: 7, Razão_Social: 'JJC CONFEITARIA EIRELI - EPP', CNPJ_CPF: '19.922.504/0001-97',Nome_fantasia: 'julinho Paçocas', Desassociar:'' },
    { id: 8, Razão_Social: 'JJC CONFEITARIA EIRELI - EPP', CNPJ_CPF: '19.922.504/0001-97',Nome_fantasia: 'julinho Paçocas', Desassociar:'' },
    { id: 9, Razão_Social: 'JJC CONFEITARIA EIRELI - EPP', CNPJ_CPF: '19.922.504/0001-97',Nome_fantasia: 'julinho Paçocas' ,Desassociar:'' }
]

const itemsPerPage = 10;
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
            <h2 className={tituloBonito.contatos_h2}>Holding</h2>

            <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
            <div className={Usuarios.flex_button_user}>
                        <Adicionar onAdd={openPopup} />
                        <MostrarRegistros  />
                        </div>
                <div>
                
                <table>
                        <thead>
                            <tr>
                                <th>Razão Social</th>
                                <th>CNPJ / CPF</th>
                                <th>Nome Fantasia</th>
                                <th>Desassociar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {currentItems.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.Razão_Social} 
                                    </td>
                                    <td>{contact.CNPJ_CPF}</td>
                                    <td>{contact.Nome_fantasia}</td>
                                    <td><UnlinkIcon/>{contact.Desassociar}
                                     </td>
                              
                                    
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
<PopUpACP
  customWidth="650px" // Altere a largura do Popup
  customHeight="300px" // Altere a altura do Popup

        title="Editar Holding"
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

export default HoldingEmpresa;
