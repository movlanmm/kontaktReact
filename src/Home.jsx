import "./css/kontakt.css";
import { CiVideoOn } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Catalogs from "./components/Catalog/Catalogs";
import Sales from "./components/Sales/Sales";
import Offers from "./components/Offers/Offers";
import SeasonOffers from "./components/SeasonOffers/SeasonOffers";
import Videos from "./components/VideoSection/Videos";
import Footer from "./components/Footer/Footer";
import MobileProfile from "./components/MobileProfile";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Catalogs />
        <Sales />
        <Offers />
        <SeasonOffers />
        <Videos />
        <Footer />
        <div className="bottom-last">
          <p>© Kontakt Home 2023</p>
        </div>
        <div className="fixed-buttons">
          <button className="video-call">
            <CiVideoOn style={{ color: "white", fontSize: "24px" }} />
          </button>
          <button className="comment-button">
            <FaRegComment style={{ color: "white", fontSize: "20px" }} />
          </button>
        </div>
      </main>
    </div>
  );
}
