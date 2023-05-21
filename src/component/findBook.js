import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../assets/listBook.css";
import Axios from "axios";
import { Image } from "cloudinary-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookTanakh,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
function FindBook() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  const [books, setBooks] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:8080/book/find/${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  //   useEffect(fetchData, []);
  const show = () => {
    console.log("tim " + inputValue);
  };
  return (
    <>
      <div className="find">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="find something"
        className="find-input"
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} onClick={fetchData}/>
      </div>

      {/* <button >check</button>  */}
      <br></br>
      {books.map((book) => {
        console.log(book);
        return (
          <div
            className="books-items"
            // key={book.id}
            // onClick={() => handleClick(book.book_id)}
          >
            <div className="book-container">
              <div className="img-block">
                <Image
                  className="img-book"
                  cloudName="dd8wxnt9s image"
                  publicId={book.image}
                  width="50%"
                />
              </div>
              <div className="book-infor">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default FindBook;
