import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";
function Log_user(){
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    fetch("http://localhost:8080/user/" + user.email)
      .then((response) => response.json())
      .then((data) => {
        if (data.password === user.password) {
        localStorage.setItem("isLogIn", true);
        console.log(data);
         navigate('/');
         localStorage.setItem('user_email', data.email);
         localStorage.setItem('user_name', data.fullname);
         localStorage.setItem('user_phone_number', data.phonenumber);
         localStorage.setItem('user_address', data.address);
         
         localStorage.setItem('user_id', data.id);
         

         //alert("đăng nhập thành công");
        }
        else {
          if (user.email === null && user.password === null) setValidated(true);
          else {
            alert("bạn đã sai mật khẩu");
          }
        }
        // console.log(data);
        console.log(data);
        console.log(data.email);
        console.log("đây là user nhập vào email " + user.email);
        console.log(data.password);
        console.log("đây là user nhập vào " + user.password);
      })
      .catch((err) =>{ 
        alert("tài khoản này chưa tồn tại");
        console.log(err)});
  };

  const [user, setUser] = useState({});
  return(
    <div>
          <Form
      className="block-log-in"
      noValidate
      validated={validated}
      // onSubmit ={handleSignUp}
      // action={stringAdd} 
      // method="post"
    >
      <h3>Log In Now Into Your Account</h3>
      <Form className="mb-8 block-log-in ">
        <Form.Group controlId="validationCustom03" className="">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Email"
            id="email"
            name="email"
         onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom03" className="">
          <Form.Control
            className="form-input"
            type="password"
            placeholder="Email"
            id="password"
            name="password"
         onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide email.
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      <Form>
    </Form>
      <Button
        // onClick={showClick}
        onClick={handleSubmit}
      >
        LOG IN
      </Button>
    </Form>
    </div>
  )
}
export default Log_user;