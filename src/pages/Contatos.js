import styles from './Contatos.module.css';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import React, { useState } from 'react';
import { FaUser, FaPhone, FaMobileAlt, FaEnvelope, FaEdit, FaBuilding, FaIdBadge } from 'react-icons/fa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import Adicionar from './buttom/Adicionar';
import Footer from './layout/Footer';

function Contatos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para abrir o pop-up de edição ou adição
  const openPopup = (contact = { nome: '', telefoneFixo: '', celular: '', email: '', departamento: '', funcao: '' }) => {
    setCurrentContact(contact);
    setIsPopupOpen(true);
  };

  // Função para fechar o pop-up de edição
  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentContact(null);
  };

  // Função para lidar com a mudança nos campos de edição
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentContact({ ...currentContact, [name]: value });
  };

  return (
    <>
      <Header />
      <CabeçarioEmpresa2 />
      <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />
      <div>
        <h2 className={styles.contatos_h2} isOpen={isMenuOpen}>Contatos</h2>
        <div className={`${styles.container_table} ${isMenuOpen ? styles.smallTable3 : ''}`}>
          <Adicionar onAdd={() => openPopup()} />
          <ul className={styles.contatos_lista}>
            {[
              { id: 1, nome: 'John Doe', telefoneFixo: '(11) 1234-5678', celular: '(11) 91234-5678', email: 'john.doe@example.com', departamento: 'Financeiro', funcao: 'Analista' },
              { id: 2, nome: 'Jane Smith', telefoneFixo: '(11) 2345-6789', celular: '(11) 92345-6789', email: 'jane.smith@example.com', departamento: 'RH', funcao: 'Gerente' },
              { id: 3, nome: 'Mike Johnson', telefoneFixo: '(11) 3456-7890', celular: '(11) 93456-7890', email: 'mike.johnson@example.com', departamento: 'TI', funcao: 'Desenvolvedor' },
              { id: 4, nome: 'Sarah Williams', telefoneFixo: '(11) 4567-8901', celular: '(11) 94567-8901', email: 'sarah.williams@example.com', departamento: 'Marketing', funcao: 'Coordenadora' }
            ].map(contact => (
              <li key={contact.id} className={styles.contato_item}>
                <FaEdit className={styles.edit_icon} onClick={() => openPopup(contact)} />
                <div className={styles.contato_info}><FaBuilding /> Departamento: {contact.departamento}</div>
                <div className={styles.contato_info}><FaIdBadge /> Função: {contact.funcao}</div>
                <div className={styles.contato_info}><FaUser /> Nome: {contact.nome}</div>
                <div className={styles.contato_info}><FaPhone /> Telefone Fixo: {contact.telefoneFixo}</div>
                <div className={styles.contato_info}><FaMobileAlt /> Celular: {contact.celular}</div>
                <div className={styles.contato_info}><FaEnvelope /> Email: {contact.email}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popup_inner}>
            <h2>{currentContact.id ? 'Editar Contato' : 'Adicionar Contato'}</h2>
            <form>
              <label>
                Nome:
                <input type="text" name="nome" value={currentContact.nome} onChange={handleChange} />
              </label>
              <label>
                Telefone Fixo:
                <input type="text" name="telefoneFixo" value={currentContact.telefoneFixo} onChange={handleChange} />
              </label>
              <label>
                Celular:
                <input type="text" name="celular" value={currentContact.celular} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={currentContact.email} onChange={handleChange} />
              </label>
              <label>
                Departamento:
                <select name="departamento" value={currentContact.departamento} onChange={handleChange}>
                  <option value="Financeiro">Financeiro</option>
                  <option value="RH">RH</option>
                  <option value="TI">TI</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </label>
              <label>
                Função:
                <select name="funcao" value={currentContact.funcao} onChange={handleChange}>
                  <option value="Analista">Analista</option>
                  <option value="Gerente">Gerente</option>
                  <option value="Desenvolvedor">Desenvolvedor</option>
                  <option value="Coordenadora">Coordenadora</option>
                </select>
              </label>
              <button id={styles.salvar}type="submit">{currentContact.id? 'Salvar' : 'Salvar'}</button>
              <button type="button" onClick={closePopup}>Fechar</button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Contatos;
