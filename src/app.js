import express from "express" //importando express, usando nodemon e sucrase
import routes from './routes' //passando o arquivo routes 


class App { //criando a classe
    constructor(){ //criando o construtor da classe, que sempre é chamado quando a classe é instanciada
        this.server = express() // criando server dentro da classe, server recebe express
        //this se trata da classe
        this.middlewares() //passando a funcao para dentro da classe
        this.routes()
    }

    middlewares(){
        
        // Permite que o servidor interprete o corpo das requisições HTTP em formato JSON.
        this.server.use(express.json());
        
        
    }

    routes(){
        this.server.use(routes) //chamando o arquivo de routes setado na linha 2
    }
}


    export default new App().server //enviando o servidor, middlewares e routes contidos em app