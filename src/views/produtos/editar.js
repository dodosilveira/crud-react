import React from 'react'
import ProdutoService from '../../app/produtoService'

const inicioCadastro = {
    nome: '',
    sku: '',
    sucesso: false,
    errors: []
}

class CadastroProduto extends React.Component {
 
    state = inicioCadastro;

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const nome = event.target.name
        const valor = event.target.value
        this.setState({ [nome]: valor })
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku
        }
        try{
            this.service.salvar(produto)
            this.setState(inicioCadastro)
            this.setState({ sucesso: true })
        }catch(erro){
            const errors = erro.errors
            this.setState({errors : errors})
        }
    }

    limparCampos = () => {
        this.setState(inicioCadastro);
    }

    componentDidMount(){
        console.log(this)
    }

    render(){
        return(
            <>
                <h2>Cadastro de produtos</h2>
                <h4>Preencha o formulário para cadastrar um produto</h4>
                <hr />
                <fieldset>

                    { this.state.sucesso &&
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Muito bem!</strong> Produto cadastrado com sucesso!
                        </div>
                    }

                    { this.state.errors.length > 0 &&
                        this.state.errors.map( msg => {
                            return (
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>Erro!</strong> {msg}
                                </div>
                            )
                        })
                    }
                    

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label  className="form-label">Nome: *</label>
                            <input  type="text" 
                                    name="nome"
                                    onChange={this.onChange}
                                    className="form-control" 
                                    id="nome" 
                                    value={this.state.nome}/>
                        </div>

                        <div className="form-group col-md-6">
                            <label  className="form-label">SKU: *</label>
                            <input  type="text" 
                                    name="sku"
                                    onChange={this.onChange}
                                    className="form-control" 
                                    id="sku" 
                                    value={this.state.sku}/>
                        </div>
                    </div>
                    
                    <button onClick={this.onSubmit} className="btn btn-success btn-sm mt-3">Editar</button>&nbsp;
                    <button onClick={this.limparCampos} className="btn btn-primary btn-sm mt-3">Limpar</button>

                </fieldset>
            </>
        )
    }
}

export default CadastroProduto; 