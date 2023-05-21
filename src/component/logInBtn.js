import { Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const LogInBtn = ()=>{

     const navigate = useNavigate();
    const logHandleClick =() =>{
       navigate('/logIn');
       // console.log(localStorage.getItem("isLogIn"));
    }
    return (
        <div>
            <Button onClick={logHandleClick}>
                LOG IN
            </Button>
        </div>
    );

}
export default LogInBtn;