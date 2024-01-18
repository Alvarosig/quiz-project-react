import style from "./index.module.css"

interface ButtonProps {
    handleShowAnswer: () => void
}

export default function CheckButton({handleShowAnswer} : ButtonProps) {
    return (
        <button 
            className={style.button} 
            onClick={handleShowAnswer}
        >
                Check answers
        </button>
    )
}