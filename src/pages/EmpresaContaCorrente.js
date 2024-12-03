import styles from './EmpresaContaCorrente.module.css';
import Header from './layout/Header';
import MenuEmpresa from './layout/MenuEmpresa';
import CabeçarioEmpresa2 from './layout/cabeçarios/CabeçarioEmpresa2';
import contatosStyles from './Contatos.module.css';
import Footer from './layout/Footer';
import React, { useState } from 'react';
import ScrollToTop from '../pages/layout/ScrollToTop';
import PedidosEmpresa from './PedidosEmpresa.module.css';
import MostrarRegistros from './layout/FiltroMostrarRegistros/MostrarRegistros'
import Usuarios from './Usuarios.module.css';
import Pagination from './layout/PaginacaoTable/PaginacaoTable'

function EmpresaContaCorrente() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showFacialTable, setShowFacialTable] = useState(true);
    const [showTaxaTable, setShowTaxaTable] = useState(false);
    const [showHistoricoTable, setShowHistoricoTable] = useState(false);
    const [selectedOnOff, setSelectedOnOff] = useState({ facialDesconto: null, facialCobranca: null, taxaDesconto: null, taxaCobranca: null });
    const [currentPage, setCurrentPage] = useState(1);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleFacial = () => {
        setShowFacialTable(true);
        setShowTaxaTable(false);
        setShowHistoricoTable(false);
    };

    const toggleTaxa = () => {
        setShowFacialTable(false);
        setShowTaxaTable(true);
        setShowHistoricoTable(false);
    };

    const toggleHistorico = () => {
        setShowFacialTable(false);
        setShowTaxaTable(false);
        setShowHistoricoTable(true);
    };

    const handleOnOffClick = (section, value) => {
        setSelectedOnOff((prevState) => ({ ...prevState, [section]: value }));
    };

      //facial
    const dataFacial = [
      
        { id:1,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:3,
            numero: "008560",
            numeroCobranca: "8888",
            data: "02/09/2024",
            tipo: "Produto Recorrente Facial(Débito)",
            descricao: "Débito facial para TOTALPASS NICOLE",
            registradoPor: "NICOLE CRUZ",
            credito: "R$ 400.000,00",
            debito: "-R$ 348.550,00",
          },
          { id:4,
            numero: "008560",
            numeroCobranca: "8888",
            data: "02/09/2024",
            tipo: "Produto Recorrente Facial(Débito)",
            descricao: "Débito facial para TOTALPASS NICOLE",
            registradoPor: "NICOLE CRUZ",
            credito: "R$ 400.000,00",
            debito: "-R$ 348.550,00",
          },
          { id:5,
            numero: "008560",
            numeroCobranca: "8888",
            data: "02/09/2024",
            tipo: "Produto Recorrente Facial(Débito)",
            descricao: "Débito facial para TOTALPASS NICOLE",
            registradoPor: "NICOLE CRUZ",
            credito: "R$ 400.000,00",
            debito: "-R$ 348.550,00",
          },
          { id:6,
            numero: "008560",
            numeroCobranca: "8888",
            data: "02/09/2024",
            tipo: "Produto Recorrente Facial(Débito)",
            descricao: "Débito facial para TOTALPASS NICOLE",
            registradoPor: "NICOLE CRUZ",
            credito: "R$ 400.000,00",
            debito: "-R$ 348.550,00",
          },
          { id:2,
            numero: "008560",
            numeroCobranca: "8888",
            data: "02/09/2024",
            tipo: "Produto Recorrente Facial(Débito)",
            descricao: "Débito facial para TOTALPASS NICOLE",
            registradoPor: "NICOLE CRUZ",
            credito: "R$ 400.000,00",
            debito: "-R$ 348.550,00",
          },
        {
            id:7,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },

        { id:1,
            numero: "008560",
            numeroCobranca: "8888",
            data: "02/09/2024",
            tipo: "Produto Recorrente Facial(Débito)",
            descricao: "Débito facial para TOTALPASS NICOLE",
            registradoPor: "NICOLE CRUZ",
            credito: "R$ 400.000,00",
            debito: "-R$ 348.550,00",
          },
          { id:3,
              numero: "008560",
              numeroCobranca: "8888",
              data: "02/09/2024",
              tipo: "Produto Recorrente Facial(Débito)",
              descricao: "Débito facial para TOTALPASS NICOLE",
              registradoPor: "NICOLE CRUZ",
              credito: "R$ 400.000,00",
              debito: "-R$ 348.550,00",
            },
            { id:4,
              numero: "008560",
              numeroCobranca: "8888",
              data: "02/09/2024",
              tipo: "Produto Recorrente Facial(Débito)",
              descricao: "Débito facial para TOTALPASS NICOLE",
              registradoPor: "NICOLE CRUZ",
              credito: "R$ 400.000,00",
              debito: "-R$ 348.550,00",
            },
            { id:5,
              numero: "008560",
              numeroCobranca: "8888",
              data: "02/09/2024",
              tipo: "Produto Recorrente Facial(Débito)",
              descricao: "Débito facial para TOTALPASS NICOLE",
              registradoPor: "NICOLE CRUZ",
              credito: "R$ 400.000,00",
              debito: "-R$ 348.550,00",
            },
            { id:6,
              numero: "008560",
              numeroCobranca: "8888",
              data: "02/09/2024",
              tipo: "Produto Recorrente Facial(Débito)",
              descricao: "Débito facial para TOTALPASS NICOLE",
              registradoPor: "NICOLE CRUZ",
              credito: "R$ 400.000,00",
              debito: "-R$ 348.550,00",
            },
            { id:2,
              numero: "008560",
              numeroCobranca: "8888",
              data: "02/09/2024",
              tipo: "Produto Recorrente Facial(Débito)",
              descricao: "Débito facial para TOTALPASS NICOLE",
              registradoPor: "NICOLE CRUZ",
              credito: "R$ 400.000,00",
              debito: "-R$ 348.550,00",
            },
          {
              id:7,
            numero: "008560",
            numeroCobranca: "8888",
            data: "02/09/2024",
            tipo: "Produto Recorrente Facial(Débito)",
            descricao: "Débito facial para TOTALPASS NICOLE",
            registradoPor: "NICOLE CRUZ",
            credito: "R$ 400.000,00",
            debito: "-R$ 348.550,00",
          },
        
      ];
      
