import HeaderC from "./headerC";
import Header from "./header";
import "../assets/yourCart.css";
import Order from "./oder";
import Bill from "./bill";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Image } from "cloudinary-react";
import Cart_delete from "./cart_delete";
function YourCart() {
  const [order, showOrder] = useState(false);
  const handleShowOrder = () => {
    showOrder(!order);
  };
  //navigate
  const params = useParams();
  const id = params.id;
  const user_id = localStorage.getItem("user_id");
  const [book, setbooks] = useState([]);
  const [carts, setCarts] = useState([]);
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
  //add new items to cart
  // stringAdd = "http://localhost:8080/book/cart/addCart/" + cart.;
  // const addToCart =() =>{
  //   fetch(stringAdd, {
  //     method: "post",
  //     mode: "cors",
  //     body: JSON.stringify(book),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.response === "err") {
  //         alert("quyen sach nay da ton tai");
  //         window.location.reload();
  //       } else {
  //         navigate("/");
  //       }
  //     });
  // }
  // navigate đến trang view
  const navigate = useNavigate();
  const handleClick = (id_book) =>{
    navigate(`/bookView/${id_book}`);  
   }
  return (
    <div>
      <Header />
      <h3>YOUR CART</h3>
      <div className="carts">
        <div className="cart-container">
          {carts.map((cart) => {
            return (
              <div className="cart-items">
                <div className="cart-item">
                  <div className="cart-img-block ">
                  <Image className="cart-img"
                cloudName="dd8wxnt9s image"
                publicId={cart.image}
                    />
                  </div>
                  <div className="cart-infor cart">
                    <div className="cart-name">{cart.title}</div>
                    <div className="cart-price">Price: {cart.price}</div>
                  </div>
                  <div className="cart-amount cart"> {cart.amount}</div>
                  <div className="cart-oder-sum cart">
                    <label>Sum price: </label> {cart.total}
                  </div>
                  <div className="carts-btn cart">
                    <button className="cart-view cart-btn cart-order-btn" onClick={() => handleClick(cart.book_id)}>
                      View
                    </button>
                    {/* <button className="cart-delete cart-btn cart-order-btn " >
                      Delete
                    </button> */}
                    <Cart_delete book_id ={cart.book_id}/>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="cart-items">
            <div className="cart-item">
              <div className="cart-img-block ">
                <img
                  className="cart-img"
                  src={require("../assets/image/books/1.png")}
                />
              </div>
              <div className="cart-infor cart">
                <div className="cart-name">Bắc Tàu Lửa</div>
                <div className="cart-price">100000</div>
              </div>
              <div className="cart-amount cart"> 1</div>
              <div className="cart-oder-sum cart"> 100000</div>
              <div className="carts-btn cart">
                <button className="cart-view cart-btn cart-order-btn">View</button>
                <button className="cart-delete cart-btn cart-order-btn">Delete</button>
              </div>
            </div>
          </div>
          <div className="cart-items">
            <div className="cart-item">
              <div className="cart-img-block ">
                <img
                  className="cart-img"
                  src={require("../assets/image/books/1.png")}
                />
              </div>
              <div className="cart-infor cart">
                <div className="cart-name">Bắc Tàu Lửa</div>
                <div className="cart-price">100000</div>
              </div>
              <div className="cart-amount cart"> 1</div>
              <div className="cart-oder-sum cart"> 100000</div>
              <div className="carts-btn cart">
                <button className="cart-view cart-btn cart-order-btn">View</button>
                <button className="cart-delete cart-btn cart-order-btn">Delete</button>
              </div>
            </div>
          </div> */}
        </div>
        <button className="cart-order-btn" onClick={handleShowOrder}>
          ORDER
        </button>
        {order && <Bill />}
      </div>
    </div>
  );
}
export default YourCart;
