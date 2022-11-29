function ExamHeader({totalQuestions, totalAnswered, score}) {
    return (
        <div>
            <h2></h2>
            <h2>
                {totalAnswered+1} of {totalQuestions}   --   {score} / {totalAnswered}  ({totalAnswered > 0 ? (Math.round(score / (totalAnswered) * 100)) : 0}%)
            </h2>
        </div>
    );
  }
  
  export default ExamHeader;