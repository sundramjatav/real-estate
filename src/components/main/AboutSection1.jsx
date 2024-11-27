import { useState } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { IoDiamondOutline, IoLocationOutline } from "react-icons/io5";
import { PiSunBold } from "react-icons/pi";
import "../../styles/aboutSection/AboutSection.css";
import tab1 from "../../assets/about/about.png";
import AboutContent from "./AboutContent";

const AboutSection1 = () => {
  const tabPanel = [
    {
      heading: "A unique Project, Approved by TNCP and RERA",
      subHeading: "Situated at - Village Khuranaia, Bilkisgang, Sehore road, Ahead of Ratibad Bhopal",
      para: "You will find Luxury Villas, Luxury Farmhouse plots, Commercial Plots, Semi commercial Plots and Residential plots at one place in Taj The Paradise Township",
      img: tab1,
    }
  ];


  const [activeTab, setActiveTab] = useState(tabPanel?.[0]?.name?.replaceAll(" ", "_"));

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="" id="project">
      <div className="">
        <h4 className="taj text-center md:text-[9rem] text-5xl sm:text-8xl  uppercase md:py-32 py-10 text-[#E79600] font-bold">TAJ  -  The Paradise</h4>
        <div className="tab-content">
          {tabPanel?.map((e, i) => {
            return (
              <div className=" w-full flex items-center flex-col md:flex-row">
                <div className="md:w-[65%] md:px-20 md:pl-52 px-10 space-y-5 flex flex-col gap-5 py-10">
                  <h1 className="lg:text-8xl md:text-7xl leading-tight text-6xl">{e?.heading} <span className="text-5xl">(RERA # BPL - 1136)</span></h1>
                  <h1 className="lg:text-4xl md:text-3xl text-2xl lg:leading-relaxed font-light">{e?.para}</h1>
                  <h1 className="lg:text-4xl md:text-3xl text-2xl text-gray-600 fofont-normalnt→ ght">{e?.subHeading}</h1>
                  <div className="flex flex-col md:flex-row  w-full gap-10">
                    <div className="w-full md:w-1/2 h-[26rem] rounded-2xl bg-red-950">
                      <iframe
                        className="w-full h-full rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.651654050593!2d77.2554437!3d23.1025849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5909af08315b%3A0x8bb04229a37134fe!2s4734%2B25X%20Taj%20Township%2C%20Gadiya%2C%20Khuraniya%2C%20Madhya%20Pradesh%20466111!5e0!3m2!1sen!2sin!4v1698420218257!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>

                      {/* <iframe
                      className="w-full h-full rounded-xl"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.126018958764!2d77.33123!3d23.21656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4298577e7a1%3A0x9a8c812345abcdef!2sKhuraniya%20Village%2C%20Bilkisganj%2C%20Sehore%20Road%2C%20Ratibad%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1695765123123!5m2!1sen!2sin"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe> */}
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                      <p className="text-3xl font-bold">Highlights:-</p>
                      <ul className="space-y-5">
                        <li className="text-3xl text-gray-600 font-normal flex gap-2"><p>→</p> Nestled in a forested region.</li>
                        <li className="text-3xl text-gray-600 font-normal flex gap-2"><p>→</p> Located 1.8 km from the Bhopal-Indore express highway.</li>
                        <li className="text-3xl text-gray-600 font-normal flex gap-2"><p>→</p> Close to the six-lane Western Highway.</li>
                        <li className="text-3xl text-gray-600 font-normal flex gap-2"><p>→</p> Accessible via a four-lane road.
                        </li>
                        <li className="text-3xl text-gray-600 font-normal flex gap-2"><p>→</p> Close to Ratapani Sanctuary </li>
                        <li className="text-3xl text-gray-600 font-normal flex gap-2"><p>→</p> With promising returns projected to be up to 3x in the coming years.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="md:w-[30%] h-[80vh] hidden md:block ">
                  <img src={e?.img} className="w-full h-full " alt="" />
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
