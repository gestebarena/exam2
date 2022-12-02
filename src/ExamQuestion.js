import React, { useState, useRef, useEffect } from 'react';

function QuestionInput ({question, answered, setAnswered, isCorrect, setIsCorrect, setReviewed}) {

    const [textAnswer, setTextAnswer] = useState('');
    const [reviewComment, setReviewComment] = useState('');
    

    switch (question.type) {
        case "multiple-choice":
            switch (answered){
                case false:
                    return (
                        <div>
                            <ul>
                                {question.options.map((option) => {
                                return (
                                    <li 
                                    className = 'li'
                                    key={option.id}
                                    onClick={() => optionClicked(
                                        question,
                                        answered, 
                                        setAnswered,
                                        isCorrect,
                                        setIsCorrect,
                                        option.id
                                        )
                                    }
                                    >
                                    {option.text}
                                    </li>
                                );
                                })}
                            </ul>
                        </div>
                    );
                case true:
                    return (
                        <div>
                            <ul>
                                {question.options.map((option) => {
                                return (
                                    <li 
                                    className = {option.isCorrect? 'li_right' : 'li_wrong'}
                                    key={option.id}
                                    onClick={() => setReviewed(true)}
                                    >
                                    {option.text}
                                    </li>
                                );
                                })}
                            </ul>
                        </div>
                    );
            }
        case "text-input":
            switch (answered){
                case false:
                    return (
                        <div>
                            <label>
                                <input autoFocus type="text"  autoComplete="off" name="answer" 
                                        //onChange={handleChange}
                                        onKeyDown={(e) => textInput(e,
                                            question,
                                            answered, 
                                            setAnswered,
                                            isCorrect,
                                            setIsCorrect,
                                            setTextAnswer,
                                            setReviewComment
                                            )}/>
                            </label>
                        </div>
                    );
                case true:

                    return (
                        <div>
                            <div className =  {isCorrect == 0 ? 'studentAnswerWrong' : 'studentAnswerRight'}>
                                {textAnswer}
                            </div>
                            <div className='reviewComment'>
                                {reviewComment}
                            </div>
                            <button className = 'reviewedButton' onClick={() => setReviewed(true)}  >OK</button>
                        </div>                       
                    )
            }
    }
}

function ExamQuestion({question, answered, setAnswered, isCorrect, setIsCorrect, setReviewed}) {
    return (
        <div className="question-card">
            <img className='picture' src= {question.image}></img>
            <h3 className="question-text">{question.text}</h3>

        
            <QuestionInput 
            question = {question}
            answered = {answered}
            setAnswered = {setAnswered}
            isCorrect = {isCorrect}
            setIsCorrect = {setIsCorrect}
            setReviewed = {setReviewed}
            />
        </div>
    );
  }

function optionClicked(question, answered, setAnswered, isCorrect, setIsCorrect, clicked) {
    setAnswered(true);
    setIsCorrect(question.options[clicked].isCorrect?1:0);
}

function textInput(e, question, answered, setAnswered, isCorrect, setIsCorrect, setTextAnswer, setReviewComment) {
    if (e.key === 'Enter') {
        setTextAnswer(e.target.value);
        setIsCorrect(review(question.correct, e.target.value, setReviewComment));
        setAnswered(true);
    }
}

function checkKey(e, setReviewed) {
    if (e.key === 'Enter') {
        console.log('llego');
        setReviewed(true);
    }
}

function review(correcta, tentativa, setReviewComment){
        var original = correcta;
        correcta = Fix(correcta).toLowerCase();
        tentativa = Fix(tentativa).toLowerCase();

        if(correcta.trim().normalize() === (tentativa.trim().normalize())) {
            setReviewComment("YES!! (+1)");
            return 1;
        }

        if(correcta.replaceAll("é", "e").normalize() === tentativa.normalize()) {
            setReviewComment("Bien, pero cuidado con el acento!! (+0.9)"+"   \""+original+"\"");
            return 0.9;
        }

        if(correcta.normalize().toLowerCase === tentativa.normalize().toLowerCase()) {
            setReviewComment("Bien, pero cuidado con las mayúsculas! (+0.9)"+"   \""+original+"\"");
            return 0.9;
        }

        if(correcta.replaceAll("\\p{Punct}", "").normalize() === tentativa.replaceAll("\\p{Punct}", "").normalize()) {
            setReviewComment("Bien, pero cuidado con los puntos y las comas!! (+0.9)"+"   \""+original+"\"");
            return 0.9;
        }

        if(correcta.replaceAll("é", "e").normalize().toLowerCase() === tentativa.normalize().toLowerCase()) {
            setReviewComment("Bien, pero cuidado con el acento y las mayúsculas!! (+0.8)"+"   \""+original+"\"");
            return 0.8;
        }

        if(correcta.replaceAll("é", "e").replaceAll("\\p{Punct}", "").normalize() === tentativa.replaceAll("\\p{Punct}", "").normalize()) {
            setReviewComment("Bien, pero cuidado con el acento y la puntuacion!! (+0.8)"+"   \""+original+"\"");
            return 0.8;
        }


        if(correcta.replaceAll("a ", "").replaceAll("an ", "").normalize() === tentativa.normalize()) {
            setReviewComment("Bien, pero falto poner a (o an)  (+0.5)"+"   \""+original+"\"");
            return 0.5;
        }

        if(correcta.replaceAll("a ", "").replaceAll("an ", "").normalize().toLowerCase() === tentativa.normalize().toLowerCase()) {
            setReviewComment("Bien, pero falto poner a (o an) y las mayusculas (+0.3)"+"   \""+original+"\"");
            return 0.3;
        }

        if(correcta.replaceAll("\\p{Punct}", "").normalize().toLowerCase() === tentativa.replaceAll("\\p{Punct}", "").normalize().toLowerCase()) {
            setReviewComment("Bien, pero cuidado con los puntos, las comas y las mayúsculas! (+0.5)"+"   \""+original+"\"");
            return 0.5;
        }

        if(correcta.replaceAll("é", "e").replaceAll("\\p{Punct}", "").normalize().toLowerCase() === tentativa.replaceAll("\\p{Punct}", "").normalize().toLowerCase()) {
            setReviewComment("Bien, pero cuidado con el acento, puntuación y las mayúsculas!! (+0.5)"+"   \""+original+"\"");
            return 0.5;
        }

        setReviewComment("NO.  The right answer is  -->  "+original+"   (+0)");
        return 0.0;
    }

    function Fix(input){
        input = input.trim();
        input = input.replaceAll("I'm", "I am");
        input = input.replaceAll("i'm", "i am");
        input = input.replaceAll("isn't", "is not");
        input = input.replaceAll("Isn't", "Is not");
        input = input.replaceAll("where's", "where is");
        input = input.replaceAll("Where's", "Where is");
        input = input.replaceAll("can't", "cant not");
        input = input.replaceAll("Can't", "Cant not");
        input = input.replaceAll("she's", "she is");
        input = input.replaceAll("She's", "She is");
        input = input.replaceAll("it's", "it is");
        input = input.replaceAll("It's", "It is");
        input = input.replaceAll("don't", "do not");
        input = input.replaceAll("Don't", "Do not");
        input = input.replaceAll("Thanks", "Thank you");
        input = input.replaceAll("We are", "We're");
        input = input.replaceAll("thanks", "thank you");
        input = input.replaceAll("we are", "we're");

        return input;
    }

  export default ExamQuestion;