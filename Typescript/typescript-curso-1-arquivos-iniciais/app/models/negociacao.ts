export class Negociacao {
    constructor(
        private _data:Date,
        public readonly valor:number,
        public readonly quantidade:number){}

    get volume(): number{
        return this.quantidade* this.valor;
    }

    get data():Date{
        return new Date(this._data.getTime());
    }
    Mensagem_motivacao():string{
        return "mensagem : *contatenação*";
    }
}
