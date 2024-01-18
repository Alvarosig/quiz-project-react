import './App.css'
import Question from './components/Question'
import Quizzical from './components/Quizzical';
import { useState } from "react"
import { QuestionData } from "./data/IData.ts"
import { mock } from './data/data.ts';
import CheckButton from './components/CheckButton/index.tsx';

function App() {

  const [quizStarted, setQuizStarted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  function startQuiz() {
    setQuizStarted(true);
  }

  function handleShowAnwser() {
    setShowAnswer(true)
  }

  return (
    <>
      {!quizStarted && <Quizzical startQuiz={startQuiz} />}

      {quizStarted && (
        <div>
          <div style={{
            display: "flex",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "center",
          }}>

            <div className="question_container">
              {mock.results.map((data: QuestionData, index: number) => {
                return (
                  <>
                    <Question
                      key={index}
                      question={data.question}
                      correct={data.correct_answer}
                      incorrect={data.incorrect_answers}
                      showAnswer={showAnswer}
                    />
                    <div className='divider'></div>
                  </>
                );
              })}
            </div>

          </div>

          <CheckButton handleShowAnswer={handleShowAnwser}/>

        </div>
      )}
    </>
  )
}

export default App
