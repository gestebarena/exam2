import React, { useState, useRef, useEffect } from 'react';
import jsrsasign from 'jsrsasign';

const SHEET_ID = '1i9c9nfmQK8_NG72ZCjhIH_8LGYtQ3Hp9t6vCNI8yt8U';


function QuestionInput ({question, answered, setAnswered, isCorrect, setIsCorrect, setReviewed, currentQuestion}) {

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
                                        option.id,
                                        currentQuestion
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
                                            setReviewComment,
                                            currentQuestion
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

function ExamQuestion({question, answered, setAnswered, isCorrect, setIsCorrect, setReviewed, currentQuestion}) {
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
            currentQuestion = {currentQuestion}
            />
        </div>
    );
  }

function optionClicked(question, answered, setAnswered, isCorrect, setIsCorrect, clicked, currentQuestion) {
    var correct = question.options[clicked].isCorrect?1:0;
    setIsCorrect(correct);
    saveAnswer(currentQuestion, correct, clicked);
    setAnswered(true);
}

function textInput(e, question, answered, setAnswered, isCorrect, setIsCorrect, setTextAnswer, setReviewComment, currentQuestion) {
    if (e.key === 'Enter') {
        setTextAnswer(e.target.value);
        var correct = review(question.correct, e.target.value, setReviewComment);
        setIsCorrect(correct);
        saveAnswer(currentQuestion, correct, e.target.value);
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
        input = input.replaceAll("n't", " not");
        input = input.replaceAll("where's", "where is");
        input = input.replaceAll("Where's", "Where is");
        input = input.replaceAll("she's", "she is");
        input = input.replaceAll("She's", "She is");
        input = input.replaceAll("it's", "it is");
        input = input.replaceAll("It's", "It is");
        input = input.replaceAll("Thanks", "Thank you");
        input = input.replaceAll("'re", " are");
        input = input.replaceAll("thanks", "thank you");
        input = input.replaceAll("Thanks", "Thank you");
        input = input.replaceAll("n't", " not");
        input = input.replaceAll("what's", "what is");
        input = input.replaceAll("What's", "What is");
        input = input.replaceAll("that's", "that is");
        input = input.replaceAll("That's", "That is");
        input = input.replaceAll("there's", "there is");
        input = input.replaceAll("There's", "There is");


        return input;
    }

    function auth () {
        return new Promise ((resolve, reject) => {
    
          var pHeader = {"alg":"RS256","typ":"JWT"};
          var sHeader = JSON.stringify(pHeader);
    
          var pClaim = {};
          pClaim.aud = "https://www.googleapis.com/oauth2/v3/token";
          pClaim.scope = "https://www.googleapis.com/auth/spreadsheets";
          pClaim.iss = "exam-699@exam-0512.iam.gserviceaccount.com";
          pClaim.exp = jsrsasign.jws.IntDate.get("now + 1hour");
          pClaim.iat = jsrsasign.jws.IntDate.get("now");
          
          var sClaim = JSON.stringify(pClaim);
    
          var key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDSbIx/edg0EIpi\nFJFL9rMUywHOnEWSCM5DNYorZU/b9WEjHjudXyKzwCdHScwYzwermxFcAlvSlmbP\n0PFD0KPEtCaW/SKkkNPFlaMGBQ6xYMpSXgqA9X6Okz6HXNQXWyWc8qOJDkVLDV1P\ny9CGDHgxlurEAMJnXnDFPh+51mtkjTSBO1RJTaMAtRT2Up4S3w5bi2XErnON2qqg\nRHbW5CxHfKrh8WASGDJlHtp7uUgC1QCX1VwOuY2VCpQIUEDU1RYQOPJvTRuNPPIh\nLCRp5+7o3nG6vjyScf3brpQ9kolc8HGCOSxbSwShHElfeJn2kPF5G4eWLB4eDDhi\nLxyTcHqTAgMBAAECggEAGIFOrWEdsMEvtHNhEQp7rtNjdFHA97Gcf7mM9o0iYI3H\newUAJqLCfPzG4OeduVKRj0ZhnlL3VDjIDrHuXu+TGuBrUWXNB9gxPrnfQIoMkiig\n9zhUxdGRJFPOfN9ueFfY3gRoehjA222E1+Whn511I+VHlX2Me5Lv1BtDgOtmb1Dy\nYPosV/BXYJ05AeWKEgbBSamQLLH6bNZgnxIhlP4AtDBclTWdiEZZkxqhAB/wietY\nG+wL4qqpNFhAG09lwS6zAZKmQpl0Hmpk+S9Hp79RUavC7k3Pf1LauzhEdGSTYYny\nQN8wtgRWJ/919oJnNYsxw/55M0YJ5Ny7i6MvOR4HOQKBgQDtqRVQ7RBjUC3ltXxF\nQAWkieqCfM8ywSUEwydru4IF/s33+EujdDPw0vUizpvtGTBE8IHRmeP9DY9U2m4X\npqnRHKfi29PrFH6DsP00JK+u30NSNY4c0vrdsaFPFwFd3+j6ZLF95TCb8q5Gy5Pm\nmKWGJ3eLsaX22wzMFMAmNgsryQKBgQDiqWqz1V7xSqmZtly2dGC3wzuP6fzgyRrU\nWAVBvj6zMxtiJtmKTpzmanV5h9zH4/v/cGxz0cReB/u4hwcEGjDJS16S/egtzFpi\nWtHTN1+PNuEzXSiM1X8SxGnNPjDjjDDB1jiY50ujNPsDBTWKk2DEfu5sqLRhUMM5\nMazUgrVpewKBgQDN3VYCmKdGb9CiFzgDQHbi1TiXOYe9fkMTwfxmvLDfgp1lu+XB\nO8o2RHZlZTT6B4ShYvgA2N39eH580QzmXc7hvYHL6AHEsyb36hsazOCFiQ3mq09j\ntnnqCZEiUlozt94273w0ApC9tVSzLGr8J6PR9mP+VK7fi1WlfiAHuW6pyQKBgQDc\nLjT/8qLjBGNSdWsEtnKJsDZ465UCC3lrkwGwRo2D6H6OTyz9hLY3wmzRnOAksVxH\nXD+OFtSJf3nQXCK9om+H6xY49juH2b5nUtAHPQAwD+Cd074jaPWjFnesr+Av+ywV\n7/JU3kKEjV/VJEdJkTbsSl1z4kIvUpQCSDYazcpKZwKBgA1xXBvrix4z4pi8GJ8v\nJoYodbqO6GZdq5pIIND50pcTKivn7wsOfkkgQMYvcE4SGIUYe+6KADP2tZq3MPzz\ntJEnA7vwVcud5h3y/FIZs6IIRoJN30pJLpfrzNmmh/KNw0klkEZ29hV0J8RndoCC\nFhCm8PY+/KP0sZGtn9LTdoYC\n-----END PRIVATE KEY-----\n";
    
          var XHR = new XMLHttpRequest();
          var urlEncodedData = "";
          var urlEncodedDataPairs = [];
          var token;
          var ready = false;
    
          var sJWS = jsrsasign.jws.JWS.sign(null, sHeader, sClaim, key);
    
          urlEncodedDataPairs.push(encodeURIComponent("grant_type") + '=' + encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer"));
          urlEncodedDataPairs.push(encodeURIComponent("assertion") + '=' + encodeURIComponent(sJWS));
          urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
    
          // We define what will happen if the data are successfully sent
          XHR.addEventListener('load', function(event) {
              var response = JSON.parse(XHR.responseText);
              token = response["access_token"];
              resolve(token);
          });
    
          // We define what will happen in case of error
          XHR.addEventListener('error', function(event) {
              console.log('Oops! Something went wrong.');
              reject(XHR.responseText);
          });
    
          XHR.open('POST', 'https://www.googleapis.com/oauth2/v3/token');
          XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          XHR.send(urlEncodedData);
          
        });
    }
    
    const sendValues = (token, dataToSave, row) => {
    
        var XHR = new XMLHttpRequest();
    
        return new Promise ((resolve, reject) => {
    
        
          // We define what will happen if the data are successfully sent
          XHR.addEventListener('load', function(event) {
              var response = JSON.parse(XHR.responseText);
              resolve(response);
          });
    
          // We define what will happen in case of error
          XHR.addEventListener('error', function(event) {
              console.log('Oops! Something went wrong.');
              reject(this.responseText);
          });
    
          var path = 'https://sheets.googleapis.com/v4/spreadsheets/'+SHEET_ID+'/values/Results!A'+row+'?valueInputOption=RAW&includeValuesInResponse=true&responseValueRenderOption=UNFORMATTED_VALUE&responseDateTimeRenderOption=SERIAL_NUMBER';
          XHR.open('PUT', path, false);
          XHR.setRequestHeader('Content-Type', 'application/json');
          XHR.setRequestHeader('Authorization', 'Bearer '+token);
          var body = JSON.stringify(dataToSave);
    
          XHR.send(body);
        });
    }
    
    const saveAnswer = (currentQuestion, correct, studentAnswer) => {
        var token;
        var dataToSave = {values: [[]]};
    
        auth().then(
          (token) => {
            dataToSave.values[0][0] = currentQuestion;
            dataToSave.values[0][1] = correct;
            dataToSave.values[0][2] = studentAnswer;
            sendValues(token, dataToSave, currentQuestion+1).then(
              (result) => {console.log(result);},
              (error) => {console.log(error);}
            );
          },
          (error) => {
            console.log(error);
          }
        )
        }
    
    

  export default ExamQuestion;