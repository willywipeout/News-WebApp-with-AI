
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ story }) => (
  <div>
    <div className="text-content">
      <p className="category">{story.category}</p>
      <h1>{story.title}</h1>
      <p>{story.content}</p>
      <a href={story.link}>Read More</a>
    </div>
    <div className="background-image" style={{ backgroundImage: `url(${story.imageUrl})` }}></div>
  </div>
);

const MySlider = ({ latestStories }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {latestStories.map((story) => (
        <Slide key={story.id} story={story} />
      ))}
    </Slider>
  );
};

export default Slider;
