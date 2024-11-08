// Dados do jogo
const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answers: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
        correctAnswerIndex: 0
    },
    {
        question: "Quem pintou a Mona Lisa?",
        answers: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correctAnswerIndex: 2
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        answers: ["Terra", "Júpiter", "Saturno", "Netuno"],
        correctAnswerIndex: 1
    },
    {
        question: "Qual é a fórmula química da água?",
        answers: ["CO2", "H2O", "O2", "H2O2"],
        correctAnswerIndex: 1
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correctAnswerIndex: 1
    },
    {
        question: "Qual é o símbolo químico do ouro?",
        answers: ["Au", "Ag", "Pb", "Fe"],
        correctAnswerIndex: 0
    },
    {
        question: "Em que ano a primeira Guerra Mundial começou?",
        answers: ["1912", "1914", "1916", "1918"],
        correctAnswerIndex: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Função para exibir a pergunta e as opções de resposta
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
        button.textContent = question.answers[index];
    });

    document.getElementById('result-message').textContent = '';  // Limpar mensagem anterior
}

// Função para verificar a resposta
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const resultMessage = document.getElementById('result-message');

    if (selectedIndex === question.correctAnswerIndex) {
        score++;
        resultMessage.textContent = "Resposta Correta!";
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = "Resposta Errada!";
        resultMessage.style.color = 'red';
    }

    // Atualizar a pontuação
    document.getElementById('score').textContent = `Pontos: ${score}`;

    // Avançar para a próxima pergunta
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            loadQuestion();
        }, 1500);  // Espera 1.5 segundos para carregar a próxima pergunta
    } else {
        setTimeout(() => {
            document.getElementById('result-message').textContent = "Fim do Jogo! Você fez " + score + " ponto(s).";
        }, 1500);
    }
}

// Iniciar o jogo
loadQuestion();
