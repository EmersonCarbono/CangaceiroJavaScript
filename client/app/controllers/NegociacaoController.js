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
        console.log(this._inputData.value);
        console.log(parseInt(this._inputQuantidade.value));
        console.log(parseFloat(this._inputValor.value));
        alert('Chamei a ação do controle');
    }
}



