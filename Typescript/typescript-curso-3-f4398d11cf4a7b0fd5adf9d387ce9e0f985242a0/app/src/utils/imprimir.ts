import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos:Array<Imprimivel>):void{
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}