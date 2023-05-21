import "../assets/header.css";
import Button from "react-bootstrap/Button";
import Category from "./category";
import ListBook from "./listBook";
import LogInBtn from "./logInBtn";
import LogOutBtn from "./logOutBtn";
import FindBook from "./findBook";
import { Navigate, useNavigate } from "react-router-dom";

// import Fo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookTanakh,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import SlideBar from "./slideBar";
import { useEffect, useState } from "react";
function Header() {
 // const check = localStorage.getItem("isLogIn");
  let user_name, user_id;
  if(localStorage.getItem("isLogIn")){
     user_name = localStorage.getItem('user_name');
     user_id = localStorage.getItem('user_id');
  }
  else {
     user_name = "Khách";
     user_id ="";
  }
  const navigate = useNavigate();
 const logOut = ()=>{
  localStorage.removeItem("isLogIn");
  navigate('/');
  // navigate('/logIn');
 }
 //click change color on div

 const [color, setColor] = useState(['#ED553B','#173F5F','#173F5F','#173F5F']);
 const changeColorOnClick = (index) =>{
  //tạo bản sao của mảng hiện tại
  
  const newColor = [...color];
  //thay đổi giá trị index
  newColor[index] = '#ED553B';
  //đặt lại các giá trị khác thành màu đen
  newColor.fill('#173F5F', 0, index);
  newColor.fill('#173F5F', index + 1);
  setColor(newColor);
  console.log(newColor);
 } 
 //useEffect(changeColorOnClick, []);
  return (
    <div className="header-block">
      <div className="header-log-in">
        <div className="header-infor">
        {/* <label className="log-in">{user_id}</label>  */}
          <label className="log-in"> {user_name}</label> 
          
          {/* <label>usser</label> */}
         
        </div>
        <div className="log-in">
        {localStorage.getItem("isLogIn") ?  <LogOutBtn/>:<LogInBtn/>} 


        </div>
      </div>
      <div>
        <ul className="header">
          <li className="header-component" >
            {" "}
            <button className="header-btn" variant="outline-success" style={{color: color[0]}}
            onClick={()=> 
              {
                 navigate("/");
            changeColorOnClick(0);
          }}
            >
              HOME
            </button>{" "}
          </li>
          <li className="header-component" >
            <button className="header-btn" variant="outline-success" style={{color: color[1]}}
            onClick={()=>changeColorOnClick(1)}
            >
              CATEGORY
            </button>{" "}
          </li>
          {localStorage.getItem("isLogIn") ?          <li className="header-component" >
            <button className="header-btn" variant="outline-success" style={{color: color[2]}}
            onClick={()=> {
               navigate("/ordered");
              changeColorOnClick(2);
            }}
            >
              {" "}
               ORDER PLACED
            </button>{" "}
          </li> :<></> } 
          {localStorage.getItem("isLogIn") ?           <li className="header-component" >
            <button className="header-btn" variant="outline-success" style={{color: color[3]}}
             onClick={()=>{
               navigate("/yourCart");
             changeColorOnClick(3);
            }
             }
            >
              YOUR CART
            </button>{" "}
          </li> :<></>} 


        </ul>
      </div>
      {/* <div className="find">
        <input
          type="text"
          placeholder="find something"
          className="find-input"
          id=""
          // value={}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div> */}
      <FindBook/>
      {/* <SlideBar />
       <Category />
       <ListBook/> */}
    </div>
  );
}
export default Header;
