function loadExam(setQuestionList){
  
  var text;

  text = httpGet("https://sheets.googleapis.com/v4/spreadsheets/1i9c9nfmQK8_NG72ZCjhIH_8LGYtQ3Hp9t6vCNI8yt8U/values/main!b1?key=AIzaSyAINj20b6Z5972rGjqvZqJTh9uxYEFGTpM");

  
  var jvalue;

  jvalue = JSON.parse(text).values[0][0];


  var questions;

  questions = JSON.parse(jvalue).questions;

  setQuestionList(questions);
  }

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
  
  export default loadExam;
  