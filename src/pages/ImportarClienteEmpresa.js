function ImportarClienteEmpresa(){
    return(
        <div>
            <h1>Importar Cliente Empresa</h1>
            <form>
                <input type="file" name="file" accept=".csv" />
                <button type="submit">Importar</button>
            </form>
        </div>
    )
}

export default ImportarClienteEmpresa;