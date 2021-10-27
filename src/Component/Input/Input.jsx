import style from "./Input.module.css"
export default function Input() {

    return (<div className={style.Inputbar}>
        <input type="text" name="textInput" className={style.Input} />
    </div>);
}