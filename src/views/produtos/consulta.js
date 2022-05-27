import React from 'react'
import ProdutoService from '../../app/produtoService'
import { Link } from "react-router-dom"

export default class ConsultaProdutos extends React.Component{

    state = {
        produtos : []
    }

    constructor(){
        super();
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({ produtos })
    }

    render(){
        return(
            <>
                
                <h2>Consulta de produtos</h2>
                <h4>Faça a pesquisa dos produtos cadastrados</h4>
                <hr />
                <fieldset>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th className="text-center" scope="col">SKU</th>
                                <th className="text-center" scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map( (produto, index) => {
                                    return(
                                        <tr key={index}>
                                            <th>{produto.nome}</th>
                                            <th className="text-center">{produto.sku}</th>
                                            <th className="text-center">
                                                <Link className="btn btn-primary" to={`/editar-produto/${produto.sku}`}>editar</Link>&nbsp;
                                                <button className="btn btn-danger">excluir</button>
                                            </th>
                                        </tr>
                                    )
                                })
                            } 
                        </tbody>
                    </table>
                </fieldset>
            </>
        )
    }
}