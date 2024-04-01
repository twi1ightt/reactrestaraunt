import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';


const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">

    <div className="app__wrapper_info">
    <SubHeading title="Chase The New Flavour" />
    <h1 className="app__header-h1">The Key To Fine Dining</h1>
    <p className="p__opensans" style={{margin: '2rem 0'}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sequi magnam ducimus? Deleniti ullam tempora perferendis dolorem aliquam sed illo, sapiente nisi iste, in porro perspiciatis voluptatem laudantium sint omnis.</p>
    <button tyle="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>

  </div> 
);

export default Header;
 