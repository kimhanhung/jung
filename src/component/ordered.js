import Header from "./header";
import "../assets/yourCart.css";
import "../assets/ordered.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Order from "./oder";
import Bill from "./bill";
import Order_delete from "./order_delete";
function Ordered() {
  const [order, showOrder] = useState(false);
  const handleShowOrder = () => {
    showOrder(!order);
  };
  const user_id = localStorage.getItem("user_id");
  const order_id = localStorage.getItem("order_id");
  const [carts, setCarts] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:8080/books/yourOrder/${user_id}`)
      .then((response) => response.json())
      .then((data) => {
        setCarts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchData, []);
  const show = (user_id) => {
    console.log(user_id);
  };
  return (
    <div>
      <Header/>
      <h3>ORDER PLACED</h3>
      <div className="orders">
        <div className="order-container">
        {carts.map((cart) => {
            return (
          <div className="order-items">
            <Row className="infor-block ordered-block">
              <Col sm ={8} className="ordered-infor">
                <div className="order-author order-text">
                  <span className="order-span">Name:</span>
                  <span className="order-span">{cart.name}</span>
                </div>
                <div className="order-date  order-text">
                  <span className="order-span"> Phone Number</span>
                  <span className="order-span"> {cart.phone_number}</span>
                </div>
                <div className="order-category  order-text">
                  {" "}
                  <span className="order-span"> Adress</span>
                  <span className="order-span"> {cart.address}</span>
                </div>
                <div className="order-page  order-text">
                  <span className="order-span"> Amount</span>
                  <span className="order-span"> {cart.sum_amount}</span>
                </div>
                <div className="order-author  order-text">
                  <span className="order-span">Summary</span>
                  <span className="order-span">{cart.sum_price}</span>
                </div>
              </Col>

              <Col sm = {4} className="btn-order">
                <div className="orders-btn order">
                  {/* <button
                    className="order-view order-btn "
                    onClick={handleShowOrder}
                  >
                    View
                  </button> */}
                  {/* <button className="order-delete order-btn  ">
                    Delete
                  </button> */}
                   <Order_delete order_id={cart.order_id}/>
                </div>
                {/* <button className="btn-gen btn-oder" >ADD TO CART</button>
                <button className="btn-gen btn-oder" onClick={handleShowOder}>ODER NOW</button>
                <button className="btn-gen btn-comment" onClick={handleShowCmt}>COMMENT</button> */}
              </Col>
            </Row>{" "}
            {/* */}
          </div>
            );
          })}

          
          {/* {order && <Bill />} */}
        </div>
        {/* <button className="order-order-btn">ORDER</button> */}
        {/* {order && <Bill/>} */}
      </div>
    </div>
  );
}
export default Ordered;
