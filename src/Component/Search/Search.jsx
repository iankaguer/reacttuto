import style from "./Search.module.css"
import Input from "../Input/Input";
import Button from "../Button/Button";
export default function Search() {

    return (<div className={style.searchbar}>
        <Input/> <Button/>
    </div>);
}