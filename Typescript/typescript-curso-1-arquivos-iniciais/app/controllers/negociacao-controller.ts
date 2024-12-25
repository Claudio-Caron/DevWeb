import { JsonValue } from './../../node_modules/.type-fest-ohCsGuSt/source/basic.d';
import { Motivacao } from "../models/motivacao";

export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;

    constructor(){
        this.inputData= document.querySelector('#data');
        this.inputQuantidade= document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona(){
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const valor = parseFloat(this.inputQuantidade.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        const negociacao = new Motivacao(date,
            quantidade,
            valor
        );
        console.log(negociacao);
        
        
        
        
    }
}