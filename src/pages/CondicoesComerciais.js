import styles from  './CondicoesComerciais.module.css'
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import React, { useState } from 'react';
import tituloBonito from './Contatos.module.css';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import Footer from './layout/Footer';
import Adicionar from '../pages/buttom/Adicionar';
import PedidosEmpresa from './PedidosEmpresa.module.css';
import { useNavigate } from 'react-router-dom';

import EditLinkIcon from'./Icon/FaEdit'
import { FaCar } from 'react-icons/fa';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function CondicoesComerciais(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpenAdicionar, setIsPopupOpenAdicionar] = useState(false);
    const [currentContact, setCurrentContact] = useState({ descricao: '' });
    const [currentPage, setCurrentPage] = useState(1);


    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

const handleAdd = () => {
    setIsPopupOpenAdicionar(true);
};
   
return (
    <>
      <Header />
      <CabeçarioEmpresa2 />
      <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />
      <h2 className={tituloBonito.contatos_h2}>Condicões Comerciais</h2>
      <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
        <div className={styles.flex_condicoes_comerciais_button}>
        <Adicionar onAdd={handleAdd} title="Configurar" />

        <Adicionar onAdd={handleAdd} title="Simular" />

              
          
        </div>
        <div className={styles.container_condicoes_comerciais}>
         <div className={styles.container_beneficios}>
            <h3 className={styles.condicoes_comerciais_h3}>Benefícios: </h3>
            <div className={styles.beneficios}>
                <table >
                    <thead>
                        <tr>
                            <th>Transporte</th>
                            <th>Alimentação/Refeição</th>
                            <th>Cartões/Emissor e Fornecedor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><FaCar/></td>
                            <td><RestaurantIcon/></td>
                            <td><CreditCardIcon/></td>
                        </tr>
                        <tr>
                        <td><FaCar/></td>
                            <td><RestaurantIcon/></td>
                            <td><CreditCardIcon/></td>
                        </tr>
                        <tr>
                        <td><FaCar/></td>
                            <td><RestaurantIcon/></td>
                            <td><CreditCardIcon/></td>
                        </tr>
                        <tr>
                        <td><FaCar/></td>
                            <td><RestaurantIcon/></td>
                            <td><CreditCardIcon/></td>
                        </tr>
                        <tr>
                         <td><FaCar/></td>
                            <td><RestaurantIcon/></td>
                            <td><CreditCardIcon/></td>
                        </tr>
                        <tr></tr>
                </tbody>
                </table>
            </div>
            </div>
            <div className={styles.Lista_condicoes_comerciais}>
                <div className={styles.flex_condicoes_comerciais_span}>
            <p className={styles.paragrafo_regioes}>Regiões Aplicadas:</p>
                <div className={styles.span_badge_primary}>
               <span className={styles.badge_primary}>SP</span>
                <span className={styles.badge_primary}>FL</span>
                <span className={styles.badge_primary}>RJ</span>
                </div>
                </div>
                <div className={styles.condicoes_comerciais}>
  <div className={styles.grid_container}>
    <ul className={styles.container_lista_condicoes_comerciais}>
      <u>Detalhes</u>
      <li className={styles.flex_icons}>% Repasse de 100%</li>
      <li className={styles.flex_icons}>
        TAXA ADMINISTRATIVA : 8% <EditLinkIcon color="#EE8421" />
      </li>
      <li className={styles.flex_icons}>
        TAXA DE ENTREGA : R$ 30,00 <EditLinkIcon color="#EE8421" />
      </li>
      <li className={styles.flex_icons}>
        TAXA DE PROCESSAMENTO : 15 tarifa(s)
        <EditLinkIcon color="#EE8421" />
      </li>
      <li className={styles.flex_icons}>
        TAXA DE ATENDIMENTO : 10 tarifa(s)
        <EditLinkIcon color="#EE8421" />
      </li>
      <li className={styles.flex_icons}>
        TAXA SUCESSO ECONOMIA : 40%
        <EditLinkIcon color="#EE8421" />
      </li>
      <li className={styles.flex_icons}>
        TAXA MÍNIMA : R$ 29,90
        <EditLinkIcon color="#EE8421" />
      </li>
      <li className={styles.flex_icons}>
        TAXA ENTREGA 2° VIA : R$ 0,00
        <EditLinkIcon color="#EE8421" />
      </li>
    </ul>
    <ul className={styles.container_lista_condicoes_comerciais}>
      <li className={styles.flex_icons}>
        VALOR BOLETO : R$ 3,50 <EditLinkIcon color="#EE8421" />
      </li>
      <li className={styles.flex_icons}>
        EMISSÃO DE 1° VIA : R$ 0,00 <EditLinkIcon color="#EE8421" />
      </li>
      <li className={styles.flex_icons}>
        EMISSÃO DE 2° VIA : R$ 50,00 <EditLinkIcon color="#EE8421" />
      </li>
    </ul>
    <ul className={styles.container_lista_condicoes_comerciais}>
      <li className={styles.flex_icons}>
        ENTREGA DE CARTÃO : R$ 0,00 <EditLinkIcon color="#EE8421" />
      </li>
      <li className={styles.flex_icons}>
        PRAZO DE ENTREGA : 5 dias úteis <EditLinkIcon color="#EE8421" />
      </li>
    </ul>
  </div>
  </div>
  </div>
  </div>
  </div>
  <Footer/>
  </>
)
}

export default CondicoesComerciais;

