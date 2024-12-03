import styles from './ConfiguracoesPagEmpresa.module.css'

function ConfiguracoesPagEmpresa() {
return(
    <select className={styles.form_select} name="filtro" >
    <option value="">Configurações</option>
    <option value="empresa">Tipo Contrato</option>
    <option value="funcionario">Tipo Pagamento</option>
    <option value="pedido">Status Empresa</option>
    <option value="pedidos_do_dia">Não Cobrar Segunda Via de Cartão</option>
    <option value="pedidos_do_dia">Não Cobrar Entraga de Cartão</option>
    <option value="pedidos_do_dia">Consultar Saldo e Recarga</option>
    <option value="pedidos_do_dia">Cobrança Saldo e Recarga</option>
    <option value="pedidos_do_dia">Controle Recarga</option>
    <option value="pedidos_do_dia">Ajuste Tributário</option>
    <option value="pedidos_do_dia">Emissão de Boletos</option>
    <option value="pedidos_do_dia">Repasse 2</option>
    <option value="pedidos_do_dia">Taxa mínima</option>
    <option value="pedidos_do_dia">Separar compra do lote</option>
    <option value="pedidos_do_dia">Separar pedido por departamento</option>
    <option value="pedidos_do_dia">Empresa Federal</option>
    <option value="pedidos_do_dia">Roteirização</option>
    <option value="pedidos_do_dia">Pedido Ecônomico</option>
    <option value="pedidos_do_dia">Importação Matrículas</option>
</select>
)
}
export default ConfiguracoesPagEmpresa;
