/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import highlightImg from "../../assets/main/highlightImg.png";
import crown from "../../assets/main/crown.png";
import ButtonMain from "../UI/ButtonMain";
import img1 from "../../assets/sliderImg/img1.png";
import img2 from "../../assets/sliderImg/img2.png";
import img3 from "../../assets/sliderImg/img3.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../styles/heroSection/HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const allSliderData = [
    {
      desc: "Taj The Paradise is an innovative real estate development offering a range of residential options, including luxury villas, apartments, and townhouses.",
      img: img1,
    },
  ];
  const nextSlide = () => {
    const imgElement = document.querySelector(".carousel-image");
    imgElement.classList.add("fade");

    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % allSliderData.length);
    }, 500);

    setTimeout(() => {
      imgElement.classList.remove("fade");
    }, 500);
  };

  const prevSlide = () => {
    const imgElement = document.querySelector(".carousel-image");
    imgElement.classList.add("fade");

    setTimeout(() => {
      setIndex(
        (prevIndex) =>
          (prevIndex - 1 + allSliderData.length) % allSliderData.length
      );
    }, 500);

    setTimeout(() => {
      imgElement.classList.remove("fade");
    }, 500);
  };

  return (
    <div className="HeroSection sm-flex-column">
      <div className="section-left sm-flex-column">
        <div className="left">

          <div className="content">
            {/* <h1 className="heading">A&D Ventures</h1> */}
            <img src={crown} className="w-[400px]" alt="" />
            <p className="para white">
              Welcome to A&D Ventures, a trusted name in real estate in Bhopal for over a decade. With a commitment to quality, innovation, and customer satisfaction, we specialize in crafting exceptional living spaces and commercial properties. 
            </p>
            <p className="para  font">Presenting a dream project</p>
            <div className="hltImg">
              <img src={highlightImg} alt="highlightImg" />
            </div>
            <a href={'#contact-us'} className="ButtonMain mx-auto min-w-[200px]" >Let's Talk </a>
          </div>
        </div>

        <div className="right">
          <div className="carousel-body-wrapper">
            <img
              src={allSliderData?.[index]?.img}
              alt="carousel-slide"
              className="carousel-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
