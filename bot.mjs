// Define your chatbot function
export function generateBotResponse(userMessage, currentSubject, currentQuestions, currentQuizIndex) {
    let botResponse;

    // Greetings and casual responses
    const greetings = [
        "Hey there! How can I assist you today?",
        "Hi! What's on your mind?",
        "Hello! Tell me more!",
        "Hey! I'm here to help. Ask me anything!",
        "Hey, what's up?",
        "Hi! How's it going?"
    ];

    // Responses related to asking about the bot's capabilities
    const capabilitiesResponses = [
        "I'm here to chat and provide information. Feel free to ask me anything!",
        "I can help you with quizzes, provide explanations, and chat about various topics.",
        "I'm a chatbot designed to assist you with quizzes and answer your questions.",
        "I'm equipped to chat with you and provide information on a variety of topics.",
        "I'm here to assist you. Let me know how I can help!"
    ];

    // Responses related to asking about the quiz
    const quizResponses = [
        "The quiz consists of 20 random questions covering various topics. You'll need to select the correct answer for each question.",
        "You'll be presented with a series of quiz questions covering different topics. Are you ready to test your knowledge?",
        "The quiz covers a range of subjects, including Artificial Intelligence, General Aptitude, and Database Systems.",
        "You'll need to answer quiz questions based on various topics. Feel free to ask for explanations if needed!",
        "Get ready to challenge yourself with the quiz! Answer each question to the best of your ability."
    ];

    // Responses related to expressing gratitude
    const gratitudeResponses = [
        "You're welcome! If you have any more questions, feel free to ask.",
        "Glad I could help! Let me know if there's anything else you need assistance with.",
        "No problem at all! If there's anything else you'd like to know, just ask.",
        "Happy to assist! If there's anything else on your mind, feel free to reach out.",
        "Anytime! If there's anything else you need assistance with, just let me know."
    ];

    // Topics related to everyday life
    const everydayLifeTopics = [
        "How's your day going?",
        "What's your favorite hobby?",
        "Do you have any plans for the weekend?",
        "Have you seen any good movies or TV shows lately?",
        "What's your favorite type of cuisine?"
    ];

    // Topics related to technology
    const technologyTopics = [
        "Have you tried any new gadgets recently?",
        "What's your opinion on the latest smartphone models?",
        "Do you think artificial intelligence will change the world?",
        "How do you stay updated on technology news?",
        "What's your favorite app or website?"
    ];

    // Topics related to education
    const educationTopics = [
        "What's your favorite subject in school?",
        "How do you like to study for exams?",
        "What's the most interesting thing you've learned recently?",
        "Do you enjoy reading books? Any favorites?",
        "What's your opinion on online learning?"
    ];

    // Database system questions, answers, and explanations
    const databaseQuestions = [
        {
            question: "What is the purpose of the HAVING clause in SQL?",
            options: {
                a: "To filter rows before grouping",
                b: "To filter rows after grouping",
                c: "To join tables",
                d: "To sort results"
            },
            correct: "b",
            explanation: "The HAVING clause is used to filter rows after grouping, similar to the WHERE clause but applied after the GROUP BY operation."
        },
        {
            question: 'What is normalization in the context of databases?',
            options: { a: 'The process of combining tables to improve performance',
                       b: 'The process of duplicating data for backup', 
                       c: 'The process of organizing data to reduce redundancy', 
                       d: 'The process of removing all null values'
             },
            correct: 'c',
            explanation: 'Normalization is the process of organizing data in a database to reduce redundancy and dependency. It involves breaking down large tables into smaller ones and defining relationships between them to minimize data duplication and improve data integrity.'

        },
        {
            question: 'What is a foreign key in a database?',
            options: { a: 'A field that contains binary data', b: 'A field that references a primary key in another table', c: 'A field that uniquely identifies each record in a table', d: 'A field that contains null values' },
            correct: 'b',
            explanation: ' A foreign key is a field in a database table that references the primary key of another table. It establishes a relationship between the two tables, known as a foreign key constraint, ensuring referential integrity and enabling data consistency across related tables.'

        },
        {
            question: 'Which of the following is an aggregate function in SQL?',
            options: { a: 'GROUP BY', b: 'HAVING', c: 'SUM', d: 'WHERE' },
            correct: 'c',
            explanation: 'SUM is an aggregate function in SQL used to calculate the sum of values in a column. Other aggregate functions include COUNT, AVG, MAX, and MIN, which perform calculations on sets of values.'
        },
        {
            question: 'What is a transaction in a database?',
            options: { a: 'A set of operations that must be executed as a single unit', b: 'A single query executed against a database', c: 'The process of normalizing data in a database', d: 'A backup process in a database' },
            correct: 'a',
            explanation:'A transaction is a sequence of one or more database operations that must be executed as a single unit. It ensures data consistency by either completing all operations successfully (commit) or rolling back changes if any operation fails (rollback).'
        },
        {
            question: 'Which of the following is not a valid SQL data type?',
            options: { a: 'VARCHAR', b: 'INTEGER', c: 'BOOLEAN', d: 'IMAGE' },
            correct: 'd',
            explanation:'IMAGE is not a valid SQL data type. SQL data types include VARCHAR (variable-length character strings), INTEGER (whole numbers), and BOOLEAN (true/false values), but IMAGE is not recognized as a standard SQL data type.'
        },
        {
            question: 'What is the purpose of a view in a database?',
            options: { a: 'To physically store data in a database', b: 'To provide a virtual table that displays data from one or more tables', c: 'To partition data into different tables', d: 'To normalize data in a database' },
            correct: 'b',
            explanation:' The purpose of a view in a database is to provide a virtual table that displays data from one or more tables. Views are stored queries that present data in a structured format, simplifying data access and providing a layer of abstraction over the underlying tables.'
        },
        {
            question: 'Which of the following is a database isolation level?',
            options: { a: 'Read Committed', b: 'Write Back', c: 'Read Last', d: 'Repeatable Read' },
            correct: 'a',
            explanation: 'Read Committed is a database isolation level that ensures a transaction sees only committed data.'
        },
        {
            question: 'What is the purpose of the UNION ALL operator in SQL?',
            options: { a: 'To filter rows in a query', b: 'To combine the results of two or more queries without removing duplicates', c: 'To group data by a certain column', d: 'To sort rows in a query' },
            correct: 'b',
            explanation: 'The UNION ALL operator in SQL is used to combine the results of two or more SELECT queries into a single result set, including all rows from each query.'
        },
        {
            question: 'What is the purpose of a foreign key in a database?',
            options: { a: 'To enforce data integrity between tables', b: 'To define relationships between tables', c: 'To create indexes for faster queries', d: 'To filter rows in a query' },
            correct: 'b',
            explanation: 'A foreign key in a database establishes a relationship between two tables, enforcing referential integrity and ensuring that values in one tables foreign key column match values in another tables primary key column.'
        },
        {
            question: 'Which of the following is an example of a key-value store database?',
            options: { a: 'Redis', b: 'Neo4j', c: 'Cassandra', d: 'MySQL' },
            correct: 'a',
            explanation: 'Redis is an example of a key-value store database, where data is stored as a collection of key-value pairs.'
        },
        {
            question: 'What is the purpose of the DISTINCT keyword in SQL?',
            options: { a: 'To filter rows in a query', b: 'To remove duplicate rows from the result set', c: 'To combine data from multiple tables', d: 'To group data by a certain column' },
            correct: 'b',
            explanation: 'The DISTINCT keyword is used to remove duplicate rows from the result set of a SELECT query, returning only unique rows.'
        },
        {
            question: 'Which of the following is an example of a database clustering technology?',
            options: { a: 'MySQL', b: 'Redis', c: 'Apache Cassandra', d: 'MongoDB' },
            correct: 'c',
            explanation: 'Apache Cassandra is an example of a database clustering technology.'
        },
        {
            question: 'What is the purpose of the INNER JOIN clause in SQL?',
            options: { a: 'To combine rows from two or more tables based on a related column', b: 'To filter rows in a query', c: 'To create indexes for faster queries', d: 'To define relationships between tables' },
            correct: 'a',
            explanation: 'The INNER JOIN clause is used to combine rows from two or more tables based on a related column.'
        },
        {
            question: 'What is a common use of the TRUNCATE TABLE statement in SQL?',
            options: { a: 'To delete all rows in a table without removing the table structure', b: 'To create a new table', c: 'To drop a table and its data', d: 'To modify the schema of a table' },
            correct: 'a',
            explanation: 'TRUNCATE TABLE is commonly used to delete all rows in a table without removing the table structure.'
        },
        {
            question: 'Which of the following is a feature of NoSQL databases?',
            options: { a: 'Complex joins', b: 'Fixed schema', c: 'ACID compliance', d: 'Horizontal scaling' },
            correct: 'd',
            explanation: 'Horizontal scaling is a key feature of NoSQL databases, allowing them to handle large volumes of data by distributing it across multiple servers.'
        },
        {
            question: 'What is the purpose of a data warehouse?',
            options: { a: 'To store and manage data for transactional processing', b: 'To store and manage data for analytical processing', c: 'To create indexes for faster queries', d: 'To store and manage data for real-time processing' },
            correct: 'b',
            explanation: 'A data warehouse is specifically designed to store and manage data for analytical processing. It is optimized for querying and analyzing large volumes of data to support business intelligence and decision-making.'
        },
        {
            question: 'Which of the following is a method of securing a database?',
            options: { a: 'Data encryption', b: 'Data replication', c: 'Data aggregation', d: 'Data fragmentation' },
            correct: 'a',
            explanation: 'Data encryption is a common method of securing a database, ensuring that sensitive information is protected from unauthorized access or tampering.'
        },
        {
            question: 'What is the purpose of the CREATE INDEX statement in SQL?',
            options: { a: 'To create a new table', b: 'To create a view', c: 'To create an index for faster queries', d: 'To define relationships between tables' },
            correct: 'c',
            explanation: 'The CREATE INDEX statement in SQL is used to create an index for faster queries. Indexes improve the performance of SELECT queries by providing a faster way to retrieve data based on specific columns.'
        },
        {
            question: 'Which of the following is an example of a document store database?',
            options: { a: 'MongoDB', b: 'MySQL', c: 'Oracle', d: 'PostgreSQL' },
            correct: 'a',
            explanation: 'MongoDB is an example of a document store database. Document databases store data in flexible, JSON-like documents, making them suitable for a wide range of applications and data models.'
        },
        
    ];

    // Check user message for specific keywords or phrases
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi') || userMessage.toLowerCase().includes('hey')) {
        botResponse = getRandomResponse(greetings);
    } else if (userMessage.toLowerCase().includes('how are you')) {
        botResponse = "I'm just a bot, but I'm here to help you!";
    } else if (userMessage.toLowerCase().includes('what can you do') || userMessage.toLowerCase().includes('what do you do')) {
        botResponse = getRandomResponse(capabilitiesResponses);
    } else if (userMessage.toLowerCase().includes('rules for the quiz') || userMessage.toLowerCase().includes('quiz rules')) {
        botResponse = "The quiz consists of 20 questions covering various topics. You'll need to select the correct answer for each question.";
    } else if (userMessage.toLowerCase().includes('tell me about quiz') || userMessage.toLowerCase().includes('about the quiz')) {
        botResponse = getRandomResponse(quizResponses);
    } else if (userMessage.toLowerCase().includes('thank you') || userMessage.toLowerCase().includes('thanks')) {
        botResponse = getRandomResponse(gratitudeResponses);
    } else if (userMessage.toLowerCase().includes('life') || userMessage.toLowerCase().includes('hobby') || userMessage.toLowerCase().includes('weekend')) {
        botResponse = getRandomResponse(everydayLifeTopics);
    } else if (userMessage.toLowerCase().includes('technology') || userMessage.toLowerCase().includes('gadgets') || userMessage.toLowerCase().includes('smartphone')) {
        botResponse = getRandomResponse(technologyTopics);
    } else if (userMessage.toLowerCase().includes('education') || userMessage.toLowerCase().includes('school') || userMessage.toLowerCase().includes('study')) {
        botResponse = getRandomResponse(educationTopics);
    } else if (userMessage.toLowerCase().includes('explanation for database system question')) {
        botResponse = getDatabaseQuestionsExplanation(databaseQuestions);
    } else {
        // If no specific keyword is detected, provide a generic response
        botResponse = "Hmm, I'm not sure I understand. Could you please rephrase or ask something else?";
    }

    // Move to the next question if applicable
    if (currentQuizIndex < currentQuestions.length) {
        // Increment the quiz index
        currentQuizIndex++;
    }

    return botResponse;
}

