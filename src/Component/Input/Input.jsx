import style from "./Input.module.css"

export default function Input(props) {

    let handleAddItem= (e)=> {
        props.onChange(e.target.value)
    }

    return (
        <input type="text" name="addItem" className={style.Input} onChange={handleAddItem}/>
   );
}