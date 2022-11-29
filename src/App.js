import React, { useState } from 'react';

import './App.css';
import Start from './Start.js';
import Exam from './Exam.js';
import Result from './Result.js';


function App() {

  const [page, setPage] = useState(0);

  const ActivePage = () => {
    switch (page) {
      case 0:
        return <Start page = {page} setPage = {setPage}/>;
      case 1:
        return <Exam page = {page} setPage = {setPage}/>;
      case 2:
        return <Result page = {page} setPage = {setPage}/>;
      default:
        return <Start page = {page} setPage = {setPage}/>;
    }
  }

  return (
    
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <ActivePage/>
      </header>
    </div>
  );
}

export default App;
