import "./style.css";

import me_icon from '../../image/me_suit.jpg'

const AboutDetails = () => {
  return (
   <div className="about-container">
       <div className="about-detail">
      <h1>
        I'm Luis, with a B.A in computer & technology. I am passionate about
        frontend engineering, empowering the community, and creating art through
        music and software.
      </h1>
      <p>
        In most of these Projects I am Incorparating the use of M.E.R.N with the
        MVC (Model, View, Controller) Framework.
      </p>

     
    </div>
    <div>
        <div>
          <img
            alt="prepair_icon"
            src={me_icon}
            className="me-card"
          />
        </div>
      </div>
   </div>
  );
};

export default AboutDetails;
