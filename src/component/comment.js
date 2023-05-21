import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../assets/comment.css";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comment_delete from "./comment_delete";
function Comment() {
  //list comment
  const [comments, setComments] = useState([]);
  const params = useParams();
  const id = params.id;
  const book_id = id;
  const [insertComment, setInsertComment] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    setInsertComment({ ...insertComment, book_id, user_id });
    //setInsertComment( {...insertComment,book_id});
  }, []);
  const fetchData = () => {
    fetch(`http://localhost:8080/books/comments/${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  };
  useEffect(fetchData, []);
  const show = () => {
    console.log(id);
  };

  //validate
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
    setError(null);
    setInsertComment({ ...insertComment, rate: event.target.value });
  };

  const handleBlur = () => {
    if (!value) {
      setError("Vui lòng nhập giá trị");
    } else if (value > 5 || value < 1) {
      setError("Điểm tối đa từ 1 đến 5");
    }
  };
  const navigate = useNavigate();
  let check = 0; //chưa bình luận
  let stringAdd = "http://localhost:8080/book/comment/addcomment/" + user_id;
  const addComment = () => {
    if (value && 1 <= value && value <= 5) {
         fetch(stringAdd, {
        method: "post",
        mode: "cors",
        body: JSON.stringify(insertComment),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.response === "err") {
           // alert("quyen sach nay da ton tai");
            window.location.reload();
          } else {
           // navigate("/");
           console.log("success");
          }
        }
        );
      console.log(insertComment);
    } else {
      console.log("không điền đúng yêu cầu");
    }
    window.location.reload();
  };

  const Setshow = () => {
    console.log("day la " + book_id);
    console.log(insertComment);
  };
  return (
    <div className="book-cmt-block">
      <h3>COMMENT</h3>
      <div className="rate-infor">
        {/* <button onClick={show}>show</button> */}
        {/* console.log(comments); */}
        {comments.map((comment) => {
          return (
            <div className="book-cmt book">
            {comment.user_id == user_id ? <Comment_delete comment_id ={comment.comment_id}/> :<></> }
              {/* <div className="book-user name">{comment.fullname}</div> */}
              <div className="book-user name">{comment.fullname}</div>
              <div className="book-user mark-rate">{comment.rate}</div>
              <div className=" book-user comment">{comment.comment}</div>    
            
            </div>
          );
        })}
      </div>
      {/* update comment */}
      <div className="comment-block">
        <div className="book-cmt-text">
          <div className="name">{localStorage.getItem("user_name")}</div>
          <div className="comment-rate">
            <input
              max={5}
              min={1}
              type="number"
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <label>/5</label>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="comment-text">
            <div>
              <label>your comment</label>
              <textarea
                className="input-text"
                placeholder="write your comment here"
                onChange={(e) =>
                  setInsertComment({
                    ...insertComment,
                    comment: e.target.value,
                  })
                }
              >
                {" "}
              </textarea>
              <button className="btn-cmt" onClick={addComment}>
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comment;
