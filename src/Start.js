import './Start.css';

function Start({page, setPage}) {
  return (
    <div className="App">
      <p>
        Welcome
      </p>
      <button onClick={() => setPage(1)}>Start the exam</button>
    </div>
  );
}

export default Start;
