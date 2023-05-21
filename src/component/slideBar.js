import React, { useEffect } from "react";
import {useState,useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/slideBar.css";
import Axios from "axios";
import { Image } from "cloudinary-react";
function SlideBar() {
  const [books, setBooks] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:8080/newBooks")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log("day la " + data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(fetchData,[]);
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,

  };
  return (
    <div >
      <Slider {...settings}>
        {books.map((book)=>{
          return(
                    <div className="introduce">
          <Row className="introduce-block">
            <Col sm={7} className="intro-book-item">
              <h2 className="title">{book.title}</h2>
              <p className="content">
               {book.des}
              </p>
            </Col>

            <Col sm={5}>
            <Image className="img"
                cloudName="dd8wxnt9s image"
                publicId={book.image}
                //width="50%"
              />
            </Col>
          </Row>
          {/* <h3>5</h3> */}
        </div>
          )
        })}

      </Slider>
    </div>
  );
}
export default SlideBar;
