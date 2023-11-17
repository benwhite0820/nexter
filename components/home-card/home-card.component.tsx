import { BiHeartCircle } from 'react-icons/bi';
import { BsSignpost } from 'react-icons/bs';
import './home-card.style.scss';
import { IoPersonOutline } from 'react-icons/io5';
import { TbRulerMeasure } from 'react-icons/tb';
import { IoPricetagOutline } from 'react-icons/io5';
import React from 'react';
import Heading from '../heading/heading.component';
import Button from '../button/button.component';

type Props = {
  image: string;
  alt: string;
  headingMessage: string;
  location: string;
  roomMessage: string;
  areaMessage: string;
  price: string;
};

const HomeCard = ({
  image,
  alt,
  headingMessage,
  location,
  roomMessage,
  areaMessage,
  price,
}: Props) => {
  return (
    <div className="home-card">
      <img src={image} alt={alt} className="home__img" />
      <BiHeartCircle className="home__like" />
      <Heading headingLevel="h5" className="home__name">
        {headingMessage}
      </Heading>
      <div className="home__location">
        <IoPersonOutline className="home__icon" />
        <p>{location}</p>
      </div>
      <div className="home__room">
        <BsSignpost className="home__icon" />
        <p>{roomMessage}</p>
      </div>
      <div className="home__area">
        <TbRulerMeasure className="home__icon" />
        <p>
          {areaMessage} m<sup>2</sup>
        </p>
      </div>
      <div className="home__price">
        <IoPricetagOutline className="home__icon" />
        <p>{price}</p>
      </div>
      <Button className="home-btn">Contact realtor</Button>
    </div>
  );
};

export default HomeCard;
