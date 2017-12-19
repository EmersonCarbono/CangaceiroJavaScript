class NegociacaoController{

    constructor(){   
        // Pegar os elementos
        // Por padrão o querySelector retorna os valores em String, lembre-se de converter
        // No JS podemos adicionar funções as variaveis então podemos reduzir nosso codigo
        // Realizando o bind, $ mantém	document com o seu contexto this
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
    }

    adicionar(event){
        event.preventDefault();
        this._negociacoes.adiciona(this._criarNegociacao());
        this._limpaFormulario();
    }
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
    _criarNegociacao(){
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
}



