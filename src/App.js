import style from './App.css';
import "./Component/Header/Header.module.css"
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Task from "./Component/Task/Task";

function App(props) {


  return (<div className={style.App}>
      <Header/>
      <Task/>

      <Footer/>
        </div>)
  ;
}

export default App;
