import styles from './index.module.css';

export default function Quizzical({ startQuiz }) {
    return (
        <div className={styles.quizzical_container}>
            <h1 className={styles.quizzical}>Quizzical</h1>
            <h2 className={styles.quizzical_sub}>A random quiz to test your knowledge 👆🤓</h2>
            <button className={styles.start} onClick={startQuiz}>Start quiz</button>
        </div>
    );
}