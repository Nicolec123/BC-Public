function CadastroEmpresa(){
    return(
        <form>
            <label>Nome da Empresa:</label><br/>
            <input type="text" name="nomeEmpresa"/><br/>
            <label>CNPJ:</label><br/>
            <input type="text" name="cnpj"/><br/>
            <label>Endereço:</label><br/>
            <input type="text" name="endereco"/><br/>
            <label>Telefone:</label><br/>
            <input type="text" name="telefone"/><br/>
            <input type="submit" value="Cadastrar"/>
        </form>  // JSX syntax for React
    )
}

export default CadastroEmpresa;