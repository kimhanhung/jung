import { Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const LogOutBtn = ()=>{

     const navigate = useNavigate();
    const logHandleClick =() =>{
        localStorage.removeItem("isLogIn");
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_id');
        navigate('/LogIn');
    }
    return (
        <div>
            <Button onClick={logHandleClick}>
                LOG OUT
            </Button>
        </div>
    );

}
export default LogOutBtn;