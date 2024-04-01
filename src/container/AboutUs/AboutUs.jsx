import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bd flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className="apoon__img" />
        <p classname="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          sapiente ut nemo voluptatum perferendis reiciendis incidunt, eos
          laborum molestiae sint nulla quam, veniam ea? Obcaecati doloribus
          consequatur quo libero magni.
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>

      <div className="app__aboutus_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" className="apoon__img" />
        <p classname="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          sapiente ut nemo voluptatum perferendis reiciendis incidunt, eos
          laborum molestiae sint nulla quam, veniam ea? Obcaecati doloribus
          consequatur quo libero magni.
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
