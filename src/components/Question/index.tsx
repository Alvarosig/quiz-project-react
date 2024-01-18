import { shuffle as LoShuffle } from "lodash";
import style from "./index.module.css"
import { useMemo, useState } from "react";

interface QuestionProps {
    question: string;
    correct: string;
    incorrect: string[];
    showAnswer: boolean;
}

export default function Question({ question, correct, incorrect, showAnswer }: QuestionProps) {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const options = useMemo(() => LoShuffle([correct, ...incorrect]), [correct, incorrect])

    return (
        <>
            <div className='question'>
                <span className={style.title} dangerouslySetInnerHTML={{ __html: question }}></span>
                <div className={`${style.options} ${showAnswer ? style.disable_hover : ""}`}>
                    {options.map((option, index) => (
                        showAnswer ? (
                            <button
                                key={index}
                                disabled={true}
                                className=
                                {`${style.option} 
                                ${correct === option ? style.correct : ""} 
                                ${selectedOption === option && incorrect.includes(option) ? style.incorrect : ""}`}
                            >
                                {option}
                            </button>
                        ) : (
                            <button
                                onClick={() => setSelectedOption(option)}
                                key={index}
                                className=
                                {`${style.option} ${option === selectedOption ? style.selected : ""}`}
                            >
                                {option}
                            </button>
                        )
                    ))}
                </div>
            </div>
        </>
    )
}
