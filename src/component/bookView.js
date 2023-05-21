import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderC from "./headerC";
import Order from "./oder";
import "../assets/bookView.css";
import Comment from "./comment";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Image } from "cloudinary-react";
function BookView() {
  //
  const [showCmt, setShowCmt] = useState(false);
  const handleShowCmt = () => {
    setShowCmt(!showCmt);
    console.log(showCmt);
  };
  const [insertComment, setInsertComment] = useState([]);
  const [showOder, setShowOder] = useState(false);
  const handleShowOder = () => {
    setShowOder(!showOder);
  };
  //navigate
  const params = useParams();
  const id = params.id;
  const [book, setbooks] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setIsVisible(localStorage.getItem("isLogIn"));
    console.log(localStorage.getItem("isLogIn"));
    //setInsertComment( {...insertComment,book_id});
  }, []);
  const fetchData = () => {
    fetch(`http://localhost:8080/book/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setbooks(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchData, []);
  //navigate
  const navigate = useNavigate();
  //const params = useParams();
  //  const handleClick = (id) =>{
  //   navigate(`/bookView/${id}`);
  //  }
  const [value, setValue] = useState("1");
  const [error, setError] = useState(null);

  //add book to cart
  // const handleBlur = () => {
  //   if (value<=0) {
  //     setError("Số lượng sách phải lớn hơn 0");
  //   // } else if (value > 5 || value < 1) {
  //   //   setError("Điểm tối đa từ 1 đến 5");
  //   }
  // };
  const user_id = localStorage.getItem("user_id");
  const book_id = id;
  const [carts, SetCart] = useState({
    user_id:user_id,
    book_id: book_id,
    type_order: "false",
    amount:1,
  });  
  const handleChange = (event) => {
    setValue(event.target.value);
    setError(null);
    SetCart({ ...carts, amount: event.target.value });
  };
  useEffect(() => {
    SetCart({  user_id:user_id,book_id: book_id, type_order: "false", amount:1});
  }, []);
  let stringAdd = "http://localhost:8080/book/cart/addCart/" + book.book_id + "/" + user_id;
  const addToCart =(event) =>{
    console.log(value);
    setValue(event.target.value);
    setError(null);
    if (value <=0 ) {
      setError("Số lượng sách phải lớn hơn 0");
      console.log("thêm thất bại");
    }
    else{
      console.log("thêm thành công");
          fetch(stringAdd, {
      method: "post",
      mode: "cors",
      body: JSON.stringify(carts),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response === "err") {
          alert("quyển sách này đã được thêm trước đó");
          // window.location.reload();
        } else {
          // navigate("/");
          alert("thêm thành công");
        }
      });
    }

    // console.log(book.book_id);
    // console.log(user_id);
     console.log(carts);
  }
  // const addComment = () => {
  //   if (value && 1 <= value && value <= 5) {
  //        fetch(stringAdd, {
  //       method: "post",
  //       mode: "cors",
  //       body: JSON.stringify(insertComment),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.response === "err") {
  //          // alert("quyen sach nay da ton tai");
  //           window.location.reload();
  //         } else {
  //          // navigate("/");
  //          console.log("success");
  //         }
  //       }
  //       );
  //     console.log(insertComment);
  //   } else {
  //     console.log("không điền đúng yêu cầu");
  //   }
  // };
  return (
    <div>
      <div className="book-view">
        <Row>
          <Col sm={5}>
            <div className="imgView_block">
              <Image
                className="imgView-book"
                cloudName="dd8wxnt9s image"
                publicId={book.image}
                width="50%"
              />
            </div>
          </Col>

          <Col sm={7}>
            {/* thong tin */}
            <div className="infor-block">
              <h3 className="book-view-title"> {book.title}</h3>
              <div className="book-author book-text">
                <span className="book-span">Author:</span>
                <span className="book-span"> {book.title}</span>
              </div>
              <div className="book-date  book-text">
                <span className="book-span"> Date</span>
                <span className="book-span"> {book.date}</span>
              </div>
              <div className="book-category  book-text">
                {" "}
                <span className="book-span"> Category</span>
                <span className="book-span">{book.category}</span>
              </div>
              <div className="book-page  book-text">
                <span className="book-span"> Page</span>
                <span className="book-span"> {book.page}</span>
              </div>
              <div className="book-price  book-text">
                <span className="book-span"> Price</span>
                <span className="book-span"> {book.price}</span>
              </div>
              <div className="book-des">
                Des:
                {book.des}
              </div>
              {localStorage.getItem("isLogIn") ? (
                <div> </div>
              ) : (
                <div className="book-author">
                  "vui lòng đăng ký hoặc đăng nhập để mua sách hoặc xem đánh
                  giá"{" "}
                </div>
              )}
              <div className="btn-block">
                <div className="add-to-card">
                  
                    <input className="book-amount"
                      max={5}
                      min={1}
                      type="number"
                      defaultValue={1}
                      value={value}
                      onChange={
                        // (e) =>
                        // SetCart({
                        //   ...carts,
                        //   amount: e.target.value,
                        // })
                        handleChange
                      }
                    />
                   
                  
                  <button hidden={!isVisible} className="btn-oder" onClick={addToCart}>
                    ADD TO CART
                  </button>
                </div>
                <button
                  hidden={!isVisible}
                  className="btn-gen btn-comment"
                  onClick={handleShowCmt}
                >
                  COMMENT
                </button>
              </div> {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </Col>
        </Row>
      </div>
      {showOder && <Order />}
      {showCmt && <Comment />}
    </div>
  );
}
export default BookView;
