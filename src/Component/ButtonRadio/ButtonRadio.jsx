import style from "./Button.module.css"

export default function ButtonRadio(props) {
    let handleOptionChange= (e)=> {
        props.onChange(e.target.value)
        //console.log(e.target.value)
    }



    return (
        <div className={style.buttongroup}>
            <input type="radio" value="low" name="gender" onChange={handleOptionChange}/> Priority Low
            <input type="radio" value="normal" name="gender"  onChange={handleOptionChange}/> Priority Normal
            <input type="radio" value="high" name="gender"  onChange={handleOptionChange}/> Priority High
        </div>
    );
}