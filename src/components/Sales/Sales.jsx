import ProductCard from "../ProductCard";
import products from "../../data/products";
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Sales() {
  return (
    <section className="sales-section">
      <div className="head">
        <p>Satiş liderləri</p>
        <a href="#">Bütün təklifləri gör</a>
      </div>
      <div className="sales-buttons">
        <ul>
          <li>
            <button>Smartfonlar</button>
          </li>
          <li>
            <button>Smartfonlar</button>
          </li>
          <li>
            <button>Notbuklar</button>
          </li>
          <li>
            <button>Televizorlar</button>
          </li>
          <li>
            <button>Iqlim texnikasi</button>
          </li>
          <li>
            <button>Ev ucun kicik texnika</button>
          </li>
          <li>
            <button>Metbex ucun kicik meiset texnikasi</button>
          </li>
          <li>
            <button>Gozellik ve saglamliq</button>
          </li>
          <li>
            <button>Boyuk meiset texnikasi</button>
          </li>
          <li>
            <button>Mebel</button>
          </li>
          <li>
            <button>Tekstil</button>
          </li>
          <li>
            <button>Qab-qacag</button>
          </li>
          <li>
            <button>Qulaqliqlar</button>
          </li>
          <li>
            <button>Smart saatlar</button>
          </li>
          <li>
            <button>Aksesuarlar</button>
          </li>
          <li>
            <button>Qurasdirilan texnika</button>
          </li>
        </ul>
      </div>
      <div className="products" id="products-container">
        <Swiper slidesPerView={5} style={{ overflow:'visible', height:'auto' }}>
          {products[0].satisLiderleri.map((product, index) => {
            return (
              <SwiperSlide style={{height:'auto'}} key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  );
}
