import './App.css';
import "./Component/Header/Header.module.css"
import Item from "./Component/Item/Item";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Search from "./Component/Search/Search";

function App(props) {


  return (<div className="App">
      <Header/>
      <div>
          <Search/>
      </div>
      <div className="body">
          <Item/>
      </div>

      <Footer/>
        </div>)
  ;
}

export default App;
