let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera número aleatório entre 1 e 100
let tentativas = 10;

// Configura o evento do botão no JS
document.getElementById("adivinharBtn").addEventListener("click", adivinhar);

function adivinhar() {
    let num = document.getElementById('num'); // Campo de entrada
    let mensagem = document.getElementById('mensagem'); // Exibe mensagens ao usuário
    let tentativasRestantes = document.getElementById('tentativas'); // Exibe tentativas restantes
    let palpite = Number(num.value); // Converte o valor do input para número

    // Verifica se o número está no intervalo válido
    if (palpite < 1 || palpite > 100) {
        mensagem.textContent = 'Por favor, insira um número entre 1 e 100.';
        return;
    }

    // Compara o palpite com o número secreto
    if (palpite === numeroSecreto) {
        mensagem.textContent = `Parabéns! Você acertou o número secreto: ${numeroSecreto}.`;
        tentativasRestantes.textContent = 'Você venceu!';
        return;
    }

    // Reduz tentativas e dá dicas ao jogador
    tentativas--;
    if (tentativas > 0) {
        mensagem.textContent = palpite < numeroSecreto
            ? 'O número é maior!'
            : 'O número é menor!';
        tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
    } else {
        mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
        tentativasRestantes.textContent = 'Sem tentativas restantes!';
    }
}
