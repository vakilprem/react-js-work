import "./Home.css";

import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../Components/Navbar/TitelCard/TitleCards";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="banner-img" alt="" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            In 1980s Indiana, a group of young friends witness supernatural
            forces and secret government exploits. As they search for answers,
            the children unravel a series of extraordinary mysteries.
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Block Buster Movies"} category={"top_rated"} />
        <TitleCards title={"Only On Netflix"} category={"popular"} />
        <TitleCards title={"Up Coming"} category={"upcoming"} />
        <TitleCards title={"Top Picks For you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
