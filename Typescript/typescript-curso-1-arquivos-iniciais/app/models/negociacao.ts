export class Negociacao {
    private _data:Date;
    private _volume:number;
    private _quantidade:number;
    
    constructor(data:Date, volume:number, quantidade:number){
        this._data = data;
        this._volume = volume;
        this._quantidade = quantidade;
    }

    get data(){
        return this._data;
    }
    get volume(){
        return this._quantidade* this._volume;
    }
    get quantidade(){
        return this._quantidade;
    }

    Mensagem_motivacao():string{
        return "mensagem : *contatenação*";
    }
}
