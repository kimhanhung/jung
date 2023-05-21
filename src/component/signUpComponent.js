import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";
function Sign_user() {
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({});
  const [checkPass, setCheckPass] = useState({});
  let stringAdd = "http://localhost:8080/user/addUser/" + user.email;

  const navigate = useNavigate();

  const submitForm = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    event.preventDefault();
    if (validated) {
      if (user.pass === checkPass.pass) {
        fetch(stringAdd, {
          method: "post",
          mode: "cors",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          // .then((res) => console.log(res))
          .then((data) => {
            if (data.response === "success") {
              localStorage.setItem("isLogIn", true);
             // localStorage.setItem("isLogIn", true);
              navigate('/');
              localStorage.setItem('user_name', user.fullname)
              alert("đăng ký thành công");
            } 
            if (data.response === "error_admin") {
              alert("tài khoản này không được phép đăng ký");
            }
            if (data.response === "error_user") {
              alert("tài khoản này đã tồn tại");
            }
          });
      } else alert("mật khẩu không trùng khớp");
    }
  };
  return (
    <Form
      className="block-log-in"
      noValidate
      validated={validated}
      // onSubmit={handleSubmit}
      // action={stringAdd}
      // method="post"
    >
      <h3>Sign Up For Free</h3>
      <div className="mb-8 block-log-in ">
        <Form.Group controlId="validationCustom03" className="">
          <Form.Control
            className="form-input"
            type="text"
            id="fullname"
            name="fullname"
            placeholder="fullname*"
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom04" className="">
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
            Please provide fullname.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom04" className="">
          <Form.Control
            className="form-input"
            type="password"
            placeholder="Password*"
            onChange={(e) =>
              setCheckPass({ ...user, password: e.target.value })
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a confirm pass.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom04" className="">
          <Form.Control
            className="form-input"
            type="password"
            placeholder="password*"
            onChange={(e) =>
              setCheckPass({ ...user, checkPass: e.target.value })
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a confirm pass.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom04" className="">
          <Form.Control
            className="form-input"
            type="number"
            id="phonenumber"
            name="pass"
            placeholder="phonenumber"
            onChange={(e) => setUser({ ...user, phonenumber: e.target.value })}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide pass.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom04" className="">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Address*"
            onChange={(e) => setCheckPass({ ...user, address: e.target.value })}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a confirm pass.
          </Form.Control.Feedback>
        </Form.Group>
        {/* <div className="">
          <Form.Check
            className="check-input"
            label="save account"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </div> */}
      </div>{" "}
      <Button onClick={submitForm}>GET STARTED</Button>
    </Form>
  );
}

export default Sign_user;
