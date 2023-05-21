import { Row, Col } from "react-bootstrap";
import Header from "./header";
import "../assets/bill.css";
import React, { useState, useEffect } from "react";
function Bill() {
  const user_id = localStorage.getItem("user_id");
  const [book, setbooks] = useState([]);
  const [carts, setCarts] = useState([]);
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // [
  //   order_id : hours+"" + minutes+"" + seconds,
  // ]
  const fetchData = () => {
    fetch(`http://localhost:8080/books/yourcart/${user_id}`)
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
  // them don hang
  const name = localStorage.getItem("user_name");
  const address = localStorage.getItem("user_address");
  const phone_number = localStorage.getItem("user_phone_number");
  
  const user_email = localStorage.getItem("user_email");

  const update = () => {
    fetch(`http://localhost:8080/order`, {
      method: "post",
      mode: "cors",
      body: JSON.stringify({
        type_order: "true",
        order_id: hours + "" + minutes + "" + seconds,
        user_id: localStorage.getItem("user_id"),
      }),
      headers: {
        "Content-Type": "application/json;chaset=ISP-8859-1",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "successUpdateOrder")
          console.log("đổi thành công");
      });
    // console.log(orders);
  };
  //lấy thông tin người dùng
  const [user, SetUser] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setOrder({
      ...order,
      order_id: hours + "" + minutes + "" + seconds,
      name,
      phone_number,
      address,
    });
    //   setOrder({ ...order,user_name, user_phone_number,address  });
  }, []);
  let stringAdd = "http://localhost:8080/book/order/addOrder/" + order.order_id;
  localStorage.setItem('order_id',  order.order_id);
  useEffect(() => {
    fetch("http://localhost:8080/user/" + user_email)
      .then((response) => response.json())
      .then((data) => SetUser(data))
      .catch((err) => console.log(err));
  }, []);
  //them thong tin don hang vao csdl
  const getUser = () => {
    // console.log(user_name);
    // console.log(address);
    // console.log(user_email);
    // console.log(user_id);
    // console.log(user_phone_number);
    console.log(order);
    fetch(stringAdd, {
      method: "post",
      mode: "cors",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "err") {
          alert("");
          //  window.location.reload();
        } else {
          //navigate("/");
          alert("đặt đơn thành công");
        }
      });
  };
  //them DL
  const addToCart = () => {
    fetch(stringAdd, {
      method: "post",
      mode: "cors",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "err") {
          alert("thêm không thành công");
          window.location.reload();
        } else {
          //navigate("/");
          alert("đặt hàng thành công");
        }
      });
  };
  useEffect(update, []);
  return (
    <div>
      {/* <Header/> */}
      <Row>
        <Col>
          <h4>Order Details</h4>
          {/* <button onClick={getUser}>12</button> */}
          <div className="book-order-text">
            <div className="order-rate">
              <div>Name:</div>
              <input
                value={order.name}
                onChange={(e) => setOrder({ ...order, fullname: e.target.value })}
                required
                className="input-rate"
                type="text"
                placeholder="Write your name"
              />
              <div className="order-rate">
                <div>Address:</div>
                <input
                  value={order.address}
                  onChange={(e) =>
                    setOrder({ ...order, address: e.target.value })
                  }
                  className="input-rate"
                  type="text"
                  placeholder="Write your address"
                />
              </div>
            </div>
            <div className="order-rate">
              <div>Phone:</div>
              <input
                value={order.phone_number}
                required
                onChange={(e) =>
                  setOrder({ ...order, phone_number: e.target.value })
                }
                className="input-rate"
                type="text"
                placeholder="Write your phone"
              />
            </div>
          </div>
        </Col>
        {/* <Col>
          <h4>ORDER Summary</h4>
          <div className="bill-block">
            <div className="bill-title ">
              <div className="book-bill-title bill-text">
                <span className="book-span">PRODUCT:</span>
                <span className="book-span"> TOTAL</span>
              </div>
              <div className="bill-list-book">
                {carts.map((cart) => {
                  return (
                    <div className="bill-item bill-text">
                      <span className="bill-span">{cart.title}</span>
                      <span className="bill-span"> {cart.total}</span>
                    </div>
                  );
                })}{" "}
              </div>
              <div className="bill-sum">

              </div>
            </div>
          </div>
        </Col> */}
      </Row>
      <button className="btn-order-submit" onClick={update && getUser} >
        Order
      </button>
    </div>
  );
}
export default Bill;
