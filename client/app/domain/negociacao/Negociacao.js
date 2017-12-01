class Negociacao{

    constructor(_data, _quantidade, _valor){
        //Atributos da Classe Negociacao.

        // o Object.assign recebe um local como desitno e parametros com valores que seão adiconados ao local de destino escolhido.
        // se a key de um dicionario tiver o mesmo nome de seu valor, basta escrever apenas uma vez.

        Object.assign(this,{ _quantidade, _valor});
        this._data = new Date(_data.getTime())
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get valor(){
        return this._valor;
    }

    get quantidade(){
        return this._quantidade;
    }
}
