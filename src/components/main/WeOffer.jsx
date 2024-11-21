import img1 from "../../assets/weOffer/img1.png";
import img2 from "../../assets/weOffer/img2.png";
import img3 from "../../assets/weOffer/img3.png";
import img4 from "../../assets/weOffer/img4.png";
import img5 from "../../assets/weOffer/img5.png";
import img6 from "../../assets/weOffer/img6.png";
import rightIcon from "../../assets/weOffer/rightIcon.png";
import "../../styles/main/WeOffer.css";
import BigButton from "../UI/BigButton";
const WeOffer = () => {
  const data = [
    {
      img: img1,
      title: "Sunset Bliss",
      desc: "A breathtaking view of the sunset over the mountains, casting vibrant hues across the sky.",
    },
    {
      img: img2,
      title: "City Lights",
      desc: "The vibrant lights of the city at night, with skyscrapers and bustling streets beneath the stars.",
    },
    {
      img: img3,
      title: "Nature's Serenity",
      desc: "A peaceful forest landscape with lush greenery and a tranquil river flowing through.",
    },
    {
      img: img4,
      title: "Ocean Breeze",
      desc: "The calming sound of the ocean waves crashing against the shore with golden sands stretching far and wide.",
    },
    {
      img: img5,
      title: "Mountain Peaks",
      desc: "Snow-capped peaks towering above the clouds, with the crisp mountain air filling your lungs.",
    },
    {
      img: img6,
      title: "Urban Escape",
      desc: "A modern cityscape with a balance of nature and architecture, where the urban lifestyle meets green spaces.",
    },
  ];

  return (
    <>
      <div className="WeOffer" id="we-offer">
        <div className="inner">
          <div className="top">
            <h4 className="big-heading">We Offer</h4>
            <span className="ylwTag">
              A unified and concrete-solid creative vision is what brings all
              our projects together
            </span>
          </div>
          <div className="inner-wrapper">
            {data?.map((e, i) => {
              return (
                <div key={`offer${i}`} className="offerCard">
                  <div className="main-img">
                    <img src={e?.img} alt="" />
                  </div>
                  <div className="content">
                    <div className="card-top">
                      <h6>{e?.title}</h6>
                      <img src={rightIcon} alt="" />
                    </div>
                    <div className="card-btm">
                      <span>{e?.desc}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="section-inner">
            <div className="left">
              <h6 className="heading">
                Find the perfect apartment & start searching now
              </h6>
              <div className="input-wrapper">
                <input type="text" placeholder="Enter a key word here _" />
              </div>
            </div>
            <BigButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeOffer;
