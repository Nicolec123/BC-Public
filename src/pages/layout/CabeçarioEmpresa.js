import React, { useState } from 'react';
import styles from './CabeçarioEmpresa.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function CabeçarioEmpresa() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Função que alterna o estado de expansão
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.CabeçarioEmpresaContainer} ${isExpanded ? styles.expanded : ''}`}>
            <div className={styles.header}>
                <span className={styles.badge_primary}>Beneficio Certo</span>
                <span className={styles.badge_primary_plano}>Plano:__</span>
                <span className={styles.badge_primary_plano}>PJ</span>
                <span className={styles.badge_primary}>PRI</span>
                <span className={styles.badge_primary_pospago}>Pós-Pago</span>
                <span className={styles.badge_primary_ativo}>Ativo</span>
                <span className={styles.badge_primary}>341 -(B Digital) Itaú</span>
                <span className={styles.bold}>Marabraz</span>
                        <span className={styles.page_meta}>20512</span>
                        <span className={styles.divider}>01.781.795/0001-85</span>

                             {/* Esta seção será oculta até o ícone de expandir ser clicado */}
                {isExpanded && (
                    <>
                        <span className={styles.badge_primary}>Desde:22/05/2024</span>

                        <span className={styles.divider}>São Paulo-SP-Suldeste</span>

                
                        <span className={styles.badge_primary}>Carteira: 109 | Agência:8451-0| Conta:36465-0</span>
                        <span className={styles.badge_important_titulo}>Consulta de Saldos e Recargas: </span>
                        <span className={styles.badge_important}>Desabilitado:</span>
                        <span className={styles.badge_important}>Não Tarifado</span>
                        <span className={styles.badge_important_titulo}>Controle:</span>
                        <span className={styles.badge_important_ativo}>Rec Habilitado</span>
                        <span className={styles.badge_important}>CCE Desabilitado</span>
                        <span className={styles.badge_important_titulo}>Ajuste:</span>
                        <span className={styles.badge_important}>Trib Desabilitado</span>
                        <span className={styles.badge_important_ativo}>Emitir Boleto</span>
                        <span className={styles.badge_primary_ativo}>Processar Repasse 1</span>
                        <span className={styles.badge_important}>Taxa mínima-Desabilitada</span>
                        <span className={styles.badge_important_ativo}>Comprar em lote</span>
                        
                    </>
                )}

                {/* Botão para alternar entre expandido e não expandido */}
                <button onClick={toggleExpand} className={styles.expandButton}>
                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </button>
            </div>
        </div>
    );
}

export default CabeçarioEmpresa;
