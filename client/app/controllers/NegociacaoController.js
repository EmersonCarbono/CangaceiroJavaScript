class NegociacaoController{
    adicionar(){
        
        //Cancelar a submissão do evento, não atualiza a tela quando da submit
        event.preventDefault();
        
        
        //Pegar os elementos
        let inputData = document.querySelector('#data');
        let inputQuantidade = document.querySelector('#quantidade');
        let inputValor = document.querySelector('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));

        alert('Chamei a ação do controle');
    }
}



