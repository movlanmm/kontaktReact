import logo from "../../assets/images/kontakt-logo.svg";
import { FaStarOfLife } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import MobileProfile from "../MobileProfile";
import { useState } from "react";


export default function Navbar() {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav-bar-nav">
          <ul>
            <li>
              <a href="#">Kompaniya</a>
            </li>
            <li>
              <a href="#">Mağazalar</a>
            </li>
            <li>
              <a href="#">Korporativ satişlar</a>
            </li>
          </ul>
        </div>
        <div className="nav-bar-cta">
          <a href="#" className="call">
            <FaStarOfLife className="star-of-life" />
            6060
          </a>
          <button className="pay-button">Ayliq odenis</button>
          <a className="sign-in">Daxil ol</a>
          <div className="lang-change-button">
            <button id="lang">
              AZ
              <FiChevronDown />
            </button>
            <div className="lang-2" id="lang2">
              <button>RU</button>
            </div>
            <a
              href="#"
              className="account"
              id="profile-open"
              onClick={()=> setIsOpen(!isOpen)}
            >
              <CiUser />
            </a>
          </div>
        </div>
        <MobileProfile isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
