// Christian Bible Quiz App - Main JavaScript File
// Provantage Global Solution

class BibleQuizApp {
    constructor() {
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeLeft = 7;
        this.timer = null;
        this.isAnswered = false;
        this.totalQuestions = 20;
        this.userAnswers = [];
        
        this.initializeApp();
    }

    initializeApp() {
        this.bindEvents();
        this.showScreen('welcomeScreen');
    }

    bindEvents() {
        // Welcome screen events
        document.getElementById('showInstructions').addEventListener('click', () => {
            this.showScreen('instructionsScreen');
        });

        // Instructions screen events
        document.getElementById('backToWelcome').addEventListener('click', () => {
            this.showScreen('welcomeScreen');
        });

        document.getElementById('startQuiz').addEventListener('click', () => {
            this.startQuiz();
        });

        // Quiz screen events
        document.getElementById('quitQuiz').addEventListener('click', () => {
            this.quitQuiz();
        });

        // Results screen events
        document.getElementById('retakeQuiz').addEventListener('click', () => {
            this.startQuiz();
        });

        document.getElementById('backToHome').addEventListener('click', () => {
            this.showScreen('welcomeScreen');
        });

        // Option button events
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectAnswer(e.currentTarget);
            });
        });
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(screenId).classList.add('active');

        // Add entrance animation
        const activeScreen = document.getElementById(screenId);
        activeScreen.style.opacity = '0';
        activeScreen.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            activeScreen.style.opacity = '1';
            activeScreen.style.transform = 'translateY(0)';
            activeScreen.style.transition = 'all 0.6s ease-in-out';
        }, 50);
    }

    startQuiz() {
        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        
        // Get random questions
        this.currentQuestions = this.getRandomQuestions(this.totalQuestions);
        
        // Show quiz screen
        this.showScreen('quizScreen');
        
        // Start first question
        this.displayQuestion();
    }

    getRandomQuestions(count) {
        // Shuffle the questions array and take the first 'count' questions
        const shuffled = [...bibleQuestions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    displayQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.showResults();
            return;
        }

        const question = this.currentQuestions[this.currentQuestionIndex];
        this.isAnswered = false;

        // Update question text
        document.getElementById('questionText').textContent = question.question;

        // Update options
        const options = ['A', 'B', 'C', 'D'];
        options.forEach((option, index) => {
            const optionElement = document.getElementById(`option${option}`);
            optionElement.textContent = question.options[index];
        });

        // Reset option buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected', 'correct', 'incorrect');
            btn.disabled = false;
        });

        // Update progress
        this.updateProgress();

        // Start timer
        this.startTimer();

        // Add question animation
        const questionCard = document.querySelector('.question-card');
        questionCard.style.transform = 'translateX(100px)';
        questionCard.style.opacity = '0';
        
        setTimeout(() => {
            questionCard.style.transform = 'translateX(0)';
            questionCard.style.opacity = '1';
            questionCard.style.transition = 'all 0.5s ease-out';
        }, 100);
    }

    updateProgress() {
        const currentQuestionSpan = document.getElementById('currentQuestion');
        const totalQuestionsSpan = document.getElementById('totalQuestions');
        const progressFill = document.getElementById('progressFill');
        const currentScoreSpan = document.getElementById('currentScore');

        currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
        totalQuestionsSpan.textContent = this.totalQuestions;
        currentScoreSpan.textContent = this.score;

        const progressPercentage = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }

    startTimer() {
        this.timeLeft = 7;
        this.updateTimerDisplay();

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        const timerProgress = document.getElementById('timerProgress');
        
        timerElement.textContent = this.timeLeft;
        
        // Update circular progress
        const percentage = (this.timeLeft / 7) * 100;
        const offset = 100 - percentage;
        timerProgress.style.strokeDashoffset = offset;

        // Change color based on time left
        if (this.timeLeft <= 2) {
            timerProgress.style.stroke = '#DC3545'; // Red
            timerElement.style.color = '#DC3545';
        } else if (this.timeLeft <= 4) {
            timerProgress.style.stroke = '#FD7E14'; // Orange
            timerElement.style.color = '#FD7E14';
        } else {
            timerProgress.style.stroke = '#28A745'; // Green
            timerElement.style.color = '#8B1538';
        }
    }

    selectAnswer(selectedButton) {
        if (this.isAnswered) return;

        this.isAnswered = true;
        clearInterval(this.timer);

        const selectedOption = selectedButton.dataset.option;
        const question = this.currentQuestions[this.currentQuestionIndex];
        const correctOption = question.correct;

        // Store user answer
        this.userAnswers.push({
            question: question.question,
            userAnswer: selectedOption,
            correctAnswer: correctOption,
            isCorrect: selectedOption === correctOption,
            explanation: question.explanation
        });

        // Disable all buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
        });

        // Show correct/incorrect styling
        selectedButton.classList.add('selected');
        
        if (selectedOption === correctOption) {
            selectedButton.classList.add('correct');
            this.score++;
            this.showFeedback('Correct!', 'success');
        } else {
            selectedButton.classList.add('incorrect');
            // Highlight correct answer
            document.querySelectorAll('.option-btn').forEach(btn => {
                if (btn.dataset.option === correctOption) {
                    btn.classList.add('correct');
                }
            });
            this.showFeedback('Incorrect!', 'error');
        }

        // Move to next question after delay
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    timeUp() {
        if (this.isAnswered) return;

        this.isAnswered = true;
        clearInterval(this.timer);

        const question = this.currentQuestions[this.currentQuestionIndex];
        const correctOption = question.correct;

        // Store user answer as timeout
        this.userAnswers.push({
            question: question.question,
            userAnswer: null,
            correctAnswer: correctOption,
            isCorrect: false,
            explanation: question.explanation,
            timedOut: true
        });

        // Disable all buttons and show correct answer
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.option === correctOption) {
                btn.classList.add('correct');
            }
        });

        this.showFeedback('Time\'s up!', 'timeout');

        // Move to next question after delay
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    showFeedback(message, type) {
        // Create feedback element
        const feedback = document.createElement('div');
        feedback.className = `feedback feedback-${type}`;
        feedback.textContent = message;
        
        // Style the feedback
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${type === 'success' ? '#28A745' : type === 'error' ? '#DC3545' : '#FD7E14'};
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 1.2rem;
            font-weight: 600;
            z-index: 1000;
            animation: feedbackPop 0.5s ease-out;
        `;

        document.body.appendChild(feedback);

        // Remove feedback after animation
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 1500);
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.displayQuestion();
    }

    quitQuiz() {
        if (confirm('Are you sure you want to quit the quiz? Your progress will be lost.')) {
            clearInterval(this.timer);
            this.showScreen('welcomeScreen');
        }
    }

    showResults() {
        clearInterval(this.timer);
        
        const correctAnswers = this.score;
        const incorrectAnswers = this.totalQuestions - this.score;
        const percentage = Math.round((this.score / this.totalQuestions) * 100);

        // Update results display
        document.getElementById('finalScore').textContent = `${correctAnswers}/${this.totalQuestions}`;
        document.getElementById('finalPercentage').textContent = `${percentage}%`;
        document.getElementById('correctAnswers').textContent = correctAnswers;
        document.getElementById('incorrectAnswers').textContent = incorrectAnswers;

        // Generate performance analysis
        const performanceText = this.generatePerformanceAnalysis(percentage);
        document.getElementById('performanceText').textContent = performanceText;

        this.showScreen('resultsScreen');

        // Add celebration animation for good scores
        if (percentage >= 80) {
            this.addCelebrationAnimation();
        }
    }

    generatePerformanceAnalysis(percentage) {
        if (percentage >= 90) {
            return "Outstanding! You have excellent knowledge of the Bible. Your deep understanding of Scripture is truly commendable. Keep studying God's Word!";
        } else if (percentage >= 80) {
            return "Great job! You have a solid understanding of Biblical knowledge. Continue reading and studying to deepen your faith and knowledge.";
        } else if (percentage >= 70) {
            return "Good work! You have a decent grasp of Bible basics. Consider spending more time in Bible study to strengthen your foundation.";
        } else if (percentage >= 60) {
            return "Not bad! You have some Biblical knowledge, but there's room for improvement. Regular Bible reading will help you grow in understanding.";
        } else if (percentage >= 50) {
            return "You're on the right track! Keep studying the Bible regularly. Consider joining a Bible study group to enhance your learning.";
        } else {
            return "Don't be discouraged! Everyone starts somewhere. Begin with regular Bible reading and prayer. God's Word will transform your understanding over time.";
        }
    }

    addCelebrationAnimation() {
        // Create confetti effect
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                this.createConfetti();
            }, i * 100);
        }
    }

    createConfetti() {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${['#8B1538', '#B8860B', '#DAA520', '#FFF8DC'][Math.floor(Math.random() * 4)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            z-index: 1000;
            animation: confettiFall 3s linear forwards;
        `;

        document.body.appendChild(confetti);

        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 3000);
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes feedbackPop {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }

    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    .feedback {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BibleQuizApp();
});

// Add some utility functions for enhanced user experience
function addLoadingAnimation() {
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(139, 21, 56, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            color: white;
            font-size: 1.5rem;
        ">
            <div style="text-align: center;">
                <div class="loading"></div>
                <p style="margin-top: 20px;">Loading Bible Quiz...</p>
            </div>
        </div>
    `;
    document.body.appendChild(loadingDiv);

    // Remove loading screen after a short delay
    setTimeout(() => {
        loadingDiv.remove();
    }, 1500);
}

// Add loading animation on page load
window.addEventListener('load', addLoadingAnimation);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (document.getElementById('quizScreen').classList.contains('active')) {
        switch(e.key) {
            case '1':
            case 'a':
            case 'A':
                document.querySelector('[data-option="A"]').click();
                break;
            case '2':
            case 'b':
            case 'B':
                document.querySelector('[data-option="B"]').click();
                break;
            case '3':
            case 'c':
            case 'C':
                document.querySelector('[data-option="C"]').click();
                break;
            case '4':
            case 'd':
            case 'D':
                document.querySelector('[data-option="D"]').click();
                break;
        }
    }
});

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - could be used for navigation
        } else {
            // Swiped right - could be used for navigation
        }
    }
}

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}