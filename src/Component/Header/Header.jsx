import style from "./Header.module.css"
import {useState} from "react";

//import { MdOutlineTask } from "react-icons/md";
export default function Header() {
    let [apiResult, setApiResult] = useState([]);

    //ajax here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=dfd145586cf4c88044dd52c3b1c83fef&units=metric`;
    if (apiResult.length === 0){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setApiResult(data);

            });
        }

    const today = new Date();

    let dateToday = today.getHours()+':'+(today.getMinutes());

    return (<div  className={style.header}>
        <div className={style.head}>
            <div className={style.headt}>TODO</div>
            <div className={style.headl}></div>
        </div>
        <div  className={style.apiCall}>
            <div className={style.wh}>
                <div  className={style.wht}>{`${apiResult.main ? apiResult.main.temp+ '\u00b0': ""}`}</div>
                <div  className={style.whh}>{dateToday}</div>
                <div  className={style.whd}>{`${apiResult.weather ? apiResult.weather[0].description : ""}`}</div>
            </div>
        </div>
    </div>);
}