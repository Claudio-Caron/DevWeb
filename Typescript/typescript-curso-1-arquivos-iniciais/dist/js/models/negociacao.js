export class Negociacao {
    constructor(data, volume, quantidade) {
        this._data = data;
        this._volume = volume;
        this._quantidade = quantidade;
    }
    get data() {
        return this._data;
    }
    get volume() {
        return this._quantidade * this._volume;
    }
    get quantidade() {
        return this._quantidade;
    }
    Mensagem_motivacao() {
        return "mensagem : *contatenação*";
    }
}
