import { FaBars } from "react-icons/fa";
import { PiScalesThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="catalog-button">
          <button>
            <FaBars style={{ fontSize: "18px", paddingRight: "7px" }} />
          </button>
        </div>
        <div className="search-bar">
          <HiMagnifyingGlass
            style={{ fontSize: "30px", paddingRight: "8px" }}
          />
          <input type="text" placeholder="Axtariş..." />
        </div>
        <div className="header-buttons">
          <a href="#">
            <PiScalesThin />
          </a>
          <a href="#">
            <CiHeart />
          </a>
          <a href="#" className="cart-button">
            <CiShoppingCart />
          </a>
        </div>
      </div>
    </header>
  );
}
