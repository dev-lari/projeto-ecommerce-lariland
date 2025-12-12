import readlinesync = require('readline-sync');
import { Eletronicos } from './src/model/Eletronicos';


export function main () {
    let opcao: number;

    //Menu com as opções do CRUD (criar, ler, atualizar e remover)
    while (true) {
        console.log("*****************************************************************")
        console.log("                                                                 ")
        console.log("********************* BEM VINDO A LARILAND **********************")
        console.log("                                                                 ")
        console.log("                      1- Criar cadastro                          ")
        console.log("                      2- Listar produtos                         ")
        console.log("                      3- Atualizar produtos                      ")
        console.log("                      4- Remover produto                         ")
        console.log("                      5- Sair                                    ")
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
                console.log("Criar cadastro");
                break

            case 2: 
                console.log("Listar produtos");
                break

            case 3: 
                console.log("Atualizar produtos");
                break

            case 4: 
                console.log("Remover produto");
                break

            default: 
                console.log("Digite uma opcao valida!")
        }
    } 
}

export function sobre(): void {
    console.log("Projeto desenvolvimento por: Larissa de Souza");
    console.log("Acesse meu repositório: github.com/dev-lari")
}

main()