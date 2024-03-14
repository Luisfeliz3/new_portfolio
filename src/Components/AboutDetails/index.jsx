import "./style.css";

import me_icon from "../../image/me_suit.jpg";

const AboutDetails = () => {
  return (
    <div className="about-container">
      <div className="about-detail">
        <h1 className="about-title">
          I'm Luis, holding a Bachelor's in Computer and Technology. My
          expertise lies in Fullstack engineering, where I'm dedicated to
          empowering communities and expressing creativity through music and
          software development.
        </h1>
        <p className="about-description">
          In most of these Projects I am Incorparating the use of M.E.R.N with
          the MVC (Model, View, Controller) Framework.
        </p>
      </div>

      <div className="about-image">
        <img alt="me_icon" src={me_icon} className="me-card" />
      </div>
    </div>
  );
};

export default AboutDetails;
