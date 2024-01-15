// script.js

// Define the quiz data
const quizData = [
    {
        question: "En büyük gezegen hangisidir?",
        imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Planet_collage_to_scale.jpg/660px-Planet_collage_to_scale.jpg',
        answers: [
            { text: "Merkür", isCorrect: false },
            { text: "Venüs", isCorrect: false },
            { text: "Jüpiter", isCorrect: true },
            { text: "Dünya", isCorrect: false }
        ]
    },
    {
        question: "Hangisi bir web uygulamalarının temel unsurlarından değildir?",
        imgLink: 'https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D',
        answers: [
            { text: "Javascript", isCorrect: false },
            { text: "CSS", isCorrect: false },
            { text: "HTML", isCorrect: false },
            { text: "Java", isCorrect: true }
        ]
    },
    {
        question: "En büyük hayvan hangisidir?",
        imgLink: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D',
        answers: [
            { text: "Fil", isCorrect: false },
            { text: "Kedi", isCorrect: false },
            { text: "Zebra", isCorrect: false },
            { text: "Mavi Balina", isCorrect: true }
        ]
    }
];

let activeQuestionIndex = 0;

// Function to load a question
function loadQuestion() {
    const currentQuestion = quizData[activeQuestionIndex];
    const questionElement = document.getElementById('question');
    const answerListElement = document.getElementById('answer-list');
    const imageElement = document.getElementById('question-image');
    const questionNumberElement = document.getElementById('question-number');

    // Set the question number
    questionNumberElement.textContent = activeQuestionIndex + 1 + '/' + quizData.length;

    // Clear previous question and answers when it is loaded
    questionElement.textContent = '';
    answerListElement.innerHTML = '';

    // Set the question text
    questionElement.textContent = currentQuestion.question;

    // Set the image for the question
    imageElement.setAttribute('src', currentQuestion.imgLink)

    // Add the answer choices
    currentQuestion.answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer.text;
        li.onclick = () => checkAnswer(answer.isCorrect);
        answerListElement.appendChild(li);
    });
}

// Start the quiz
loadQuestion();

// Handle the next question button click
document.getElementById('next-question').addEventListener('click', () => {
    if (activeQuestionIndex < quizData.length) {
        document.getElementById('next-question').style.display = '';
        activeQuestionIndex++
        if(activeQuestionIndex == quizData.length - 1) {
            document.getElementById('next-question').style.visibility = 'hidden';
        }
        loadQuestion();
    } else {
        activeQuestionIndex = 0;
        showNotification('Test tamamlandı zaten!', 3000, 'purple');
    }
});

// Handle the Reset the quiz button click
document.getElementById('reset').addEventListener('click', () => {
        activeQuestionIndex = 0;
        showNotification('Test  baştan başladı!', 3000, 'purple');
        loadQuestion();
        document.getElementById('next-question').style.visibility = 'visible';
});

// Function to show notification
function showNotification(message, duration = 3000, color = 'green') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    notification.style.backgroundColor = color;

    let quizContainer = document.querySelector('#quiz-container');
    quizContainer.style.border = '2px solid ' + color;

    // Hide the notification after the duration
    setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

// Modify checkAnswer function to use showNotification
function checkAnswer(isCorrect) {
    if (isCorrect) {
        showNotification('Doğru Cevap!', 3000, 'green');
    } else {
        showNotification('Yanlış Cevap. Olmadı!', 3000, 'red');
    }
    // Load the next question if you want
    //activeQuestionIndex++;
    if (activeQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showNotification('Test tamamlandı!', 3000, 'purple');
    }
}