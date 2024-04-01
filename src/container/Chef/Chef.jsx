import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
       <img src={images.chef} alt="chef_image" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ea libero quos ullam laborum tempore quaerat impedit nesciunt inventore dolores mollitia ad, quae odit consequuntur quisquam harum aspernatur dicta nemo.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perspiciatis magni! Ratione facere veritatis ullam voluptate delectus dolore ipsam, minima architecto laborum, similique explicabo incidunt? Impedit deleniti corrupti eaque inventore.</p>
      </div>

      <div className='app__cheff-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="Chef signiture" />
      </div>
    </div>
  </div>
);

export default Chef;
