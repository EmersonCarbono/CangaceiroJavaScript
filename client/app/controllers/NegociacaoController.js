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

        // Instanciando o Converter Data
        //let converter = new DateConverter; <- Como esta classe não tem nenhum atributo podemos deixas seus metodos static e chamalos sem criar a instancia


        // o ... é o spread	operator ele separa os itens da lista e atribui cada um separadamente a o constructor
        let data = DateConverter.paraData(this._inputData.value)

        let negociacao = new Negociacao(data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        let dia_mes_ano = DateConverter.paraTexto(negociacao.data);

        console.log(dia_mes_ano);
    }
}



