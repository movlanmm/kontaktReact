import sidebarimage1 from "../../assets/images/sidebarimage1.png";
import sidebarimage2 from "../../assets/images/sidebarimage2.png";
import brands from "../../data/brands";
import catalogs from "../../data/catalogs";
import { HiChevronRight } from "react-icons/hi2";
import dailyItems from "../../data/daily-items";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { CiShoppingCart } from "react-icons/ci";

export default function Catalogs() {
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [minute, setminute] = useState(59);
  const [hour, sethour] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      index === dailyItems.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  useEffect(() => {
    const timeinterval = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0 && minute > 0) {
        setSeconds(59);
        setminute(minute - 1);
      }

      if (minute === 0 && hour > 0) {
        setminute(59);
        sethour(hour - 1);
      }

      if (hour === 0 && minute === 0 && seconds === 0) {
        sethour(23);
        setminute(59);
        setSeconds(59);
      }
    }, 1000);
    return () => {
      clearInterval(timeinterval);
    };
  }, [seconds]);

  return (
    <section className="catalogs">
      <div className="catalog">
        <div className="container">
          <div className="left">
            <ul id="catalog-container">
              {catalogs.map((catalog) => {
                return (
                  <li key={catalog.id}>
                    <a href="#">
                      <p>{catalog.name}</p>
                      <HiChevronRight />
                    </a>
                    <div className="sidebar-menu">
                      <div className="sidebar-catalogs">
                        {catalog.child.map((subitem, inx) => (
                          <div key={inx} className="sidebar-item">
                            <a href="#">{subitem.title}</a>
                            <ul>
                              {subitem.subCategory.map((item, index) => (
                                <li key={index}>
                                  <a href="#">{item.name}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="sidebar-images">
                        <img src={sidebarimage1} />
                        <img src={sidebarimage2} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="middle">
            <Swiper
              slidesPerView={"1.3"}
              spaceBetween={10}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://kontakt.az/media/amasty/webp/dinarys/banner/images/1x1_key_visual_1_png.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://kontakt.az/media/dinarys/banner/images/KH_2024_Single_post_019_samsung_artiq_satishda_1080x1080.jpgaz_1.jpg?format=pjpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://kontakt.az/media/amasty/webp/dinarys/banner/images/iphone_15_az_1__1_jpg.webp"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="right" id="daily-container">
            <div className="head">
              <span className="head-title">Günün təklifi</span>
              <div className="timer">
                <div className="time">
                  <span>{hour < 10 && hour > 0 ? "0" + hour : hour}</span>
                  <em>saat</em>
                </div>
                <div className="line"></div>
                <div className="time">
                  <span>
                    {minute < 10 && minute > 0 ? "0" + minute : minute}
                  </span>
                  <em>dəqiqə</em>
                </div>
                <div className="line"></div>
                <div className="time">
                  <span>
                    {seconds < 10 && seconds > 0 ? "0" + seconds : seconds}
                  </span>
                  <em>saniyə</em>
                </div>
              </div>
            </div>
            <div className="bottom-line"></div>
            <div className="right-item">
              <p>{dailyItems[index].name}</p>
              <div className="discount">
                <span id="first">
                  {dailyItems[index].discountPrice}
                  <i className="fa-solid fa-manat-sign"></i>
                </span>
                <span id="second">
                  {dailyItems[index].price}
                  <i className="fa-solid fa-manat-sign"></i>
                </span>
              </div>
              <span className="credit-title">
                0%{dailyItems[0].creditMonth}ay
              </span>
              <img src={dailyItems[index].image} />
              <button className="basket-button">
                <CiShoppingCart style={{ fontSize: "14px"}} /> Səbətə at
              </button>
              <a href="#">Bütün təklifləri gör</a>
            </div>
          </div>
        </div>
      </div>
      <div className="brands" id="brands-container">
        {brands.map((brand, index) => {
          return (
            <a href="#" key={index}>
              <img src={brand.image} />
            </a>
          );
        })}
      </div>
      <div className="catalog-links">
        <a href="#">
          <div className="image">
            <i className="fa-regular fa-credit-card" />
          </div>
          <div className="titles">
            <span>Qapida resmilesdirme</span>
            <span>Nagd,hisse-hisse ve ya kartla odeme imkani</span>
          </div>
        </a>
        <a href="#">
          <div className="image">
            <i className="fa-regular fa-credit-card" />
          </div>
          <div className="titles">
            <span>Qapida resmilesdirme</span>
            <span>Nagd,hisse-hisse ve ya kartla odeme imkani</span>
          </div>
        </a>
        <a href="#">
          <div className="image">
            <i className="fa-regular fa-credit-card" />
          </div>
          <div className="titles">
            <span>Qapida resmilesdirme</span>
            <span>Nagd,hisse-hisse ve ya kartla odeme imkani</span>
          </div>
        </a>
        <a href="#">
          <div className="image">
            <i className="fa-regular fa-credit-card" />
          </div>
          <div className="titles">
            <span>Qapida resmilesdirme</span>
            <span>Nagd,hisse-hisse ve ya kartla odeme imkani</span>
          </div>
        </a>
      </div>
    </section>
  );
}
