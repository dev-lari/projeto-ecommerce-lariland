import readlinesync = require('readline-sync');
import { Eletronicos } from './src/model/Eletronicos';
import { Controller } from './src/controller/Controller';


export function main () {

    //Instancia da classe Controller
    let produtos: Controller = new Controller();

    //Variáveis auxiliares: 
    let opcao, preco, numero: number;
    let nome, categoria, fabricante: string;
    const tiposCategorias = ['Periféricos de entrada', 'Periféricos de saída', 'Periféricos de entrada e saída'];

    //Menu com as opções do CRUD (criar, ler, atualizar e remover)
    while (true) {
        console.log("*****************************************************************")
        console.log("                                                                 ")
        console.log("********************* BEM VINDO A LARILAND **********************")
        console.log("                                                                 ")
        console.log("                      1- Cadastrar produto                       ")
        console.log("                      2- Listar produtos                         ")
        console.log("                      3- Atualizar produtos                      ")
        console.log("                      4- Procurar produto por numero             ")
        console.log("                      5- Remover produto                         ")
        console.log("                      6- Sair                                    ")
        console.log("                                                                 ")
        console.log("*****************************************************************")

        console.log("Digite uma opcao: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 5){
            console.log("\n Lariland - Seu mundo mais conectado!");
            sobre();
            process.exit(0);
        }

        switch (opcao){
            case 1: 
                console.log("Cadastrar produto")
                
                console.log("Digite o nome do produto: ");
                nome = readlinesync.question("");
                
                console.log("Digite a categoria do produto: ");
                categoria = readlinesync.question("");
                
                console.log("Digite o fabricante do produto: ");
                fabricante = readlinesync.question("");

                console.log("Digite o preço do produto: ");
                preco = readlinesync.questionFloat("");

                produtos.cadastrar(new Produto(nome, categoria, fabricante, preco))

                keyPress();
                break

            case 2: 
                console.log("Listar produtos");
                produtos.listarProdutos();

                keyPress();
                break

            case 3: 
                console.log("Atualizar produtos");
                console.log("Digite o numero do produto: ");
                numero = readlinesync.questionInt("");

                let produto = produto.buscarNoArray(numero);
                
                

                keyPress();
                break


            case 4: 
                console.log("Procurar produto por numero: ");
                console.log("Digite o número do produto: ");
                numero = readlinesync.questionInt("");
                produtos.procurarPorNumero(numero);


                keyPress();
                break

            case 5:
                console.log("Remover produto");
                break

            default: 
                console.log("Digite uma opcao valida!")
        }
    } 
}

function keyPress(): void{
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

export function sobre(): void {
    console.log("Projeto desenvolvimento por: Larissa de Souza");
    console.log("Acesse meu repositório: github.com/dev-lari")
}

main()