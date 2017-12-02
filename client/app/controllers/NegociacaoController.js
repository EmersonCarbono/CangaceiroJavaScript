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
    }

    adicionar(){
        // Cancelar a submissão do evento, não atualiza a tela quando da submit
        event.preventDefault();

        // o ... é o spread	operator ele separa os itens da lista e atribui cada um separadamente a o constructor
        let data = new Date(...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2 ));

        let negociacao = new Negociacao(data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
        console.log(negociacao.data)
    }
}



