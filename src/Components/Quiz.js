// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import './Quiz.css';
import Nav3 from './Nav3.js';
// Define questions and their expected answers for each set
const sets = [
    {
        questions: [
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" }
        ],
        finalAnswer: "a"
    },
    {
        questions: [
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" }
        ],
        finalAnswer: "a"
    },
    {
        questions: [
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" },
            { question: "What is a", key: "a" }
        ],
        finalAnswer: "a"
    }
];

const Quiz = () => {
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [setFinished, setSetFinished] = useState(false);
    const [marks, setMarks] = useState(0);
    const [userFinalAnswer, setUserFinalAnswer] = useState("");
    const [timer, setTimer] = useState(30);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        if (timer > 0 && !setFinished) {
            const timerId = setInterval(() => setTimer((prev) => prev - 1), 1000);
            return () => clearInterval(timerId);
        } else if (timer === 0) {
            setFeedback("Time is up! Please try again.");
            setIsCorrect(false);
        }
    }, [timer, setFinished]);

    const handleAnswer = (answer) => {
        const userAnswer = answer.trim().toUpperCase(); // Trim whitespace and convert to uppercase
        const correctAnswer = sets[currentSetIndex].questions[currentQuestionIndex].key.toUpperCase();

        if (userAnswer === correctAnswer) {
            setFeedback("Correct!");
            setIsCorrect(true);
        } else {
            setFeedback("Incorrect! Please try again.");
            setIsCorrect(false);
        }
    };

    const handleNextQuestion = () => {
        if (isCorrect || timer === 0) {
            if (currentQuestionIndex < sets[currentSetIndex].questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setTimer(30); // Reset timer
                setIsCorrect(false); // Reset correctness
                setFeedback(""); // Clear feedback
            } else {
                setSetFinished(true);
            }
        }
    };

    const handleFinalAnswerCheck = () => {
        if (userFinalAnswer.toUpperCase() === sets[currentSetIndex].finalAnswer) {
            setMarks(5);
            setFeedback("Correct! You've scored 5 marks.");
        } else {
            setMarks(0);
            setFeedback("Incorrect! You've scored 0 marks.");
        }
    };

    const handleNextSet = () => {
        setCurrentSetIndex(currentSetIndex + 1);
        setCurrentQuestionIndex(0);
        setSetFinished(false);
        setMarks(0);
        setUserFinalAnswer("");
        setTimer(30);
    };

    return (
        <div >
            <Nav3/>
        <div className='quiz'>
            {setFinished ? (
                <div>
                     
                   <h4>Please enter your final answer:</h4>
                    <input
                        type="text"
                        placeholder="Final Answer"
                        onChange={(e) => setUserFinalAnswer(e.target.value)}
                    />
                    <button onClick={handleFinalAnswerCheck}>Check Final Answer</button>
                    <h4>{feedback}</h4>
                    <h3>Your Marks: {marks}/5</h3>
                    {currentSetIndex < sets.length - 1 && (
                        <button onClick={handleNextSet}>Next Question</button>
                    )}
                </div>
            ) : (
                <div>
                      <h5>Time remaining: {timer} seconds</h5>
                    <h4>{sets[currentSetIndex].questions[currentQuestionIndex].question}</h4>
                    <input
                        type="text"
                        placeholder="Your answer"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAnswer(e.target.value);
                                e.target.value = ''; // Clear input after submission
                            }
                        }}
                    />
                    <div className='sbuttons'>
                    <button
                        onClick={() => {
                            const answer = document.querySelector('input[placeholder="Your answer"]').value;
                            handleAnswer(answer);
                            document.querySelector('input[placeholder="Your answer"]').value = ''; // Clear input
                        }}
                    >
                        Submit
                    </button>
                    {isCorrect && (
                        <button onClick={handleNextQuestion}>Next Question</button>
                    )}
                    </div>
                    <h5>{feedback}</h5>
                  
                </div>
            )}
            {setFinished && currentSetIndex === sets.length - 1 && (
                <h3>Quiz Completed!</h3>
            )}
        </div>
        </div>
    );
};

export default Quiz;
