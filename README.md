# ChatBot-Quiz-Web-App
An interactive and educational web application that merges a chatbot system with an aptitude-based quiz — developed using pure HTML, CSS, and JavaScript.

** 🔧 Project Overview**
This project demonstrates how basic frontend technologies can be used to create a dynamic, responsive user experience without the use of frameworks or libraries.

It has two main components:

🧠 1. Chatbot Interface
A lightweight chatbot that responds to user questions using a JavaScript array of objects that map questions to predefined answers.

❓ Users can ask basic questions like “How to start the quiz?” or “How many questions are there?”

🧠 JavaScript compares the user's input to stored questions and displays the correct answer.

🖼️ The UI simulates real chat behavior with message bubbles and typing effect for realism.

Example structure:

javascript
Copy
Edit
const chatbotResponses = [
  { question: "What is your name?", answer: "I’m your quiz assistant!" },
  { question: "How many questions?", answer: "There are 10 questions in the quiz." }
];
📝 2. Quiz Module
This section lets users take a short quiz on aptitude-related questions.

🗃️ Questions and options are stored in a JavaScript array of objects.

🔀 Every time the quiz loads, the questions are shuffled for randomness.

✅ User selects answers, and after submission, the app calculates and displays:

Total questions

Correct answers

Wrong answers

Final score

Example structure:

javascript
Copy
Edit
const quizQuestions = [
  {
    question: "What is the square of 12?",
    options: ["122", "144", "132", "156"],
    correctAnswer: "144"
  }
];
🎨 UI & UX
Built with only HTML and CSS for layout and styling.

Responsive design to work well on mobile and desktop.

Navigation between Chatbot and Quiz is simple and intuitive.

⚙️ Technologies Used
HTML5

CSS3

JavaScript (ES6)

🧪 How to Run
Clone or download this repo

Open index.html in your browser

Explore the chatbot or start the quiz!

📌 Future Improvements (Optional)
Store quiz scores locally

Add timed quiz functionality

Improve NLP capabilities of the chatbot
