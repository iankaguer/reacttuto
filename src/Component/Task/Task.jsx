import style from "./Task.module.css"
import Search from "../Search/Search";
import {useState} from "react";
import Item from "../Item/Item";

export default function Task(props) {
    let [listTask, setListTask] = useState([]);
    let handleCallback = (childData) =>{
        setListTask( childData)
        //console.log(childData)
    }


    return (<div>
        <Search parentCallback = {handleCallback}/>
        <div className={style.task}>
            {
                listTask.map((item, i) =>{

                    //console.log((item.title));
                    return <Item key={i} title={item.title} priority={item.priority} />

                })
            }
        </div>
    </div>
    );
}