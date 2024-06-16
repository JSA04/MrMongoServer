function salvarValorInput(event) {
    const input = event.target; 
    const valor = input.value; 
    const chave = input.id;

    localStorage.setItem(chave, valor);
}

function carregarValoresInput() {
    document.querySelectorAll('input').forEach(input => {
        const chave = input.id;    
        const valorSalvo = localStorage.getItem(chave); 

        if (valorSalvo !== null) {
            input.value = valorSalvo;        } 
    });
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', salvarValorInput); 
});

carregarValoresInput(); 

window.addEventListener("beforeunload", function(event) {
    document.querySelectorAll('input').forEach(input => {
        const chave = input.id;
        const valor = input.value;
        localStorage.setItem(chave, valor);
    });
});
