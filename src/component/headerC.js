import "../assets/header.css";
import Button from "react-bootstrap/Button";
import Category from "./category";
import ListBook from "./listBook";
// import Fo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookTanakh,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import SlideBar from "./slideBar";
function HeaderC() {
  return (
    <div className="header-block">
      <div className="header-log-in">
        <div className="header-infor">
          <label>Hello </label>
          <label>usser</label>
        </div>
        <div className="log-in">day la button log in</div>
      </div>
      <div>
        <ul className="header">
          <li className="header-component">
            {" "}
            <button className="header-btn" variant="outline-success">
              HOME
            </button>{" "}
          </li>
          <li className="header-component">
            <button className="header-btn" variant="outline-success">
              CATEGORY
            </button>{" "}
          </li>
          <li className="header-component">
            <button className="header-btn" variant="outline-success">
              {" "}
              ORDER PLACED
            </button>{" "}
          </li>
          <li className="header-component">
            <button className="header-btn" variant="outline-success">
              YOUR CART
            </button>{" "}
          </li>
        </ul>
      </div>
      <div className="find">
        <input
          type="text"
          placeholder="find something"
          className="find-input"
          id=""
          // value={}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}
export default HeaderC;
