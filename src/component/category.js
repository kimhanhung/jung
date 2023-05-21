import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/category.css";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { Image } from "cloudinary-react";
function Category() {
  //slick slider
  const ref = useRef({});
  const next = () => {
    ref.current.slickNext();
  };
  const previous = () => {
    ref.current.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "section-outstanding__slider",
    arrows: false,
  };

  //set category
  const [category, setCategory] = useState("");
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const setValue = (value, category)=>{
    setHidden(false);
    console.log(hideBook);
    setCategory(category);
    setTitle(value);
  }
  const fetchData = () => {
    fetch("http://localhost:8080/book/category/" + category)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  //navigate
  const navigate = useNavigate();
  const handleClick = (id_book) => {
    navigate(`/bookView/${id_book}`);
    console.log(books);
  };
  useEffect(fetchData, [category]);
  console.log(books);

  const [hideBook, setHidden] = useState(false);
  const clearBooks = () => {
    setHidden(false);
  };
  return (
    <div className="category-block">
      <h3 className="title">CATEGORIES</h3>
      <button onClick={previous} className="faChevronLeft">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button onClick={next} className="faChevronRight">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <Slider className="category-list" ref={ref} {...settings}>
        <div
          className="category-item"
           value = "comics"

          onClick={
          ()=>setValue("Foreign Language Books","foreignLanguageBooks")
        }
        >
          <img
            className="img-category"
            src={require("../assets/image/category/1.jpg")}
          />
          <p className="text">Foreign language books</p>
        </div>
        <div
          className="category-item"
          onClick={
          ()=>setValue("Folk Lore", "folkLore")
        }
        >
          <img
            className="img-category"
            src={require("../assets/image/category/2.jpg")}
          />
          <p className="text">folklore</p>
        </div>
        <div
          className="category-item"
          onClick={
          ()=>setValue("Love Story", "loveStory")
        }
        >
          <img
            className="img-category"
            src={require("../assets/image/category/3.jpg")}
          />
          <p className="text">love story</p>
        </div>
        <div
          className="category-item"
          onClick={
          ()=>setValue("High School", "loveStory")
        }
        >
          <img
            className="img-category"
            src={require("../assets/image/category/4.jpg")}
          />
          <p className="text">higher education</p>
        </div>
        <div
          className="category-item"
          onClick={
          ()=>setValue("Comics", "comics")
        }
        >
          <img
            className="img-category"
            src={require("../assets/image/category/comics.jpg")}
          />
          <p className="text">Comics</p>
        </div>
        <div
          className="category-item"
          onClick={
          ()=>setValue("Fairy Tale", "fairyTale")
        }
        >
          <img
            className="img-category"
            src={require("../assets/image/category/coTich.jpg")}
          />
          <p className="text">Fairy tale</p>
        </div>
        <div
          className="category-item"
          onClick={
          //   () => {
          //   setHidden(false);
          //   setCategory("fogeignLiterature");
          //   setTitle("Fogeign Literatyre");
          // }
          ()=>setValue("Fogeign Literature","fogeignLiterature")
        }
        >
          <img
            className="img-category"
            src={require("../assets/image/category/vanHocNuocNgoai.png")}
          />
          <p className="text">foreign literature</p>
        </div>
      </Slider>
 <h1>{title}</h1>
      <section className="booklist">
        {!hideBook &&
          books.length > 0 &&
          books.map((book) => {
            // return <Book key={index} {...book}></Book>;
            return (
              <>
             
                <div
                  className="books-items"
                  key={book.id}
                  onClick={() => handleClick(book.book_id)}
                >
                  <div className="book-container">
                    <div className="img-block">
                      <Image
                        className="img-book"
                        cloudName="dd8wxnt9s image"
                        publicId={book.image}
                        // width="50%"
                      />
                    </div>
                    <div className="book-infor">
                      <div className="book-title">{book.title}</div>
                      <div className="book-author">{book.author}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </section>


    </div>
  );
}
export default Category;
