import { useState } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { IoDiamondOutline, IoLocationOutline } from "react-icons/io5";
import { PiSunBold } from "react-icons/pi";
import "../../styles/aboutSection/AboutSection.css";
import tab1 from "../../assets/panel/tab1.png";
import tab2 from "../../assets/panel/park.png";
import tab3 from "../../assets/panel/gallary.jpg";
import tab4 from "../../assets/panel/villa.png";
import icon1 from "../../assets/facilities/icon1.png";
import icon2 from "../../assets/facilities/icon2.png";
import icon3 from "../../assets/facilities/icon3.png";
import icon4 from "../../assets/facilities/icon4.png";
import icon5 from "../../assets/facilities/icon5.png";
import icon6 from "../../assets/facilities/icon6.png";
import icon7 from "../../assets/facilities/icon7.png";
import icon8 from "../../assets/facilities/icon8.png";
import AboutContent from "./AboutContent";

const AboutSection = () => {
  const tabPanel = [
    {
      name: "PROJECT COMPLEX",
      icon: <IoLocationOutline />,
      data: [
        {
          heading: "Make Your Realty Dreams a Reality",
          subHeading:
            "Taj The Paradise offers unparalleled design, blending modern aesthetics with comfort, ensuring a luxurious living experience.",
          details: [
            "Taj The Paradise brings you meticulously designed homes that offer luxury, convenience, and a sense of community. With world-class amenities and breathtaking views, each space is designed to provide a perfect living environment.",
          ],
          img: tab1,
        },
      ],
    },
    {
      name: "PROJECT PARK",
      icon: <PiSunBold />,
      data: [
        {
          heading: "Make Your Realty Dreams a Reality",
          subHeading:
            "Embrace a serene lifestyle surrounded by nature and tranquility, with every feature designed to enhance your well-being.",
          details: [
            "At Project Park, we integrate green spaces, recreational areas, and premium amenities. The project is designed to ensure that every resident enjoys peace and comfort while being close to the hustle and bustle of the city.",
          ],
          img: tab2,
        },
      ],
    },
    {
      name: "PROJECT GALLERY",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "Make Your Realty Dreams a Reality",
          subHeading:
            "Step into the future of urban living with exclusive designs and impeccable craftsmanship that define the essence of luxury.",
          details: [
            "Our Project Gallery showcases the innovative design and luxurious features that define Taj The Paradise. From spacious homes to cutting-edge amenities, experience the elegance of modern living.",
          ],
          img: tab3, 
        },
      ],
    },
    {
      name: "PROJECT VILLA",
      icon: <IoDiamondOutline />,
      data: [
        {
          heading: "Make Your Realty Dreams a Reality",
          subHeading:
            "Own a piece of architectural brilliance with our exclusive villas, offering the perfect balance of comfort and opulence.",
          details: [
            "The Project Villa is designed for those who appreciate refined living. These villas offer expansive layouts, premium finishes, and unmatched privacy, ensuring a luxurious lifestyle.",
          ],
          img: tab4, 
        },
      ],
    },
  ];


  const facilities = [
    {
      icon: icon1,
      name: "Lux Appliances",
      desc: "Upgrade your lifestyle with premium appliances that offer efficiency, style, and unmatched functionality.",
    },
    {
      icon: icon2,
      name: "Fast WI-FI",
      desc: "Enjoy seamless connectivity with high-speed internet, ensuring you stay productive and entertained.",
    },
    {
      icon: icon3,
      name: "Swimming Pool",
      desc: "Dive into relaxation with our pristine swimming pools designed for leisure and rejuvenation.",
    },
    {
      icon: icon4,
      name: "Parking Place",
      desc: "Experience convenience with dedicated parking spaces that ensure your vehicle’s safety and accessibility.",
    },
    {
      icon: icon5,
      name: "Gym & Fitness",
      desc: "Stay active and healthy with our state-of-the-art fitness facilities tailored for all your workout needs.",
    },
    {
      icon: icon6,
      name: "Outdoor Space",
      desc: "Reconnect with nature in our expansive outdoor spaces, perfect for recreation and relaxation.",
    },
    {
      icon: icon7,
      name: "Fireplace",
      desc: "Create warm and cozy moments with our elegant fireplaces, adding charm to your living space.",
    },
    {
      icon: icon8,
      name: "Elevator",
      desc: "Enjoy the ease of accessibility with modern elevators designed for your comfort and convenience.",
    },
  ];


  const [activeTab, setActiveTab] = useState(tabPanel?.[0]?.name?.replaceAll(" ", "_"));

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="AboutSection" id="project">
      <div className="section-inner">
        <h4 className="big-heading">Find the project you love</h4>

        <div className="tab-panel">
          <div className="panel-wrapper">
            {tabPanel?.map((e, i) => {
              const tabKey = e?.name?.replaceAll(" ", "_");
              return (
                <div
                  key={`panel${i}`}
                  className={`tab-item ${activeTab === tabKey ? "active" : ""}`}
                  onClick={() => handleTabClick(tabKey)}
                >
                  {e?.icon} {e?.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="tab-content">
          {tabPanel?.map((e, i) => {
            const tabKey = e?.name?.replaceAll(" ", "_");
            return (
              <div
                key={`content${i}`}
                className={`tab-pane ${activeTab === tabKey ? "active" : ""}`}
              >
                <AboutContent data={e?.data} />
              </div>
            );
          })}
        </div>

        <div className="facilities" id="about">
          {facilities?.map((e, i) => {
            return (
              <div key={`fac${i}`} className="fac-card">
                <div className="icon">
                  <img src={e?.icon} alt={e?.name} />
                </div>
                <h1>{e?.name}</h1>
                <p className="para">{e?.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
