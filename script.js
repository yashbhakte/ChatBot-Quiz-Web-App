// Chatbot Quiz Web App - Main JavaScript File

// DOM Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.section');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const startQuizBtn = document.getElementById('startQuizBtn');
const quizContent = document.getElementById('quizContent');

// Quiz State Variables
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let shuffledQuestions = [];
let quizActive = false;
let questionHistory = [];
let quizTimer = null;
let quizTimeLeft = 0;
const QUIZ_TIME_LIMIT = 15 * 60; // 15 minutes in seconds

// Tab Navigation
function switchTab(tabName) {
    tabBtns.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
    });
});

// --- Chatbot: Exact Match Only ---
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    if (isUser) {
        avatar.textContent = '👤';
    } else {
        // Friendly Robot Head SVG Icon
        avatar.innerHTML = `
        <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19" r="19" fill="#f4f6fb"/>
          <rect x="8" y="13" width="22" height="14" rx="7" fill="#6c63ff"/>
          <ellipse cx="14" cy="20" rx="2.5" ry="2.5" fill="#fff"/>
          <ellipse cx="24" cy="20" rx="2.5" ry="2.5" fill="#fff"/>
          <ellipse cx="14" cy="20" rx="1.2" ry="1.2" fill="#222"/>
          <ellipse cx="24" cy="20" rx="1.2" ry="1.2" fill="#222"/>
          <rect x="15" y="25" width="8" height="2" rx="1" fill="#fff"/>
          <rect x="17.5" y="7" width="3" height="6" rx="1.5" fill="#6c63ff"/>
          <circle cx="8" cy="17" r="1.5" fill="#6c63ff"/>
          <circle cx="30" cy="17" r="1.5" fill="#6c63ff"/>
        </svg>
        `;
    }
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    messageContent.appendChild(paragraph);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function findAnswer(userQuestion) {
    if (typeof aiQuestions === 'undefined') {
        return "Sorry, I'm having trouble accessing my knowledge base. Please try again later.";
    }
    const question = userQuestion.toLowerCase().trim();
    for (let qa of aiQuestions) {
        if (qa.question.toLowerCase().trim() === question) {
            return qa.answer;
        }
    }
    return "Sorry, I didn't get that. Please ask an exact question from the list or check your spelling.";
}

function handleChatInput() {
    const message = chatInput.value.trim();
    if (message === '') return;
    addMessage(message, true);
    chatInput.value = '';
    const answer = findAnswer(message);
    setTimeout(() => {
        addMessage(answer, false);
    }, 500);
}

sendBtn.addEventListener('click', handleChatInput);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleChatInput();
    }
});

// --- Quiz Logic (unchanged) ---
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getUniqueQuestions() {
    if (typeof aptitudeQuestions === 'undefined') {
        console.error('Aptitude questions not loaded');
        return [];
    }
    let availableQuestions = aptitudeQuestions.filter(q => 
        !questionHistory.includes(q.question)
    );
    if (availableQuestions.length < 10) {
        questionHistory = [];
        availableQuestions = aptitudeQuestions;
    }
    const shuffled = shuffleArray(availableQuestions);
    const selectedQuestions = shuffled.slice(0, 10);
    selectedQuestions.forEach(q => questionHistory.push(q.question));
    if (questionHistory.length > 20) {
        questionHistory = questionHistory.slice(-20);
    }
    return selectedQuestions;
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}

function showQuizTimer() {
    let timerDiv = document.getElementById('quiz-timer');
    if (!timerDiv) {
        timerDiv = document.createElement('div');
        timerDiv.id = 'quiz-timer';
        timerDiv.style.textAlign = 'center';
        timerDiv.style.fontWeight = 'bold';
        timerDiv.style.fontSize = '1.2rem';
        timerDiv.style.marginBottom = '10px';
        const quizContainer = document.querySelector('.quiz-content');
        quizContainer.prepend(timerDiv);
    }
    timerDiv.textContent = `⏰ Time Left: ${formatTime(quizTimeLeft)}`;
}

function startQuizTimer() {
    quizTimeLeft = QUIZ_TIME_LIMIT;
    showQuizTimer();
    if (quizTimer) clearInterval(quizTimer);
    quizTimer = setInterval(() => {
        quizTimeLeft--;
        showQuizTimer();
        if (quizTimeLeft <= 0) {
            clearInterval(quizTimer);
            quizTimer = null;
            showResults(true); // true = time up
        }
    }, 1000);
}

function stopQuizTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    selectedAnswer = null;
    score = 0;
    quizActive = true;
    shuffledQuestions = getUniqueQuestions();
    if (shuffledQuestions.length === 0) {
        quizContent.innerHTML = `
            <div class="quiz-results">
                <div class="results-card">
                    <div class="score-display">⚠️</div>
                    <div class="score-text">Error Loading Questions</div>
                    <p>Unable to load quiz questions. Please refresh the page and try again.</p>
                    <button class="restart-btn" onclick="location.reload()">Refresh Page</button>
                </div>
            </div>
        `;
        return;
    }
    showQuestion();
    startQuizTimer();
}

function showQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    const questionHTML = `
        <div class="quiz-question active">
            <div class="question-header">
                <div class="question-number">Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}</div>
                <div class="question-text">${question.question}</div>
            </div>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-btn" data-index="${index}">
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div class="quiz-controls">
                <div class="quiz-progress">Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}</div>
                <button class="submit-btn" disabled>Submit Answer</button>
                <button class="exit-btn" id="exitQuizBtn" style="background:#dc3545;color:#fff;">Exit Quiz</button>
            </div>
        </div>
    `;
    quizContent.innerHTML = questionHTML;
    const optionBtns = document.querySelectorAll('.option-btn');
    const submitBtn = document.querySelector('.submit-btn');
    const exitBtn = document.getElementById('exitQuizBtn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            optionBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedAnswer = parseInt(btn.dataset.index);
            submitBtn.disabled = false;
        });
    });
    submitBtn.addEventListener('click', handleAnswer);
    exitBtn.addEventListener('click', () => {
        showResults(false, true); // exited = true
    });
}

function handleAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    const optionBtns = document.querySelectorAll('.option-btn');
    const submitBtn = document.querySelector('.submit-btn');
    optionBtns.forEach(btn => btn.disabled = true);
    submitBtn.disabled = true;
    const isCorrect = selectedAnswer === question.correct;
    if (isCorrect) {
        score++;
    }
    optionBtns.forEach((btn, index) => {
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 2000);
}

function showResults(timeUp = false, exited = false) {
    stopQuizTimer();
    // If exited, only count up to the current question
    const total = exited ? currentQuestionIndex : shuffledQuestions.length;
    const finalScore = exited ? score : score;
    const percentage = (finalScore / (total || 1)) * 100;
    let message = '';
    if (percentage >= 90) {
        message = "Excellent! You're a quiz master! 🏆";
    } else if (percentage >= 70) {
        message = "Great job! You have solid knowledge! 👍";
    } else if (percentage >= 50) {
        message = "Good effort! Keep learning and improving! 📚";
    } else {
        message = "Don't worry! Practice makes perfect! 💪";
    }
    let statusMsg = '';
    if (timeUp) {
        statusMsg = '<div style="color:#dc3545;font-weight:bold;">⏰ Time is up! Quiz ended automatically.</div>';
    } else if (exited) {
        statusMsg = '<div style="color:#dc3545;font-weight:bold;">🚪 You exited the quiz early.</div>';
    }
    const resultsHTML = `
        <div class="quiz-results">
            <div class="results-card">
                ${statusMsg}
                <div class="score-display">${finalScore}/${total}</div>
                <div class="score-text">${message}</div>
                <p>You scored ${finalScore} out of ${total} questions attempted.</p>
                <button class="restart-btn" onclick="restartQuiz()">Take Quiz Again</button>
            </div>
        </div>
    `;
    quizContent.innerHTML = resultsHTML;
    quizActive = false;
}

function restartQuiz() {
    stopQuizTimer();
    quizContent.innerHTML = `
        <div class="quiz-start">
            <div class="start-card">
                <h3>Ready to test your knowledge?</h3>
                <p>This quiz contains ${Math.min(10, aptitudeQuestions ? aptitudeQuestions.length : 10)} questions covering various topics. Each time you take it, you'll get different questions!<br><b>Time Limit: 15 minutes</b></p>
                <button class="start-btn" onclick="startQuiz()">Start Quiz</button>
            </div>
        </div>
    `;
}

startQuizBtn.addEventListener('click', startQuiz);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        addMessage("💡 Tip: Ask an exact question from the list in aiQuestions.js for a response.", false);
    }, 2000);
});

// Add some utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for chat messages
const debouncedScroll = debounce(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}, 100);

// Observe chat messages for new content
const observer = new MutationObserver(debouncedScroll);
observer.observe(chatMessages, { childList: true, subtree: true }); 