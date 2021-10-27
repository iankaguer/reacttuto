import style from "./CheckBox.module.css"
import {useState} from "react";

export default function CheckBox() {
    const  [checked, setChecked] = useState(false);

    const handleClick = ()=>{
       setChecked(!checked);
    }

    return (<div className={`${style.checkbox} ${checked? style.unchecked : style.checked}`} onClick={handleClick}/>);
}