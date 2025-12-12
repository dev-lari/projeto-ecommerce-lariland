import {Produto} from './Produto'

export class Eletronicos extends Produto{
    //Atributo
    private _fabricante: string;

    //Construtor:
    constructor(numero: number, preco: number, nome: string, categoria: string, fabricante: string){
       
        super(numero, preco, nome, categoria);
       
        this._fabricante = fabricante;

    }

    //Método get e set: 
    public get fabricante(){
        return this._fabricante;
    }

    public set fabricante (fabricante: string){
        this._fabricante = fabricante;
    }

    //Método especifico:
    public visualizar(): void{
        super.visualizar();
        console.log("O fabricante do produto é: " + this._fabricante);
    }
}