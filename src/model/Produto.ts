export abstract class Produto {
    //atributos privados: 
    private _numero: number;
    private _preco: number;
    private _nome: string;
    private _categoria: string;

    //método construtor: 
    constructor(numero: number, preco: number, nome: string, categoria: string){
        this._numero = numero;
        this._preco = preco;
        this._nome = nome;
        this._categoria = categoria;
    }

    //métodos get e set: 
    public get numero(): number {
        return this._numero;
    }

    public set numero(numero: number){
        this._numero = numero;
    }
    public get preco(): number {
        return this._preco;
    }

    public set preco(preco: number){
        this._preco = preco;
    }
    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }
    public get categoria(): string {
        return this._categoria;
    }

    public set categoria(categoria: string){
        this._categoria = categoria;
    }

    //métodos específicos (mostrar os dados do produto): 
    public visualizar(): void {
        console.log("\n******************************************");
        console.log("\nDados do Produto: ");
        console.log("Numero de identificacao do produto: " + this._numero);
        console.log("Nome do produto: " + this._nome);
        console.log("Preço do produto: " + this._preco);
        console.log("Esse produto é da categoria: " + this._categoria);
    }
}