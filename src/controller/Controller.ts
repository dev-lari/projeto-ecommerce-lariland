import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class Controller implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
       let buscaProduto = this.buscarNoArray(numero);

       if(buscaProduto != null){
        buscaProduto.visualizar();
       } else 
        console.log("\nO produto numero: " + numero + "não foi encontrado!");

    }
    
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\n O produto" + produto.numero + "foi criado com sucesso!");
    }

    listarProdutos(): void {
        for (let produto of this.listaProdutos){
                produto.visualizar();
            }
        }
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.numero);

        if(buscaProduto != null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\n O produto numero" + produto.numero + "foi atualizado com sucesso!");
        } else 
            console.log("\n O produto numero: " + produto.numero + "não foi encontrado!");
    }
    remover(numero: number): void {
        throw new Error("Method not implemented.");
    }
    //Gerar o numero aleatorio do produto:
    public gerarNumero(): number{
        return ++ this.numero
    }

    public buscarNoArray (numero: number): Produto | null {
        for (let produto of this.listaProdutos){
            if (produto.numero == numero)
                return produto;
        }
            return null;
    }
}
