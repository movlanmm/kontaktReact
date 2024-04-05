import { CiShoppingCart } from "react-icons/ci";

export default function OfferProduct({ product }) {
  return (
    <div className="offer-item">
      <div className="item-image">
        <img src={product.image} />
      </div>
      <div className="item-info">
        <span className="item-span">çatdırılma 0₼</span>
        <p>Simge Gutson 3 yerli divan</p>
        <div className="price">
          <strong>
            <i>{product.price} ₼</i>
            <b>{product.discountPrice} ₼</b>
          </strong>
          <span>0% {product.credit}ay</span>
        </div>
        <div className="product-basket-button">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <CiShoppingCart style={{ fontSize: "20px" }} /> Səbətə əlavə et
          </button>
        </div>
      </div>
    </div>
  );
}
