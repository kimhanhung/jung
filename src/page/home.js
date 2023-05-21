
import Header from "../component/header"
import SlideBar from "../component/slideBar"
import ListBook from "../component/listBook"
import Category from "../component/category"
import ReviewBook from "../component/slideBar_reviewBook"
import StarRatingA from "../component/start"
import "../assets/home.css"
import { Routes, Route} from "react-router";
import View_book from "./view_book";
import YourCart from "../component/yourCart";
import Ordered from "../component/ordered";
import Change from "../component/change"
import FindBook from "../component/findBook"
function Home(){

    return(
        <div>
        {/* <FindBook/> */}
       <Header/>
        <SlideBar/> 
         <Category/>
         <ListBook/> 
        {/* <ReviewBook/> */}

        </div>
    )
        
    

}
export default Home