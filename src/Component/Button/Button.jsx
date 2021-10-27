import style from "./Button.module.css"

export default function Button(props) {

    let clickAdd= ()=> {
        props.onClick()
    }


    return (
         <button className={style.button} onClick={clickAdd}>Ajouter</button>
    );
}