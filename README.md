# 🤖 Chatbot Quiz Web App

A modern, responsive web application built with pure HTML, CSS, and JavaScript that combines an interactive AI chatbot with a knowledge quiz system. Questions are loaded from external JavaScript files for easy customization and maintenance.

## ✨ Features

### 🤖 Chatbot Section
- **Interactive AI Assistant**: Chat with an AI that responds to user queries
- **External Q&A System**: Questions loaded from `aiQuestions.js` file
- **Smart Matching**: Intelligent question matching with fallback responses
- **Chat-like Interface**: Modern chat bubbles with user and bot avatars
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Interaction**: Instant responses with typing simulation

### 🧠 Quiz Section
- **External Question Database**: Questions loaded from `aptitudeQuestions.js` file
- **Advanced Shuffling**: Smart question randomization with history tracking
- **Multiple Choice Format**: Four options per question with clear selection
- **Immediate Feedback**: Visual feedback showing correct/incorrect answers
- **Score Tracking**: Real-time score calculation and final results
- **Performance Messages**: Encouraging feedback based on performance
- **Restart Functionality**: Take the quiz multiple times with different questions

### 🎨 Modern UI/UX
- **Beautiful Design**: Gradient backgrounds, smooth animations, and modern styling
- **Responsive Layout**: Optimized for all screen sizes
- **Tab Navigation**: Easy switching between chatbot and quiz sections
- **Smooth Animations**: Fade-in effects and hover interactions
- **Professional Typography**: Clean, readable fonts with proper hierarchy

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

### File Structure
```
Chatbot Quiz Web App/
├── index.html              # Main HTML structure
├── styles.css              # Complete CSS styling
├── script.js               # Main JavaScript functionality
├── aiQuestions.js          # Chatbot Q&A database
├── aptitudeQuestions.js    # Quiz questions database
└── README.md               # Project documentation
```

## 🎯 How to Use

### Chatbot
1. Click on the "Chatbot" tab
2. Type your question in the input field
3. Press Enter or click "Send"
4. The AI will respond with relevant information from the `aiQuestions.js` file
5. Try asking about:
   - General greetings ("hello", "hi", "how are you")
   - Quiz information ("tell me about the quiz", "how does the quiz work")
   - Programming topics ("what is JavaScript", "what is HTML", "what is CSS")
   - General questions ("what can you do", "help")

### Quiz
1. Click on the "Quiz" tab
2. Click "Start Quiz" to begin
3. Questions are randomly selected from `aptitudeQuestions.js`
4. Read each question carefully
5. Select your answer from the four options
6. Click "Submit Answer" to confirm
7. See immediate feedback on your answer
8. Continue through all questions
9. View your final score and performance message
10. Click "Take Quiz Again" to restart with new questions

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **Vanilla JavaScript**: No frameworks or libraries required
- **Google Fonts**: Inter font family for clean typography

### Key Features
- **External File Loading**: Questions loaded from separate JavaScript files
- **Advanced Question Shuffling**: Smart randomization with history tracking
- **Pure JavaScript**: No external dependencies
- **Responsive Design**: Mobile-first approach
- **Modular Code**: Well-organized and commented
- **Cross-browser Compatible**: Works on all modern browsers
- **Performance Optimized**: Fast loading and smooth interactions

## 🎨 Customization

### Adding New Chatbot Questions
Edit the `aiQuestions.js` file:
```javascript
{
    question: "your question here",
    answer: "your answer here"
}
```

### Adding New Quiz Questions
Edit the `aptitudeQuestions.js` file:
```javascript
{
    question: "Your question?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0 // Index of correct answer (0-3)
}
```

## 🔧 Development

### Project Structure
- **HTML**: Semantic structure with proper accessibility
- **CSS**: Organized with comments and logical grouping
- **JavaScript**: Modular functions with clear separation of concerns
- **External Files**: Separate question databases for easy maintenance

### Code Organization
- **Tab Navigation**: Smooth switching between sections
- **Chatbot Logic**: Q&A matching with fallback responses
- **Quiz Engine**: Advanced randomization, scoring, and feedback system
- **Event Handling**: Responsive user interactions
- **Animation System**: Smooth transitions and effects
- **File Loading**: Robust external file integration

### External File Integration
- **aiQuestions.js**: Contains all chatbot Q&A pairs
- **aptitudeQuestions.js**: Contains all quiz questions and answers
- **Error Handling**: Graceful fallbacks if files fail to load
- **Dynamic Updates**: Easy to modify questions without touching main code

![ChatBot Quiz Web App thumbnail](https://github.com/user-attachments/assets/c027f34f-5094-4028-8ad3-47df641349d5)

