export default function ProductCard({ product }) {

  function discount(price, discountPrice) {
    if (discountPrice === null) {
      return  <strong className = "normal-price">
                          <i>${price} ₼</i>
                      </strong>;
    } else {
      return  <strong>
                 <i>${price} ₼</i>
                 <b>${discountPrice} ₼</b>
            </strong>;
    }
  }
  function nagd(nagdAlis, endirim) {
    if (nagdAlis) {
      return <span>nağd alışa {-endirim}₼</span>
    }
    return ""
  }

  return (
    <div className="product-item">
      <span className="head-span">çatdırılma 0₼</span>
      <div className="link-image">
        <a href="#">
          <img src={product.image} />
        </a>
        {nagd(product.nagdAlis, product.endirim)}
      </div>
      <p>{product.name}</p>
      <div className="price">
        {discount(product.price, product.discountPrice)}
        <span>0% 12ay</span>
      </div>
      <div className="mob-buttons">
        <button>
          <i className="fa-regular fa-heart"></i>
        </button>
        <button>Sebete at</button>
      </div>
      <div className="product-item-bottom-menu">
        <div className="product-basket-button">
          <button>
            <i className="fa-solid fa-cart-shopping"></i>Movcud deyil
          </button>
        </div>
        <div className="product-links">
          <a href="#">
            <i className="fa-solid fa-scale-balanced"></i>
          </a>
          <a href="#">
            <i className="fa-regular fa-heart"></i>
          </a>
          <button>
            <i className="fa-solid fa-link"></i>
          </button>
        </div>
        <div className="info">
          <span>Ekran:</span>
          <span>{product.screen}"</span>
        </div>
        <div className="info">
          <span>Operativ yaddas:</span>
          <span>{product.ram}GB</span>
        </div>
        <div className="info">
          <span>Daxili yaddas:</span>
          <span>{product.rom}GB</span>
        </div>
      </div>
    </div>
  );
}
