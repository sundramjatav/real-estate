/* eslint-disable react/no-unescaped-entities */
import underlinePng from "../../assets/svg/underline.png";
import ImageSlider from "../main/ImageSlider";
import img1 from "../../assets/layout-section/image1.jpg";
import img2 from "../../assets/layout-section/image2.jpg";
import img3 from "../../assets/layout-section/image3.jpg";
import img4 from "../../assets/layout-section/image4.jpg";
import img5 from "../../assets/layout-section/image5.jpg";
import img6 from "../../assets/layout-section/image6.jpg";
import video1 from '../../assets/layout-section/video1.mp4'
import video2 from '../../assets/layout-section/video2.mp4'
import video3 from '../../assets/layout-section/video3.mp4'
import video4 from '../../assets/layout-section/video4.mp4'
import video5 from '../../assets/layout-section/video5.mp4'
import layoutMap from "../../assets/layout-section/layoutMap.png";
import "../../styles/planLayoutSection/PlanLayoutSection.css";
import { IoImageOutline, IoVideocamOutline } from "react-icons/io5";
import { Md360 } from "react-icons/md";
import { useEffect, useState } from "react";

const PlanLayoutSection = () => {
  const layoutData = {
    photos: [
      { src: img1 },
      { src: img2 },
      { src: img3 },
      { src: img4 },
      { src: img5 },
      { src: img6 },
    ],
    videos: [
      { src: video1 },
      { src: video2},
      { src: video3},
      { src: video4},
      { src: video5},
    ],
    videos360: [
      { src: video5 },
      { src: video4 },
      { src: video3},
      { src: video2},
      { src: video1},
    ],
  };

  const [activeTab, setActiveTab] = useState("photos");

  const tabHandler = (tab) => {
    setActiveTab(tab);
  };

  const getSliderData = () => {
    switch (activeTab) {
      case "photos":
        return layoutData.photos;
      case "videos":
        return layoutData.videos;
      case "videos360":
        return layoutData.videos360;
      default:
        return layoutData.photos;
    }
  };

  useEffect(() => {
    getSliderData();
  }, [activeTab]);

  return (
    <div className="PlanLayoutSection" id="plan">
      <div className="section-inner">
        <div className="top-header">
          <span className="ylwTag">OUR GALLERY</span>
          <h4 className="heading2">Layouts Plan</h4>
          <p className="para">
            Smart Panning is not always about Grandeur, It's about creating the
            Grandeur by using Natural resources smartly
          </p>
          <div className="underline">
            <img src={underlinePng} alt="underline" />
          </div>
        </div>
        <div className="inner-wrapper sm-flex-column">
          <div className="left sm-w-100">
            <ImageSlider data={getSliderData()} tab={activeTab} />
          </div>
          <div className="right sm-w-100">
            <div className="top-panel">
              <ul>
                <li>
                  <button
                    onClick={() => tabHandler("photos")}
                    className={`tab-btn ${
                      activeTab === "photos" ? "active" : ""
                    }`}
                  >
                    <IoImageOutline /> Photos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => tabHandler("videos")}
                    className={`tab-btn ${
                      activeTab === "videos" ? "active" : ""
                    }`}
                  >
                    <IoVideocamOutline /> Video
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => tabHandler("videos360")}
                    className={`tab-btn ${
                      activeTab === "videos360" ? "active" : ""
                    }`}
                  >
                    <Md360 /> 360 Video
                  </button>
                </li>
              </ul>
            </div>
            <div className="map-layout">
              <img src={layoutMap} alt="layoutMap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanLayoutSection;
