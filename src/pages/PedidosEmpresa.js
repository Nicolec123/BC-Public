import React, { useState,} from 'react';
import styles from './PedidosEmpresa.module.css';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import tituloBonito from './Contatos.module.css';
import Footer from './layout/Footer';
import ScrollToTop from '../pages/layout/ScrollToTop';
import Adicionar from './buttom/Adicionar';

function PedidosEmpresa() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <Header />
            <CabeçarioEmpresa2 /> 
            <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} /> 
            <h2 className={tituloBonito.contatos_h2}>Pedidos</h2>
            <div className={`${styles.container_table} ${isMenuOpen ? styles.smallTable : ''}`}>

            <div className={styles.container_botoes}>
<Adicionar/>                
<button id={styles.botao}>2ª Via</button>
                <button id={styles.botao}>Relatório Pedidos</button>
            </div>
            <div className={styles.container_filtros}>
            <div className={styles.data_geracao}>
        <label htmlFor="data_inicial">Geração do pedido</label>
        <input type="date" id="data_inicial" className={styles.inputFiltro} placeholder="Data da Geração" />
    </div>
    <div className={styles.data_pagamento}>
        <label htmlFor="data_final">Data de pagamento</label>
        <input type="date" id="data_final" className={styles.inputFiltro} placeholder="Previsão de pagamento" />
    </div>
                <p className={styles.status_pedidos}>Status do Pedido</p>
                <select  className={styles.selectFiltro} id="status_pedido" >
                    <option value="">Todos</option>
                    <option value="A confirmar">A confirmar</option>
                    <option value="Liberado">Liberado</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Pago">Pago</option>
                    <option value="Crédito">Crédito</option>
                    <option value="Parcial">Parcial</option>
                </select>

                <p className={styles.status_regiao}>Região</p>
                <select  className={styles.selectFiltro} id="regiao_pedido" >
                    <option value="">Todos</option>
                    <option value="Região 1">São Paulo</option>
                    <option value="Região 2">São Paulo</option>
                    <option value="Região 3">Rio de Janeiro</option>
                    <option value="Região 3">Recife</option>
                    <option value="Região 3">Paraná</option>
                </select>
            </div>
       
                <table>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th className={styles.status_sem_borda}>Status</th>
                            <th>Pedido</th>
                            <th className={styles.colRegiao}>Região</th>
                            <th className={styles.colDatadaGeração}>Data da Geração</th>
                            <th className={styles.colPrevisãodoPagamento}>Previsão do Pagamento</th>
                            <th className={styles.colDatadoPagamento}>Data do Pagamento</th>
                            <th className={styles.colPrevisaoLiberacao}>Previsão de Liberação de Créditos</th>
                            <th>Benefícios + Repasses</th>
                            <th>Valor da Taxa</th>
                            <th>Valor Desconto</th>
                            <th>Valor Cobrança</th>
                            <th>Valor Total</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>123</td>
                            <td>Pago</td>
                            <td>600467</td>
                            <td>São Paulo</td>
                            <td>Região 1</td>
                            <td>10/01/2022</td>
                            <td>15/01/2022</td>
                            <td>20/01/2022</td>
                            <td>Benefício 1</td>
                            <td>$10.00</td>
                            <td>$5.00</td>
                            <td>$145.00</td>
                            <td>$150.00</td>
                        </tr>
                        <tr>
                            <td>456</td>
                            <td>Pago</td>
                            <td>600467</td>
                            <td>São Paulo</td>
                            <td>Região 2</td>
                            <td>15/02/2022</td>
                            <td>20/02/2022</td>
                            <td>25/02/2022</td>
                            <td>Benefício 2</td>
                            <td>$15.00</td>
                            <td>$10.00</td>
                            <td>$190.00</td>
                            <td>$200.00</td>
                        </tr>
                        <tr>
                            <td>789</td>
                            <td>A confirmar</td>
                            <td>600467</td>
                            <td>São Paulo</td>
                            <td>Região 3</td>
                            <td>20/03/2024</td>
                            <td>25/03/2024</td>
                            <td>30/03/2024</td>
                            <td>Benefício 3</td>
                            <td>$20.00</td>
                            <td>$15.00</td>
                            <td>$235.00</td>
                            <td>$250.00</td>
                        </tr>
                        <tr>
                            <td>789</td>
                            <td>Pago</td>
                            <td>600467</td>
                            <td>São Paulo</td>
                            <td>Região 3</td>
                            <td>20/03/2024</td>
                            <td>25/03/2024</td>
                            <td>30/03/2024</td>
                            <td>Benefício 3</td>
                            <td>$20.00</td>
                            <td>$15.00</td>
                            <td>$235.00</td>
                            <td>$250.00</td>
                        </tr>
                        <tr>
                            <td>789</td>
                            <td>Liberado</td>
                            <td>600467</td>
                            <td>São Paulo</td>
                            <td>Região 3</td>
                            <td>20/03/2024</td>
                            <td>25/03/2024</td>
                            <td>30/03/2024</td>
                            <td>Benefício 3</td>
                            <td>$20.00</td>
                            <td>$15.00</td>
                            <td>$235.00</td>
                            <td>$250.00</td>
                        </tr>
                        <tr>
                            <td>789</td>
                            <td>Pago</td>
                            <td>600467</td>
                            <td>São Paulo</td>
                            <td>Região 3</td>
                            <td>20/03/2024</td>
                            <td>25/03/2024</td>
                            <td>30/03/2024</td>
                            <td>Benefício 3</td>
                            <td>$20.00</td>
                            <td>$15.00</td>
                            <td>$235.00</td>
                            <td>$250.00</td>
                        </tr>
                        <tr>
                            <td>789</td>
                            <td>Liberado</td>
                            <td>600467</td>
                            <td>São Paulo</td>
                            <td>Região 3</td>
                            <td>20/03/2024</td>
                            <td>25/03/2024</td>
                            <td>30/03/2024</td>
                            <td>Benefício 3</td>
                            <td>$20.00</td>
                            <td>$15.00</td>
                            <td>$235.00</td>
                            <td>$250.00</td>
                        </tr>
                        <tr>
                            <td>789</td>
                            <td>Liberado</td>
                            <td>600467</td>
                            <td>São Paulo</td>
                            <td>Região 3</td>
                            <td>20/03/2024</td>
                            <td>25/03/2024</td>
                            <td>30/03/2024</td>
                            <td>Benefício 3</td>
                            <td>$20.00</td>
                            <td>$15.00</td>
                            <td>$235.00</td>
                            <td>$250.00</td>
                        </tr>
                        <tr>
                            <td>789</td>
                            <td>Liberado</td>
                            <td>600467</td>
                            <td>São Paulo</td>
                            <td>Região 3</td>
                            <td>20/03/2024</td>
                            <td>25/03/2024</td>
                            <td>30/03/2024</td>
                            <td>Benefício 3</td>
                            <td>$20.00</td>
                            <td>$15.00</td>
                            <td>$235.00</td>
                            <td>$250.00</td>
                        </tr>
                    </tbody>
                </table>
                <ScrollToTop />
            </div>
            <Footer />
        </>
    );
}

export default PedidosEmpresa;
