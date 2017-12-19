class Negociacoes{
    constructor(){
        this._negocicoes = [];
    }

    adiciona(negociacao){
        this._negocicoes.push(negociacao);
    }

    paraArray(){
        return [].concat(this._negocicoes);
    }
}