import products from "../../data/products";
import SeasonProduct from "../SeasonProduct";


export default function SeasonOffers() {
  return (
    <section className="season-offers">
          <div className="season-title">
            <p>Mövsüm Təklifləri</p>
          </div>
          <div className="season-products" id="season-offer-container">
            {
              products[2].season.map((product,index)=> {
                return (
                  <SeasonProduct key={index} product={product} />
                );
              })
            }
          </div>
        </section>
  )
}
