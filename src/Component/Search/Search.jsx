import style from "./Search.module.css"
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useState} from "react";
import ButtonRadio from "../ButtonRadio/ButtonRadio";

export default function Search(props) {
    let [listItem, setListItem] = useState([]);
    let [inputValue, setInputValue] = useState("");
    let [radioState, setRadioState] = useState("normal")

    const handleChange = (value)=> {setInputValue(value)};
    const handleClick = (v)=> {
        if (inputValue === "")
            return;
        setListItem([...listItem, [{"title":inputValue, "priority":radioState}]])
        props.parentCallback(listItem)
    }
    let handleOptionChange= (changeEvent) =>{
        setRadioState( changeEvent);
    }

    return (
    <div>
        <div className={style.searchbar}>
            <div className={style.Inputbar}><Input onChange={handleChange}/> </div>
            <div className={style.searchButton}><Button onClick={handleClick}/></div>
        </div>
        <ButtonRadio onChange={handleOptionChange}/>
    </div>
    );
}