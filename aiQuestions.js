// Comprehensive AI Questions Database for Chatbot
const aiQuestions = [
    // Basic greetings and interactions
    {
        question: "hello",
        answer: "Hello! How can I help you today? Feel free to ask me anything!"
    },
    {
        question: "hi",
        answer: "Hi there! I'm your AI assistant. What would you like to know?"
    },
    {
        question: "how are you",
        answer: "I'm doing great, thank you for asking! I'm here and ready to help you with any questions you might have."
    },
    {
        question: "what is your name",
        answer: "My name is AI Assistant! I'm here to help you with information and answer your questions."
    },
    {
        question: "what can you do",
        answer: "I can answer questions, provide information, help with general knowledge, and assist you with various topics. I also have a quiz feature where you can test your knowledge!"
    },
    {
        question: "tell me about the quiz",
        answer: "The quiz section contains questions covering various topics including database systems, aptitude, and general knowledge. Each time you take it, the questions are shuffled randomly. You'll get immediate feedback on your answers and a final score at the end!"
    },
    {
        question: "how does the quiz work",
        answer: "The quiz works by presenting you with multiple-choice questions. Select your answer, click submit, and you'll see if you're correct. At the end, you'll get your total score and performance feedback!"
    },
    {
        question: "what topics are covered",
        answer: "The quiz covers a variety of topics including database systems, SQL, NoSQL databases, aptitude questions, mathematics, and general knowledge. Each quiz session is different due to random question shuffling!"
    },
    {
        question: "thank you",
        answer: "You're very welcome! I'm glad I could help. Feel free to ask more questions or try the quiz!"
    },
    {
        question: "thanks",
        answer: "You're welcome! Is there anything else I can help you with?"
    },
    {
        question: "goodbye",
        answer: "Goodbye! Thanks for chatting with me. Come back anytime for more questions or to take the quiz!"
    },
    {
        question: "bye",
        answer: "Bye! Have a great day and feel free to return whenever you need help!"
    },
    {
        question: "help",
        answer: "I'm here to help! You can ask me questions about various topics, or I can tell you about the quiz feature. Just type your question and I'll do my best to answer it!"
    },

    // Programming and Technology Questions
    {
        question: "what is javascript",
        answer: "JavaScript is a programming language that's essential for web development. It allows you to create interactive websites, handle user interactions, and build dynamic web applications. It's one of the core technologies of the web alongside HTML and CSS!"
    },
    {
        question: "what is html",
        answer: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of a webpage, defining elements like headings, paragraphs, links, images, and more. It's the foundation of every website!"
    },
    {
        question: "what is css",
        answer: "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML. It controls the layout, colors, fonts, and overall visual appearance of web pages, making them look beautiful and professional!"
    },

    // Database Questions
    {
        question: "what is sql",
        answer: "SQL stands for Structured Query Language, which is a standardized language for interacting with relational databases. It is used for tasks such as querying data, updating data, and defining database schema."
    },
    {
        question: "what is a database",
        answer: "A database is an organized collection of structured information or data, typically stored electronically in a computer system. It allows for efficient storage, retrieval, and management of data."
    },
    {
        question: "what is a primary key",
        answer: "A primary key is a unique identifier for each record in a database table. It ensures that each row in the table can be uniquely identified and helps maintain data integrity by preventing duplicate records."
    },
    {
        question: "what is a foreign key",
        answer: "A foreign key is a field in a database table that references the primary key of another table. It establishes a relationship between the two tables, ensuring referential integrity and enabling data consistency across related tables."
    },
    {
        question: "what is normalization",
        answer: "Normalization is the process of organizing data in a database to reduce redundancy and dependency. It involves breaking down large tables into smaller ones and defining relationships between them to minimize data duplication and improve data integrity."
    },
    {
        question: "what is nosql",
        answer: "NoSQL databases are non-relational databases designed to handle unstructured data and provide high scalability and performance. Examples include MongoDB, Cassandra, and Redis. They don't use the traditional table-based relational database structure."
    },
    {
        question: "what is mongodb",
        answer: "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It's designed to handle unstructured data and provides high scalability and performance for modern applications."
    },
    {
        question: "what is a transaction",
        answer: "A transaction is a sequence of one or more database operations that must be executed as a single unit. It ensures data consistency by either completing all operations successfully (commit) or rolling back changes if any operation fails (rollback)."
    },
    {
        question: "what is acid",
        answer: "ACID stands for Atomicity, Consistency, Isolation, Durability. These are the four key properties that guarantee the reliability and integrity of database transactions. They ensure that database operations are reliable and maintain data integrity."
    },
    {
        question: "what is an index",
        answer: "An index in a database is a data structure that improves the speed of data retrieval operations on a table. It works like the index of a book, allowing the database engine to quickly locate rows based on the indexed columns, thereby enhancing query performance."
    },
    {
        question: "what is a view",
        answer: "A view in a database is a virtual table that displays data from one or more tables. Views are stored queries that present data in a structured format, simplifying data access and providing a layer of abstraction over the underlying tables."
    },
    {
        question: "what is a stored procedure",
        answer: "A stored procedure in a database is a precompiled set of SQL statements stored in the database's data dictionary. It can be invoked by name to perform a specific task or operation, enhancing code reusability, security, and performance."
    },
    {
        question: "what is a trigger",
        answer: "A trigger in a database automatically executes a set of actions based on a specified event, such as INSERT, UPDATE, or DELETE operations on a table. Triggers are used to enforce business rules, maintain data integrity, and automate tasks."
    },

    // General Knowledge Questions
    {
        question: "what is the capital of france",
        answer: "The capital of France is Paris. It's one of the most famous cities in the world, known for its culture, art, fashion, and landmarks like the Eiffel Tower."
    },
    {
        question: "what is the largest ocean",
        answer: "The Pacific Ocean is the largest ocean on Earth, covering about one-third of the Earth's surface."
    },
    {
        question: "what is the speed of light",
        answer: "The speed of light in a vacuum is approximately 299,792 kilometers per second (or about 186,282 miles per second)."
    },
    {
        question: "what is pi",
        answer: "Pi (π) is a mathematical constant representing the ratio of a circle's circumference to its diameter. Its value is approximately 3.14159, though it's an irrational number with infinite decimal places."
    },
    {
        question: "what is the largest mammal",
        answer: "The Blue Whale is the largest mammal in the world, reaching lengths of up to 100 feet and weights of up to 200 tons."
    },
    {
        question: "what is the red planet",
        answer: "Mars is known as the Red Planet due to its reddish appearance, which is caused by iron oxide (rust) on its surface."
    },
    {
        question: "what is the largest desert",
        answer: "The Antarctic Desert is the largest desert in the world, covering about 14.2 million square kilometers. It's a polar desert with very little precipitation."
    },

    // Quiz and Learning Questions
    {
        question: "how many questions in quiz",
        answer: "The quiz contains 10 questions that are randomly selected from a larger pool of questions covering various topics including database systems, aptitude, and general knowledge."
    },
    {
        question: "can i retake the quiz",
        answer: "Yes! You can retake the quiz as many times as you want. Each time you take it, you'll get different questions due to the random shuffling system."
    },
    {
        question: "what happens if i get a question wrong",
        answer: "If you get a question wrong, you'll see immediate feedback showing the correct answer highlighted in green and your incorrect answer highlighted in red. This helps you learn from your mistakes!"
    },
    {
        question: "how is the score calculated",
        answer: "Your score is calculated as the number of correct answers out of the total number of questions. For example, if you get 7 out of 10 questions correct, your score is 70%."
    },
    {
        question: "what topics are in the quiz",
        answer: "The quiz covers database systems, SQL, NoSQL databases, aptitude questions, mathematics, general knowledge, and various other topics. The questions are designed to test your knowledge across different subjects."
    }
];
