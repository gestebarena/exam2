import './Result.css';

function Result({page, setPage}) {
  return (
    <div className="Result">
      <p>
        Result
      </p>
      <button onClick={() => setPage(0)}>End</button>
    </div>
  );
}

export default Result;
