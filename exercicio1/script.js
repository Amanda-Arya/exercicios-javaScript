// Implemente um algoritmo onde o usuário possa guardar palavras dentro de um vetor. Antes de inserir uma nova palavra dentro do vetor, 
// verifique se a mesma não existe dentro do vetor. Caso exista, avise o usuário e não faça a inserção.
// (Desafio)

var minha_lista = [];

function adicionarPalavras(palavra) {
    var palavra = document.getElementById("palavra").value;
    if (minha_lista.includes(palavra)) {
        alert("Esta palavra já está na lista!")
    } else {
        minha_lista.push(palavra);
        gerarLista();
    }
}

function gerarLista() {
    var list = document.getElementById("list");
    list.innerHTML = '';
    minha_lista.map(e => {
        list.innerHTML += '<li>' + e + '</li>'
    });
}



