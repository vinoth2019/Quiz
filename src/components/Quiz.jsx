import { useState } from "react";
import QUESTIONS from '../questions';
import quizCompleted from '../assets/quiz-complete.png'

export default function Quiz(){

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

    const userSelectHandler = (selectedAnswer) =>{
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })
    }
    if(quizIsCompleted){
        return <div id="summary">
            <img src={quizCompleted} alt="quizCompleted" />            
            <h2>Quiz Completed</h2>
        </div>
    }

    const suffleAnswers = QUESTIONS[activeQuestionIndex].answers;
    suffleAnswers.sort(() => Math.random() - 0.5); 
    return<div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {suffleAnswers.map((answer) => (
                    <li key={answer} className="answer"><button onClick={() => userSelectHandler(answer)}>{answer}</button></li>
                ))}
            </ul>
        </div>
    </div>
}