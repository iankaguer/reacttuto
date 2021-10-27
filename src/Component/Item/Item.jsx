import style from "./Item.module.css"
import CheckBox from "../Checkbox/CheckBox";
const Item = (props) => {
    return (
        <div className={style.item}>
            <div className={style.itemContent}>
                <h5 className={style.title}>props.title</h5>
                <p className={style.caption}> AA</p>
            </div>
            <CheckBox/>
        </div>
    );
}
export default Item;