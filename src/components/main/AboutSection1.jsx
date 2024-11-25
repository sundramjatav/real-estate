import { useState } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { IoDiamondOutline, IoLocationOutline } from "react-icons/io5";
import { PiSunBold } from "react-icons/pi";
import "../../styles/aboutSection/AboutSection.css";
import tab1 from "../../assets/about/about.jpg";
import AboutContent from "./AboutContent";

const AboutSection1 = () => {
  const tabPanel = [
    {
      name: "PROJECT COMPLEX",
      icon: <IoLocationOutline />,
      data: [
        {
          heading: "Make Your Realty Dreams a Reality",
          subHeading:
            "Taj The Paradise is an innovative real estate development offering a range of residential options, including luxury villas, apartments, and townhouses.",
          img: tab1,
        },
      ],
    },
  ];


  const [activeTab, setActiveTab] = useState(tabPanel?.[0]?.name?.replaceAll(" ", "_"));

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="AboutSection" id="project">
      <div className="section-inner">
        <h4 className="big-heading1">TAJ The Paradise</h4>
        <div className="tab-content">
          {tabPanel?.map((e, i) => {
            return (
                <div className="AboutContent sm-flex-column">
                  <div className="left sm-w-100">
                    <h1 className="heading2">{e?.data[0]?.heading}</h1>
                    <h1 className="subHeading">{e?.data[0]?.subHeading}</h1>
                    {e?.data[0]?.details?.map((e, i) => {
                      return (
                        <p key={`abCont${i}`} className="para">
                          {e}
                        </p>
                      );
                    })}
                  </div>
                  <div className="right sm-w-100 h-[50vh]">
                    <img src={e?.data[0]?.img} className="w-full h-full object-contain" alt="" />
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
