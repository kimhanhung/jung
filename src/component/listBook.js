import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../assets/listBook.css";
import Axios from "axios";
import { Image } from "cloudinary-react";
function ListBook() {
  // xem danh sách
  const [books, setbooks] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) =>{ 
        setbooks(data)
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchData, []);
 //navigate
 const navigate = useNavigate();
 //const params = useParams();
//  const params = useParams();
//  const id_book= book.id;
  //image upload
const [selectedImage, setSelectedImage] = useState("");
 const handleClick = (id_book) =>{
  navigate(`/bookView/${id_book}`);  
  console.log(books)
 }
  return (
    <div className="list-book-block">
      <h3 className="title-book-list" 
      // onClick={handleClick}
      >New Release Books</h3>

      {books.map((book) => {
        console.log(book);
        return (
          <div className="books-items"
          key={book.id} 
           onClick={() => handleClick(book.book_id)}
          >
            <div className="book-container">
              <div className="img-block">  
              <Image className="img-book"
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

    </div>
  );
}
export default ListBook;
