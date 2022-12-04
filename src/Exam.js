import './Exam.css';

import React, { useEffect, useState } from 'react';

import ExamHeader from './ExamHeader';
import ExamQuestion from './ExamQuestion';
import loadExam from './loadExam';


function Exam({page, setPage, appScore, setAppScore, appTotalAnswered, setAppTotalAnswered}) {

  const [totalQuestions, setTotalQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);


  if (totalQuestions === 0)
  {
    loadExam(setQuestionList);
    setTotalQuestions(questionList.length);
  }

  if (reviewed){

    setScore(score + isCorrect);
    setTotalAnswered(totalAnswered+1);

    if(totalAnswered === questionList.length-1){
      setIsComplete(true);
    } else
    {
      setCurrentQuestion(currentQuestion+1);
    }
    setAnswered(false);
    setReviewed(false);
  }

  useEffect(() => {
    if (isComplete) {
      setAppScore(score);
      setAppTotalAnswered(totalAnswered);
      setPage(2);
    }
  }, [isComplete, score, totalAnswered]);

  return (
    <div className="App">

      <ExamHeader 
        totalQuestions = {totalQuestions}
        totalAnswered = {totalAnswered}
        score = {score}
      />

      <ExamQuestion 
        question = {questionList[currentQuestion]}
        answered = {answered}
        setAnswered = {setAnswered}
        isCorrect = {isCorrect}
        setIsCorrect = {setIsCorrect}
        setReviewed = {setReviewed}
        currentQuestion = {currentQuestion}
      />

    </div>
  );
}

export default Exam;
