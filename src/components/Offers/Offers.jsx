import products from "../../data/products";
import OfferProduct from "../OfferProduct";

export default function Offers() {
  return (
    <section className="offers">
          <div className="offer-title">
            <p>Super təkliflər</p>
          </div>
          <div className="container" id="offer-item">
            {products[1].offers.map((product,index)=>{
              return(
                <OfferProduct key={index} product={product} />
              );
            })}
          </div>
        </section>
  )
}
