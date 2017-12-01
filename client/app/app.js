// Crianda uma instancia da classe NegociacaoController
var controller = new NegociacaoController();

//
document
    .querySelector('.form')
    .addEventListener('submit',controller.adicionar.bind(controller));