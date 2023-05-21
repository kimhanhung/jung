import Header from "../component/header"
import SlideBar from "../component/slideBar"
import BookView from "../component/bookView"
import Category from "../component/category"
function View_book(){
    return(
        <>
         <Header/>
         {/* <SlideBar/> */}
         <Category/>
         <BookView/>
        </>
    )
}
export default View_book