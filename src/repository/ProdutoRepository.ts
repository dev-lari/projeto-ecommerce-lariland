import { Produto } from "../model/Produto";

export interface ProdutoRepository{
    //CRUD:
    procurarPorNumero(numero: number): void;
    cadastrar(produto: Produto): void;
    listarProdutos(): void;
    atualizar(produto: Produto): void;
    remover(numero: number): void;
}