// Function to select a random response from an array
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to get the explanation for all database system questions
function getDatabaseQuestionsExplanation(databaseQuestions) {
    let explanationMessage = "Here are the explanations for the database system questions:\n\n";
    
    databaseQuestions.forEach((question, index) => {
        explanationMessage += `Question ${index + 1}: ${question.question}\n`;
        explanationMessage += `Correct Answer: ${question.options[question.correct]}\n`;
        explanationMessage += `Explanation: ${question.explanation}\n\n`;
    });
    
    return explanationMessage;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const chatIcon = document.getElementById('chat-icon');
    const chatContainer = document.getElementById('chat-container');
    const chatLogs = document.querySelector('.chat-logs');
    const chatInput = document.getElementById('chat-message');
    const chatSubmit = document.getElementById('chat-submit');
    const chatClose = document.getElementById('chat-close');

    // Ensure all elements exist before adding event listeners
    if (chatIcon && chatContainer && chatLogs && chatInput && chatSubmit && chatClose) {
        console.log('All necessary elements found, adding event listeners...');

        chatIcon.addEventListener('click', function() {
            chatContainer.style.display = 'block';
        });

        chatClose.addEventListener('click', function() {
            chatContainer.style.display = 'none';
        });

        chatSubmit.addEventListener('click', function(event) {
            event.preventDefault();
            submitMessage();
        });

        chatInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                submitMessage();
            }
        });

        let currentSubject = null;
        let currentQuestions = [];
        let currentQuizIndex = 0;

        function submitMessage() {
            const userMessage = chatInput.value.trim();
            if (userMessage !== '') {
                const userMsgElement = document.createElement('div');
                userMsgElement.className = 'chat-msg user';
                userMsgElement.textContent = `You: ${userMessage}`;
                chatLogs.appendChild(userMsgElement);
                chatInput.value = ''; // Clear input field
                chatLogs.scrollTop = chatLogs.scrollHeight;
        
                const botMsgElement = document.createElement('div');
                botMsgElement.className = 'chat-msg bot';
                const botResponse = generateBotResponse(userMessage, currentSubject, currentQuestions, currentQuizIndex);
                botMsgElement.textContent = `Bot: ${botResponse}`;
                chatLogs.appendChild(botMsgElement);
                chatLogs.scrollTop = chatLogs.scrollHeight;
            }
        }
        
    } else {
        console.log('Some elements are missing in the DOM. Double-check the IDs and class names.');
    }
});
