import "../assets/oder.css";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Order() {
  const user_id = localStorage.getItem("user_id");
  const [orders, setOrder] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:8080/books/yourOrder/${user_id}`)
      .then((response) => response.json())
      .then((data) => {
        setOrder(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchData, []);
  const show = (user_id) => {
    console.log(user_id);
  };
  return (
    <div className="book-order-block">
      <h3>ORDER</h3>
      <div className="order-block">
        <div className="book-order-text">
          <div className="name">Jason</div>
          <div className="order-rate">
            <div>Name:</div>
            <input className="input-rate" type="text" placeholder="Write your name" />
          </div>
          <div className="order-rate">
            <div>Phone:</div>
            <input className="input-rate" type="number" placeholder="Write your phone" />
          </div>
          <div className="order-rate">
            <div>Address:</div>
            <input className="input-rate" type="text" placeholder="Write your address"/>
          </div>
          <div className="order-rate">
            <div>Amount:</div>
            <input className="input-rate" type="number" placeholder="Write amount"/>
          </div>
          <div className="order-rate">
            {/* tính tôngr tiền */}
            <div>ORDER Summary:</div>
            <input className="input-rate" type="number" placeholder="Write amount"/>
          </div>
          <div className="order-text">
            <div>Note</div>
            <textarea className="input-text" placeholder="write your order here">
              {" "}
            </textarea>
            <button className="btn-order-submit">Order</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Order;
