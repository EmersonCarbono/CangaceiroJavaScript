class NegociacaoController{
    adicionar(){
        
        // Cancelar a submissão do evento, não atualiza a tela quando da submit
        event.preventDefault();
        
        // Pegar os elementos
        // Por padrão o querySelector retorna os valores em String, lembre-se de converter
        // No JS podemos adicionar funções as variaveis então podemos reduzir nosso codigo
        // Realizando o bind, $ mantém	document com o seu contexto this
        let $ = document.querySelector.bind(document);

        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));



        alert('Chamei a ação do controle');
    }
}



