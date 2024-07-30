// script.js

// Dados de login (para fins de demonstração - não use em produção)
const USERNAME = 'nicole';
const PASSWORD = '22022024';

// Função para verificar login
function checkLogin(username, password) {
    return username === USERNAME && password === PASSWORD;
}

// Manipulador de evento para o formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (checkLogin(username, password)) {
        // Se o login for bem-sucedido, redirecionar para a página de aniversário
        window.location.href = 'index.html';
    } else {
        // Se o login falhar, mostrar um alerta
        alert('Nome de usuário ou senha incorretos!');
    }
});

// Manipulador de evento para o botão de mostrar dica
document.getElementById('showHint').addEventListener('click', function() {
    const hint = document.getElementById('passwordHint');
    if (hint.style.display === 'none') {
        hint.style.display = 'block';
    } else {
        hint.style.display = 'none';
    }
});