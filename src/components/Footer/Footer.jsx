import { FaCcVisa } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="connection">
          <div className="foot-item-title">Elaqe</div>
          <ul>
            <li>
              <a href="#" id="call-link">
                <i className="fa-solid fa-star-of-life" />
                6060
              </a>
            </li>
            <li>
              <a href="#">Biz xeritede</a>
            </li>
            <li style={{ marginTop: 20 }}>
              <FaCcVisa />
            </li>
          </ul>
        </div>
        <div className="company">
          <div className="foot-item-title">Sirket</div>
          <ul className="footer-links">
            <li>
              <a href="#">Sirket haqqinda</a>
            </li>
            <li>
              <a href="#">Karyera</a>
            </li>
            <li>
              <a href="#">"Qarabag" proqrami</a>
            </li>
          </ul>
        </div>
        <div className="information">
          <div className="foot-item-title">Melumat</div>
          <ul className="footer-links">
            <li>
              <a href="#">Kontakt Tv</a>
            </li>
            <li>
              <a href="#">Kontakt Tv</a>
            </li>
            <li>
              <a href="#">Kontakt Tv</a>
            </li>
            <li>
              <a href="#">Kontakt Tv</a>
            </li>
            <li>
              <a href="#">Kontakt Tv</a>
            </li>
          </ul>
        </div>
        <div className="customers">
          <div className="foot-item-title">Musteriler ucun</div>
          <ul className="footer-links">
            <li>
              <a href="#">Catdirilma ve odeme</a>
            </li>
            <li>
              <a href="#">Catdirilma ve odeme</a>
            </li>
            <li>
              <a href="#">Catdirilma ve odeme</a>
            </li>
            <li>
              <a href="#">Catdirilma ve odeme</a>
            </li>
            <li>
              <a href="#">Catdirilma ve odeme</a>
            </li>
            <li>
              <a href="#">Catdirilma ve odeme</a>
            </li>
            <li>
              <a href="#">Catdirilma ve odeme</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <div className="foot-item-title">Bizimle qalin</div>
          <div className="social-links">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <AiFillInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaTelegram />
            </a>
            <a href="#">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
