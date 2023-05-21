import "../assets/comment.css";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Comment_delete({ comment_id }) {
  // var d = JSON.parse(s)[0].props;
  const navigate = useNavigate();
  const handleClick = () => {
    //navigate(`/bookView/${id}`);
    //  var s = JSON.stringify(props.props);
    //     console.log(typeof(s));
    //     var id = Number(s);
  };
  //modal boostrap
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteClick = (comment_id) => {
    console.log("succesfull");
    // console.log(book);
    // Send data to the backend via POST
    fetch(`http://localhost:8080/book/delete_comment/${comment_id}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setShow(false);
    //navigate(`/ListView/1`);
    // <Redirect to="/ListView/1" />
    //window.location.reload();
    window.location.reload();
  };
  return (
    <div>
      {/* <p>Xóa</p> */}
      <button onClick={handleShow} className="btn_delete">
        Xóa
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          Bạn có chắc muốn xóa bình luận có {comment_id} này không??
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
          onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="danger" 
           onClick={() => deleteClick(comment_id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Comment_delete;
