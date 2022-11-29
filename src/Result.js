import './Result.css';

function Result({page, setPage, appScore, appSetScore, appTotalAnswered, appSetTotalAnswered}) {
  return (
    <div className="final-results">
    <h1>Final Results</h1>
    <h2>
      {appScore} out of {appTotalAnswered} 
      <p/> 
      ({Math.round((appScore / appTotalAnswered) * 100)}%)
    </h2>
    <button onClick={() => setPage(0)}>Restart game</button>
  </div>
  );
}

export default Result;
