import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Img from "../../assets/IMG_1232.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={Img}
            style={{ width: "400px", height: "200px", borderRadius: "50px" }}
            alt=""
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Frontend Developer with over a year of experience in the
              field. Throughout my career, I have had the priviledge of
              collaborating with prestigious organizations,contributing to their
              success and growth
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Next.Js</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1> {">"}1 </h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>{">"}1</h1>
          <p>HAPPY CLIENT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
