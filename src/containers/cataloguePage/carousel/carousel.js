import React,{Component} from 'react';
import Slider from "react-slick"; 
import './carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class Carousel extends Component{
   render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <Slider {...settings}>
        <div className="sliderContent">
          <h3>1</h3>
        </div>
        <div className="sliderContent">
          <h3>2</h3>
        </div>
        <div className="sliderContent">
          <h3>3</h3>
        </div>
        <div className="sliderContent">
          <h3>4</h3>
        </div>
        <div className="sliderContent">
          <h3>5</h3>
        </div>
        <div className="sliderContent">
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}