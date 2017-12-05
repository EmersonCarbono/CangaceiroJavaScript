class Negociacoes{
    constructor(){
        _negocicoes = [];
    }

    adiciona(negociacao){
        this._negocicoes.push(negociacao);
    }

    paraArray(){
        return this._negocicoes;
    }
}