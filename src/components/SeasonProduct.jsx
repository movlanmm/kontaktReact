import { PiScalesThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiLink } from "react-icons/ci";

export default function SeasonProduct({ product }) {
  function delivery(delivery) {
    if (delivery) {
      return <span className="head-span">çatdırılma 0₼</span>;
    } else {
      return <p style={{ color: "transparent" }}>""</p>;
    }
  }

  return (
    <div className="season-item">
      {delivery(product.delivery)}
      <div className="link-image">
        <a href="#">
          <img src={product.image} />
        </a>
        <span>nağd alışa -{product.endirim}₼</span>
      </div>
      <p>{product.name}</p>
      <div className="price">
        <strong>
          <i>{product.price} ₼</i>
          <b>{product.discountPrice} ₼</b>
        </strong>
        <span>0% 12ay</span>
      </div>
      <div className="mob-buttons">
        <button>
          <i className="fa-regular fa-heart"></i>
        </button>
        <button>Sebete at</button>
      </div>
      <div className="season-item-bottom-menu">
        <div className="product-basket-button">
          <button>
            <i className="fa-solid fa-cart-shopping"></i>Mövcud deyil
          </button>
        </div>
        <div className="product-links">
          <a href="#">
            <PiScalesThin />
          </a>
          <a href="#">
            <CiHeart />
          </a>
          <button>
            <CiLink style={{ fontSize: "16px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
