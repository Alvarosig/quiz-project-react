import './App.css'
import Question from './components/Question'
import Quizzical from './components/Quizzical';
import { useState } from "react"

function App() {

  const [quizStarted, setQuizStarted] = useState(false);

  function startQuiz() {
    setQuizStarted(true);
  }

  return (
    <>
      {!quizStarted && <Quizzical startQuiz={startQuiz} />}

      {quizStarted && (
      <div className="question_container">
        <Question />
        <div className='divider'></div>
        <Question />
        <div className='divider'></div>
        <Question />
        <div className='divider'></div>
      </div>
      )}
    </>
  )
}

export default App
