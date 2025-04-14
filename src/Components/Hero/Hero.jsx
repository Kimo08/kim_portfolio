import "./Hero.css";
import Img from "../../assets/IMG_1232.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        src={Img}
        style={{ width: "480px", height: "240px", borderRadius: "50%" }}
        alt=""
      />
      <h1>
        <span>I am Kennedy Obasi,</span> a frontend developer based in Lagos,
        Nigeria.
      </h1>
      <p>
        I am a frontend developer with experience in web development in
        React.Js, Next.Js, JavaScript with component styling libraries like
        Shadcn-ui, Material-ui and others.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/public/File/Kennedy-Resume-2.pdf" download>
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
