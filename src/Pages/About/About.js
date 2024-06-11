import './About.css';
import { Link } from 'react-router-dom';
import cardimg1 from '..//../img/cardimg1.avif'
import cardimg2 from '..//../img/cardimg2.avif'
import cardimg3 from '..//../img/cardimg3.avif'
import milleniaimg from '..//..//img/milleniaimg.avif'
import handBraslet from '..//..//img/handBraslet.avif'
import video from '..//..//img/videoart.mp4'





function About() {
  return (
    <>
      <section className="About_2">

        <div className="video_container">
          
          <video width="100%" height="auto" autoPlay loop>
            <source src={video} type="" />
          </video>
          <div className="button">
            <button className="btn_home">Discover more</button>

          </div>
        </div>

      </section>



      <section className="Cards">
        <h2 className="Info_tit">Infinitely Inspiring</h2>
        <div className="Card_in flex">
          <div className="Card">
            <div className='card_img'>
              <Link to="" className="cardImg"> <img src={cardimg1} alt="" /></Link>
            </div>
            <h2 className="Card_tit">Radiant Necklaces</h2>
            <p className="card_txt">Channeled into sculptural forms, fluid crystals are a beautiful expression of Swarovski savoir-faire. Take the modern route to styling with minimalist chains that gleam with your every move.</p>
            <div className="button">
              <button className="btn">Discover more</button>
            </div>
          </div>
          <div className="Card">
            <div className='card_img'>
              <Link to="" className="cardImg"> <img src={cardimg2} alt="" /></Link>
            </div>
            <h2 className="Card_tit">Chic Bracelets</h2>
            <p className="card_txt">An accumulation of cuts in a palette of bright whites and marine blues delivers a radiant refresh, while silhouettes enrich round-the-clock ensembles with subtle elegance. </p>
            <div className="button">
              <button className="btn">Discover more</button>
            </div>
          </div>

          <div className="Card">
            <div className='card_img'>
              <Link to="" className="cardImg"> <img src={cardimg3} alt="" /></Link>
            </div>
            <h2 className="Card_tit">Bold Earrings</h2>
            <p className="card_txt">Full-cut facets in high-octane hues reinterpret crystals with contemporary drama. A striking display of Swarovski’s mastery of light, statement earrings inspire you to shine your brightest.
            </p>
            <div className="button">
              <button className="btn">Discover more</button>
            </div>
          </div>
        </div>
      </section>


      <section className="World of Swarovski">
        <div className="container">
          <h2 className="Word_tit">World of Swarovski</h2>
          <p className="Word_txt">Illuminating the many facets of Swarovski from heritage to lifestyle and beyond. </p>
         
          <div className="word_img flex">
      <Link to="/somewhere1" className="word_img_item">
        <img src={milleniaimg} alt="Millenia" />
      </Link>
      <Link to="/somewhere2" className="word_img_item">
        <img src={handBraslet} alt="Hand Bracelet" />
      </Link>
    </div>


        </div>

      </section>
    </>
  );
}

export default About;