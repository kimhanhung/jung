import "./App.css";
import { useState, useEffect } from "react";
import LogIn from "./page/logIn_Up";
//import Header from "./component/header";
// import SlideBar from "./component/slideBar";
// import Category from "./component/category";
// import ListBook from "./component/listBook";
import Home from "./page/home";
import YourCart from "./component/yourCart";
import BookView from "./component/bookView";
import Bill from "./component/bill";
import "bootstrap/dist/css/bootstrap.min.css";
import Ordered from "./component/ordered";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route} from "react-router";
import View_book from "./page/view_book";
import Header from "./component/header";
// import {Link} from "react-router-dom";
import {CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  // const override : CSSProperties= {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };
  
  useEffect(()=>{
    setLoading(false);
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  },[])
  return (
    <div className="App"> 
       <Routes>
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/" element={<Home/> } />
        <Route path="/bookView/:id" element={<View_book/>} />
        <Route path="/yourCart" element={<YourCart/>} />
        <Route path="/ordered" element={<Ordered/>} />
      </Routes>
    
    </div>
  );
}

export default App;
