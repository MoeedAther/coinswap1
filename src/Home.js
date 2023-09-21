import React, { useState } from "react";
import "./App.css";
import { Carousel, Col, Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoo from "./mainlogo-removebg-preview.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import img1 from "./img1.webp";
import { Link } from "react-router-dom";
import stars from "./stars-two.svg";
import slide1 from "./slide1.svg";
import slide2 from "./nexchange-default.svg";
import slide3 from "./slide3.png";
import rating from "./rating.png";
import ratestar from "./star.png";
import slide4 from "./WNU2FXfEZjj4G_6OAj20fC8j.svg";
import slide5 from "./sideshift-logo-light.svg";
import slide6 from "./slide6.png";
import slide7 from "./logo_grey.svg";
import slide8 from "./ceLM1cqh_Np6mCSeRHbWH_pf.svg";
import payments from "./payments.svg";
import currancy from "./currency-exchange.png";
import currancy1 from "./currency-exchange1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper";
import { Modal, Button } from "react-bootstrap";
import Particles from "react-particles";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import ExchangeCrypto from "./ExchangeCrypto";
import BuyCrypto from "./BuyCrypto";
import CryptoBuyExchange from "./CryptoBuyExchange";
import { useSelector } from "react-redux";

<script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>;


function Home() {
  const lang = useSelector((state) => state.offer.lang);
  const src =
    "https://www.youtube.com/embed/watch?v=uQEMDjwc0P0&list=RDuQEMDjwc0P0&start_radio=1";
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    let result = await fetch(
      "https://api.changenow.io/v1/currencies?active=true",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    setData(
      result.map((coin) => {
        return { symbol: coin.ticker, name: coin.name, image: coin.image };
      })
    );
  }, []);

  return (
    <div className="body-bg-color">
      <div className="margin-top-bottom-50">
        <Container>
          <Row>
            <Col sm={12} lg={5}>
              <ExchangeCrypto boxHeight="400px" switchBtn="col-4 m-auto"/>
            </Col>
            <Col sm={12} lg={1}>
              <div id="mySidenav">
                <button
                  className="wrapCalculator_watchVideo__2t7Fq"
                  onClick={handleShow}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="playIcon">
                    <symbol id="play_svg__a" viewBox="0 0 15 17">
                      <path
                        d="M14 8L.5 15.794V.206L14 8z"
                        fill="currentColor"
                      ></path>
                    </symbol>
                    <use href="#play_svg__a"></use>
                  </svg>
                  <span>Watch video</span>
                </button>
              </div>

              <Modal
                className="vedio-modal"
                show={show}
                onHide={handleClose}
                size="lg"
              >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                  <iframe
                    width="100%"
                    height="315"
                    src={src}
                    title="Youtube Player"
                    allowFullScreen
                  />
                </Modal.Body>
              </Modal>
            </Col>
            <Col sm={12} lg={6}>
              <div
                data-v-5a319364=""
                className="index-rates__info index-rates__info "
              >
                <h1 data-v-5a319364="" className="index-rates__info_title">
                  {lang.freedom}
                  <span className="display-block">
                    {lang.yourexchange}
                  </span>
                </h1>{" "}
                <p data-v-5a319364="" className="index-rates__info_slogan  ">
                  {lang.bestrates} — {lang.infiniteswipes}
                </p>
              </div>
              <a
                className="recommended-wallet-button recommended-wallet-button_desktop"
                onclick='captureOutboundLink("https://walletnow.app")'
                href="https://walletnow.app"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <span style={{ paddingLeft: "8px" }}>Get our Wallet</span>

                <img
                  src={logoo}
                  className="recommended-wallet-button__logo"
                  style={{ width: "55px" }}
                  alt="Now Wallet"
                  decoding="async"
                />
              </a>
              <div style={{ marginTop: "20px" }}>
                <p data-v-5a319364="" className="index-rates__info_slogan">
                  {lang.watchtutorial}
                </p>
              </div>
            </Col>
          </Row>
          <div data-v-17d4b3a3="" data-v-e8aa6b62="" className="index__banner">
            <Row>
              <Col sm={6} lg={9}>
                <img src={payments} alt="" />
              </Col>

              <Col sm={6} lg={3} className="truscol" style={{ textAlign: "end" }}>
                <p className="margin-left-10 color-white mb-0">
                  Check out Coinoswap on
                </p>

                <div className="margin-left-15" style={{ marginRight: "33px" }}>
                  <a
                    target="_blank"
                    href="https://www.trustpilot.com/review/coinoswap.com"
                  >
                    <img src={ratestar} alt="" className="img-width" />
                    <span className="rate-label"> Trustpilot</span>
                  </a>
                </div>
              </Col>
            </Row>
          </div>

          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
            }}
            // autoplay={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={slide1}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide2}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide3}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide5}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide6}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide7}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide8}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide1}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide2}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide3}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </div>
  );
}
export default Home;
