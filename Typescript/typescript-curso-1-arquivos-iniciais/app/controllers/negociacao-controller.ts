import { JsonValue } from './../../node_modules/.type-fest-ohCsGuSt/source/basic.d';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes:Negociacoes;
    constructor(){
        this.inputData= document.querySelector('#data');
        this.inputQuantidade= document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona():void{
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(negociacao);
    }

    private criaNegociacao():Negociacao{
        const exp:RegExp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const valor = parseFloat(this.inputQuantidade.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        return new Negociacao(date,
            quantidade,
            valor
        );
    }
    limparFormulario():void{
        this.inputData.value ='';
        this.inputQuantidade.value ='';
        this.inputValor.value ='';
        this.inputData.focus();
    }
}