//taxa

const dataTaxa = [
    { id:1,
        numero: "008560",
        numeroCobranca: "8888",
        data: "02/09/2024",
        tipo: "Produto Recorrente TAXA(Débito)",
        descricao: "Débito TAXA para TOTALPASS NICOLE",
        registradoPor: "NICOLE CRUZ",
        credito: "R$ 400.000,00",
        debito: "-R$ 348.550,00",
      },
      { id:3,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:4,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:5,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:6,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:2,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
      {
          id:7,
        numero: "008560",
        numeroCobranca: "8888",
        data: "02/09/2024",
        tipo: "Produto Recorrente TAXA(Débito)",
        descricao: "Débito TAXA para TOTALPASS NICOLE",
        registradoPor: "NICOLE CRUZ",
        credito: "R$ 400.000,00",
        debito: "-R$ 348.550,00",
      },
  
    { id:1,
        numero: "008560",
        numeroCobranca: "8888",
        data: "02/09/2024",
        tipo: "Produto Recorrente TAXA(Débito)",
        descricao: "Débito TAXA para TOTALPASS NICOLE",
        registradoPor: "NICOLE CRUZ",
        credito: "R$ 400.000,00",
        debito: "-R$ 348.550,00",
      },
      { id:3,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:4,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:5,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:6,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:2,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente TAXA(Débito)",
          descricao: "Débito TAXA para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
      {
          id:7,
        numero: "008560",
        numeroCobranca: "8888",
        data: "02/09/2024",
        tipo: "Produto Recorrente TAXA(Débito)",
        descricao: "Débito TAXA para TOTALPASS NICOLE",
        registradoPor: "NICOLE CRUZ",
        credito: "R$ 400.000,00",
        debito: "-R$ 348.550,00",
      },
]

//historico Conta Corrente
const dataHistorico = [
    { id:1,
        numero: "008560",
        numeroCobranca: "8888",
        data: "02/09/2024",
        tipo: "Produto Recorrente Facial(Débito)",
        descricao: "Débito facial para TOTALPASS NICOLE",
        registradoPor: "NICOLE CRUZ",
        credito: "R$ 400.000,00",
        debito: "-R$ 348.550,00",
      },
      { id:3,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:4,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:5,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:6,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:2,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
      {
          id:7,
        numero: "008560",
        numeroCobranca: "8888",
        data: "02/09/2024",
        tipo: "Produto Recorrente Facial(Débito)",
        descricao: "Débito facial para TOTALPASS NICOLE",
        registradoPor: "NICOLE CRUZ",
        credito: "R$ 400.000,00",
        debito: "-R$ 348.550,00",
      },
    { id:1,
        numero: "008560",
        numeroCobranca: "8888",
        data: "02/09/2024",
        tipo: "Produto Recorrente Facial(Débito)",
        descricao: "Débito facial para TOTALPASS NICOLE",
        registradoPor: "NICOLE CRUZ",
        credito: "R$ 400.000,00",
        debito: "-R$ 348.550,00",
      },
      { id:3,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:4,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:5,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:6,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
        { id:2,
          numero: "008560",
          numeroCobranca: "8888",
          data: "02/09/2024",
          tipo: "Produto Recorrente Facial(Débito)",
          descricao: "Débito facial para TOTALPASS NICOLE",
          registradoPor: "NICOLE CRUZ",
          credito: "R$ 400.000,00",
          debito: "-R$ 348.550,00",
        },
      {
          id:7,
        numero: "008560",
        numeroCobranca: "8888",
        data: "02/09/2024",
        tipo: "Produto Recorrente Facial(Débito)",
        descricao: "Débito facial para TOTALPASS NICOLE",
        registradoPor: "NICOLE CRUZ",
        credito: "R$ 400.000,00",
        debito: "-R$ 348.550,00",
      },
] 

const itemsPerPagef = 10;//quantidade que deve aparecer na tela por vez
    const offsetf = (currentPage - 1) * itemsPerPagef;
    const currentItemsf = dataFacial.slice(offsetf, offsetf + itemsPerPagef);



    const itemsPerPaget = 10;//quantidade que deve aparecer na tela por vez
    const offsett = (currentPage - 1) * itemsPerPaget;
    const currentItemst = dataTaxa.slice(offsett, offsett + itemsPerPaget);
    

    const itemsPerPageh = 10;//quantidade que deve aparecer na tela por vez
    const offseth = (currentPage - 1) * itemsPerPageh;
    const currentItemsh = dataHistorico.slice(offseth, offseth + itemsPerPageh);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1); // selected começa em 0
    };



    return (
        <>
        <Header />
        <CabeçarioEmpresa2 />
        <MenuEmpresa toggleMenu={toggleMenu} isOpen={isMenuOpen} />
    
        <h2 className={contatosStyles.contatos_h2}>Empresa Conta Corrente</h2>
        <div className={`${PedidosEmpresa.container_table} ${isMenuOpen ? PedidosEmpresa.smallTable : ''}`}>
            <div className={styles.button_conta_corrente}>

                <button onClick={toggleFacial}>Facial</button>
                <button style={{ display: showFacialTable ? 'inline-block' : 'none' }}>
                    <i className="fas fa-plus"></i> Facial
                </button>
    
                <div className="onoff-container" style={{ display: showFacialTable ? 'block' : 'none' }}>
                    <div>
                        <span
                            className={selectedOnOff.facialCobranca === 'on' ? styles.active : ''}
                            onClick={() => handleOnOffClick('facialCobranca', 'on')}
                        >On</span>
                        <span
                            className={selectedOnOff.facialCobranca === 'off' ? styles.active : ''}
                            onClick={() => handleOnOffClick('facialCobranca', 'off')}
                        >Off</span>
                        Cobrança Facial
                    </div>
                </div>
                <button onClick={toggleTaxa}>Taxa</button>
                <button style={{ display: showTaxaTable ? 'inline-block' : 'none' }}>
                    <i className="fas fa-plus"></i> Taxa
                </button>
    
                <div className="onoff-container" style={{ display: showTaxaTable ? 'block' : 'none' }}>
                    <div>
                        <span
                            className={selectedOnOff.taxaDesconto === 'on' ? styles.active : ''}
                            onClick={() => handleOnOffClick('taxaDesconto', 'on')}
                        >On</span>
                        <span
                            className={selectedOnOff.taxaDesconto === 'off' ? styles.active : ''}
                            onClick={() => handleOnOffClick('taxaDesconto', 'off')}
                        >Off</span>
                        Desconto Taxa
                    </div>
                    <div>
                        <span
                            className={selectedOnOff.taxaCobranca === 'on' ? styles.active : ''}
                            onClick={() => handleOnOffClick('taxaCobranca', 'on')}
                        >On</span>
                        <span
                            className={selectedOnOff.taxaCobranca === 'off' ? styles.active : ''}
                            onClick={() => handleOnOffClick('taxaCobranca', 'off')}
                        >Off</span>
                        Cobrança Taxa
                    </div>
                </div>
                <button onClick={toggleHistorico}>Histórico da Conta Corrente</button>
                <div>
                    <h3 className={styles.histórico_saldo}>Saldo:</h3>
                </div>
                <MostrarRegistros/>

                {/* Tabela de lançamentos FACIAL */}
                {showFacialTable && (
                    <>
                    <table>
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Nº Cobrança</th>
                                <th>Data</th>
                                <th>Tipo</th>
                                <th>Descrição</th>
                                <th>Registrado por</th>
                                <th>Crédito</th>
                                <th>Débito</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItemsf.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.numero}</td>
                                    <td>{contact.numeroCobranca}</td>
                                    <td>{contact.data}</td>
                                    <td>{contact.tipo}</td>
                                    <td>{contact.descricao}</td>
                                    <td>{contact.registradoPor}</td>
                                    <td>{contact.credito}</td>
                                    <td>{contact.debito}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                     <Pagination
                     totalItems={dataFacial.length}
                     itemsPerPage={itemsPerPageh}
                    onPageChange={(newItems) => handlePageChange(newItems, 'facial')}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    
                />
               </>
                )}
    
                {/* Tabela de lançamentos Taxa */}
                {showTaxaTable && (
                    <>
                    <table>
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Nº Cobrança</th>
                                <th>Data</th>
                                <th>Tipo</th>
                                <th>Descrição</th>
                                <th>Registrado por</th>
                                <th>Crédito</th>
                                <th>Débito</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItemst.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.numero}</td>
                                    <td>{contact.numeroCobranca}</td>
                                    <td>{contact.data}</td>
                                    <td>{contact.tipo}</td>
                                    <td>{contact.descricao}</td>
                                    <td>{contact.registradoPor}</td>
                                    <td>{contact.credito}</td>
                                    <td>{contact.debito}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                      <Pagination
                      totalItems={dataTaxa.length}
                      itemsPerPage={itemsPerPageh}
                     onPageChange={(newItems) => handlePageChange(newItems, 'taxa')}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     
                 />
                </>

                )}
                {/* Tabela Históricos */}
                {showHistoricoTable && (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nº</th>
                                    <th>Nº Cobrança</th>
                                    <th>Data</th>
                                    <th>Tipo</th>
                                    <th>Descrição</th>
                                    <th>Registrado por</th>
                                    <th>Crédito</th>
                                    <th>Débito</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItemsh.map(contact => (
                                    <tr key={contact.id}>
                                        <td>{contact.numero}</td>
                                        <td>{contact.numeroCobranca}</td>
                                        <td>{contact.data}</td>
                                        <td>{contact.tipo}</td>
                                        <td>{contact.descricao}</td>
                                        <td>{contact.registradoPor}</td>
                                        <td>{contact.credito}</td>
                                        <td>{contact.debito}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination
                             totalItems={dataHistorico.length }
                             itemsPerPage={itemsPerPageh}
                            onPageChange={(newItems) => handlePageChange(newItems, 'historico')}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                        />
                    </>
                )}
            </div>
        </div>
        <ScrollToTop />
        <Footer />
    </>
);
}

export default EmpresaContaCorrente;