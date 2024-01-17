import style from "./index.module.css"

export default function Question() {
    return (
        <div className='question'>
            <span className={style.title}>How would one say goodbye in Spanish?</span>
            <div className={style.options}>
                <button className={`${style.option} ${style.selected}`}>Adiós</button>
                <button className={style.option}>Hola</button>
                <button className={style.option}>Au Revoir</button>
                <button className={style.option}>Salir</button>
            </div>
        </div>
    )
}