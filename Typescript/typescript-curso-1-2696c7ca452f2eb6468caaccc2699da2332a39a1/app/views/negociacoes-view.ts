import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{

        
    protected template (model:Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </th>
                </thead>
                <tbody></tbody>
                ${model.lista().map(negociacao =>{
                    return `
                        <tr>
                            <td>${this.dataConverter(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `

                }).join('')}
        </table>
        `;
    }
    public update (model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model);
    }
    private dataConverter(data:Date): string{
        return new Intl.DateTimeFormat().format(data);
    }
}