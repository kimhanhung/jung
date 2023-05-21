import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Log_user from '../component/logInComponent';
import Sign_user from '../component/signUpComponent';
import "../assets/logIn.css"
function LogIn() {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowLogIn = () => {
    setShowLogIn(false);
    setShowSignUp(true);
    console.log(typeof validated);
  };
  const handleShowSignUp = () => {
    setShowSignUp(false);
    setShowLogIn(true);
  };
  return (
    <div className="block-in-put">
      <Button className="input-btn" onClick={handleShowLogIn}>
        SIGN UP
      </Button>
      <Button className="input-btn" onClick={handleShowSignUp}>
        LOG IN
      </Button>

      <a href="/">
        <p>or start for free</p>{" "}
      </a>
      {showLogIn && <Log_user />}
      {showSignUp && <Sign_user />}
    </div>
  );
}
export default LogIn;
