import style from "./Task.module.css"
import Search from "../Search/Search";

export default function Task(props) {

    let clickAdd= ()=> {
        props.onClick()
    }


    return (<div>
        <Search/>
        <div className={style.task}>
            <div>

            </div>
        </div>
    </div>
    );
}