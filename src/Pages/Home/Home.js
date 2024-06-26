import './Home.css';
import { Link } from 'react-router-dom';
import homeImg from '..//..//img/jpg.avif'
import video from '../../img/TT.mp4'
import cardimg1 from '..//../img/cardimg1.avif'
import cardimg2 from '..//../img/cardimg2.avif'
import cardimg3 from '..//../img/cardimg3.avif'
import categoryimg1 from '..//../img/categoryimg1.avif'
import categoryimg2 from '..//../img/categoryimg2.avif'
import categoryimg3 from '..//../img/categoryimg3.avif'
import categoryimg4 from '..//../img/categoryimg4.avif'
import aboutvideo1 from '..//../img/aboutvideo1.mp4'
import aboutvideo2 from '..//../img/aboutvideo2.mp4'
import aboutvideo3 from '..//..//img/aboutvideo3.mp4'
import slider1 from '..//..//img/slider1.avif'
import slider2 from '..//..//img/slider2.avif'
import slider3 from '..//..//img/slider3.avif'
import slider4 from '..//..//img/slider4.avif'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
function Home() {
  return (
    <>
      <div className="Home">
        <div className="video_container">
          <img src={homeImg} alt="" />
          <video width="100%" height="auto" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <div className="button flex">
            <button className="btn_home">Discover more</button>
            <button className="btn_home">Read me</button>
          </div>
        </div>
        <div className="container">
          <div className="home_img">
          </div>
        </div>
      </div>
      <section className="Info_grey">
        <div className="container">
          <h1 className="Info_tit">Masters of Light Since 1895</h1>
          <p className="Info_txt">Since 1895, founder Daniel Swarovski’s passion for innovation and design, and mastery of crystal cutting has defined Swarovski as the leading jewelry and accessories brand.</p>
        </div>
      </section>
      <section className="Cards">
        <div className="container">
          <h1 className="Info_tit">Infinitely Inspiring</h1>
          <div className="Card_in flex">
            <div className="Card">
              <div className='card_img'>
                <Link to="" className="cardImg"> <img src={cardimg1} alt="" /></Link>
              </div>
              <h1 className="Card_tit">Radiant Necklaces</h1>
              <p className="card_txt">Channeled into sculptural forms, fluid crystals are a beautiful expression of Swarovski savoir-faire. Take the modern route to styling with minimalist chains that gleam with your every move.</p>
              <div className="button">
                <button className="btn">Discover more</button>
              </div>
            </div>
            <div className="Card">
              <div className='card_img'>
                <Link to="" className="cardImg"> <img src={cardimg2} alt="" /></Link>
              </div>
              <h1 className="Card_tit">Chic Bracelets</h1>
              <p className="card_txt">An accumulation of cuts in a palette of bright whites and marine blues delivers a radiant refresh, while silhouettes enrich round-the-clock ensembles with subtle elegance. </p>
              <div className="button">
                <button className="btn">Discover more</button>
              </div>
            </div>
            <div className="Card">
              <div className='card_img'>
                <Link to="" className="cardImg"> <img src={cardimg3} alt="" /></Link>
              </div>
              <h1 className="Card_tit">Bold Earrings</h1>
              <p className="card_txt">Full-cut facets in high-octane hues reinterpret crystals with contemporary drama. A striking display of Swarovski’s mastery of light, statement earrings inspire you to shine your brightest.
              </p>
              <div className="button">
                <button className="btn">Discover more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Category_grey">
        <div className="container">
          <div className='Shop by Category'>
            <h2 className="Info_tit">Shop by Category
            </h2>
            <div className='Category flex'>
              <div className="Category_img">
                <Link to="" className="categoryimg1"><img src={categoryimg1} alt="" />Jewelry</Link>
              </div>
              <div className="Category_img">
                <Link to="" className="categoryimg2"><img src={categoryimg2} alt="" />Watches</Link>
              </div>
              <div className="Category_img">
                <Link to="" className="categoryimg3"><img src={categoryimg3} alt="" />Decorations</Link>
              </div>
              <div className="Category_img">
                <Link to="" className="categoryimg4"><img src={categoryimg4} alt="" />Accessories</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="About">
        <div className="container">
          <h2 className="Info_tit">World of Swarovski</h2>
          <p className="Info_txt">Illuminating the many facets of Swarovski from heritage to lifestyle and beyond.</p>
          <button className="btn_about">Explore all</button>
          <div className="About_video flex">
            <div className="Video_card">
              <video autoPlay muted loop>
                <source src={aboutvideo1} type="video/mp4" />
              </video>
              <div className="card-info">
                <h2 className="Card_tit">Ocean-Inspired Jewelry</h2>
                <p className="card_txt">Our new jewelry families are beautiful works of artistry that feature Swarovski Crystal Pearls, and a palette of blue and green Swarovski Crystals.Our attention to detail ensures that each. </p>
                <div className="button">
                  <button className="btn">Read me</button>
                </div>
              </div>
            </div>
            <div className="Video_card">
              <video autoPlay muted loop>
                <source src={aboutvideo2} type="video/mp4" />
              </video>
              <div className="card-info">
                <h2 className="Card_tit">A Guide to Watch Styles</h2>
                <p className="card_txt">The perfect blend of fashion and function, watches have the power to elevate any look.The continuous evolution of material and technique makes Swarovski the leader of crystal cut creations. </p>
                <div className="button">
                  <button className="btn">Read me</button>
                </div>
              </div>
            </div>
            <div className="Video_card">
              <video autoPlay muted loop>
                <source src={aboutvideo3} type="video/mp4" />
              </video>
              <div className="card-info">
                <h1 className="Card_tit">Disney’s Alice in Wonderland and friends</h1>
                <p className="card_txt">This collection celebrates the irresistible spirit of Disney’s iconic characters, reimagining Alice in Wonderland and her friends with impeccable crystal savoir-faire. </p>
                <div className="button">
                  <button className="btn">Read me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="Home_slider">



        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img src={slider4} alt="" />
              <p className="Home_slide-txt">
                As a brand built on a foundation of equality , inclusivity, and self-expression, we champion our LGBTQ+ colleagues, the community at large, each and every day.
              </p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img src={slider3} alt="" />
              <p className="Home_slide-txt">Swarovski crystal settings come to life through our proprietary techniques such as Pointiage®.</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img src={slider2} alt="" />
              <p className="Home_slide-txt">
                Swarovski’s creative process is uniquely prolific.
              </p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img src={slider1} alt="" />
              <p className="Home_slide-txt">
                Learn about Swarovski’s heritage of craftsmanship, innovation, and creativity.
              </p>
            </Link>
          </SwiperSlide>

        </Swiper>
      </div>
    </>

  );
}

export default Home;
