import style from "./Item.module.css"
import CheckBox from "../Checkbox/CheckBox";

export default function Item(props){
    const {title, priority} = props
    console.log({title})

    return (
        <div className={style.item}>
            <div className={style.itemContent}>
                <h5 className={style.title}>{title}</h5>
                <p className={style.caption}> {priority}</p>
            </div>
            <CheckBox/>
        </div>
    );
}
