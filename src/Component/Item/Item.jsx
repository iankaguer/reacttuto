import style from "./Item.module.css"
import CheckBox from "../Checkbox/CheckBox";
import PropTypes from "prop-types";

export default function Item(props){
    const {title, priority} = props;

    return (
        <div className={`${style.item} ${priority}`}>
            <div className={style.itemContent}>
                <h5 className={style.title}>{title}</h5>
                <p className={style.caption}> {priority}</p>
            </div>
            <CheckBox/>
        </div>
    );
}
Item.propTypes = {
    title: PropTypes.string,
    priority: PropTypes.string,
};