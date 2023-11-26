// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Qual foi a contribuição mais significativa de Alan Turing para o campo da Inteligência Artificial?',
    answers: [
      {
        answer: 'O desenvolvimento da primeira máquina de aprendizado de máquina.',
        correct: true,
      },
      {
        answer: 'A criação do termo "Inteligência Artificial."',
        correct: false,
      },
      {
        answer: 'A criação da primeira IA geral.',
        correct: false,
      },
      {
        answer: 'A cunhagem do termo "Machine Learning."',
        correct: false,
      },
    ],
  },
  {
    question: 'O que foi criado em 1966 que desempenhou um papel importante na história da IA?',
    answers: [
      {
        answer: 'O Google.',
        correct: false,
      },
      {
        answer: 'O primeiro chatbot, ELIZA.',
        correct: true,
      },
      {
        answer: 'O assistente virtual Siri.',
        correct: false,
      },
      {
        answer: 'A Máquina de Turing.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual categoria de IA é projetada para tarefas específicas e limitadas?',
    answers: [
      {
        answer: 'IA cognitiva.',
        correct: false,
      },
      {
        answer: 'IA avançada.',
        correct: false,
      },
      {
        answer: 'IA geral ou forte.',
        correct: false,
      },
      {
        answer: 'IA restrita ou fraca.',
        correct: true,
      },
    ],
  },
  {
    question: 'É um dos benefícios da Inteligência Artificial?',
    answers: [
      {
        answer: 'Aumento da desigualdade econômica.',
        correct: false,
      },
      {
        answer: 'Diminuição da produtividade.',
        correct: false,
      },
      {
        answer: 'Maior foco no usuário.',
        correct: true,
      },
      {
        answer: 'Redução da automação de tarefas.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que o Deep Blue, da IBM, realizou em 1997 que estabeleceu um marco na história da IA?',
    answers: [
      {
        answer: 'Derrotou um campeão de xadrez humano.',
        correct: true,
      },
      {
        answer: 'Venceu uma competição de jogos de cartas.',
        correct: false,
      },
      {
        answer: 'Criou um assistente virtual.',
        correct: false,
      },
      {
        answer: 'Desenvolveu a primeira IA geral.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual grande marco da IA ocorreu em 2011, quando a IBM lançou um supercomputador? ',
    answers: [
      {
        answer: 'O surgimento do Big Data.',
        correct: false,
      },
      {
        answer: 'O lançamento do Watson.',
        correct: true,
      },
      {
        answer: 'O desenvolvimento de carros autônomos.',
        correct: false,
      },
      {
        answer: 'A descoberta da relação entre genes, proteínas e medicamentos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual tipo de aprendizado de máquina envolve algoritmos que aprendem a tomar decisões através da interação com um ambiente, recebendo feedback na forma de recompensas ou punições?',
    answers: [
      {
        answer: 'Aprendizado Supervisionado.',
        correct: false,
      },
      {
        answer: 'Aprendizado Não Supervisionado.',
        correct: false,
      },
      {
        answer: 'Aprendizado por Reforço',
        correct: true,
      },
      {
        answer: 'Aprendizado Profundo.',
        correct: false,
      },
    ],
  },
  {
    question: 'O que é o Processamento de Linguagem Natural (PLN) no contexto da IA?',
    answers: [
      {
        answer: 'A criação de arte por meio de algoritmos evolutivos.',
        correct: false,
      },
      {
        answer: 'Estuda a interação entre a linguagem humana e os sistemas computacionais.',
        correct: true,
      },
      {
        answer: 'Um tipo de automação de processos.',
        correct: false,
      },
      {
        answer: 'O estudo do comportamento de robôs.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a relação entre a IA e a Internet das Coisas (IoT)?',
    answers: [
      {
        answer: 'A IA é uma tecnologia que pode ser utilizada para controlar dispositivos conectados pela IoT.',
        correct: true,
      },
      {
        answer: 'A IA é uma subárea da IoT.',
        correct: false,
      },
      {
        answer: 'A IoT é uma técnica de processamento de linguagem natural.',
        correct: false,
      },
      {
        answer: 'A IA e a IoT são sinônimos e se referem à mesma coisa.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a diferença entre Inteligência Artificial, Machine Learning e Deep Learning?',
    answers: [
      {
        answer: ' Não há diferença entre eles, são termos intercambiáveis.',
        correct: false,
      },
      {
        answer: 'Machine Learning é uma subárea da IA, e Deep Learning é uma técnica específica dentro do Machine Learning.',
        correct: true,
      },
      {
        answer: 'Inteligência Artificial se refere apenas a sistemas com capacidade cognitiva, enquanto Machine Learning e Deep Learning são sinônimos.',
        correct: false,
      },
      {
        answer: 'Deep Learning é a mesma coisa que Processamento de Linguagem Natural.',
        correct: false,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
