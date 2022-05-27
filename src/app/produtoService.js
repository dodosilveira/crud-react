
const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(errors){
    this.errors = errors;
}

export default class ProdutoService {

    validacao = (produto) => {
        const errors = []

        if(!produto.nome){
            errors.push('O nome do produto é obrigatório.')
        }

        if(!produto.sku){
            errors.push('O SKU do produto é obrigatório.')
        }

        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    }

    salvar = (produto) => {

        this.validacao(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = []
        }else{
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto)

        localStorage.setItem( PRODUTOS, JSON.stringify(produtos) )
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }

}