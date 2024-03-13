import "./style.css";

import me_icon from '../../image/me_suit.jpg'

const AboutDetails = () => {
  return (
   <div className="about-container">
       <div className="about-detail">
      <h1>
       I'm Luis, holding a Bachelor's in Computer and Technology. 
       My expertise lies in frontend engineering, where I'm dedicated to 
       empowering communities and expressing creativity through music 
       and software development.
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
