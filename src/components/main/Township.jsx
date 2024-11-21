import { useState } from "react";
import { AiOutlineShop } from "react-icons/ai";
import township from "../../assets/township1.png";
import tajlogo from "../../assets/main/highlightImg.png";
import TownshipContent from "./TownshipContent";
import "../../styles/main/Township.css";

const Township = () => {
  const tabPanel = [
    {
      name: "THE EMERALD",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "Exclusively Crafted for the Discerning",
          subHeading: "WHERE ELEGANCE MEETS COMFORT",
          tagline:
            "Step into a world of unparalleled luxury with The Emerald Villas, where every detail speaks of sophistication.",
          details: [
            "The Emerald is more than just a residence; it's a statement of luxury. Designed with meticulous attention to detail, these villas offer an extraordinary living experience where comfort and grandeur are seamlessly blended.",
            "Every room is an expression of elegance, with premium finishes and expansive spaces that are sure to leave a lasting impression. The Emerald is the epitome of modern living, designed for those who appreciate the finest things in life.",
            "Living in The Emerald means more than just owning a home—it's about embracing a lifestyle of exclusivity, where every day feels like a retreat in the lap of luxury.",
          ],
          img: township,
        },
      ],
    },
    {
      name: "THE SAPPHIRE",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "For Those Who Appreciate the Finer Things",
          subHeading: "WHERE LUXURY IS LIVED DAILY",
          tagline:
            "Indulge in the finest living experience with The Sapphire Villas, offering a perfect blend of design and luxury.",
          details: [
            "The Sapphire Villas are designed for those who demand the best. From the moment you step inside, you'll be surrounded by superior craftsmanship, luxurious interiors, and a stunning view that takes your breath away.",
            "With expansive living spaces, high-end fixtures, and state-of-the-art amenities, The Sapphire offers an experience of refined elegance that truly stands apart from the rest.",
            "At The Sapphire, every day is an opportunity to experience a life filled with the finest comforts, unparalleled style, and endless luxury.",
          ],
          img: township,
        },
      ],
    },
    {
      name: "THE RUBY",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "Designed for the Elite",
          subHeading: "WHERE LUXURY KNOWS NO LIMITS",
          tagline:
            "Experience the ultimate in luxury with The Ruby Villas, where modern elegance meets timeless beauty.",
          details: [
            "The Ruby Villas are the perfect balance of sophistication and comfort. Crafted for the most discerning homeowners, these villas offer spacious living with top-of-the-line finishes and breathtaking views.",
            "Each villa is designed to ensure a harmonious blend of style and function, providing an extraordinary living experience that meets all your needs and desires.",
            "Living in The Ruby means embracing a lifestyle of refined luxury, where every moment is an opportunity to enjoy life at its finest.",
          ],
          img: township,
        },
      ],
    },
    {
      name: "THE PEARL",
      icon: <AiOutlineShop />,
      data: [
        {
          heading: "Where Dreams Come to Life",
          subHeading: "THE ART OF FINE LIVING",
          tagline:
            "Discover the world of luxury at The Pearl Villas, where elegance meets functionality in every corner.",
          details: [
            "The Pearl Villas are designed for those who appreciate the finer things in life. From luxurious interiors to world-class amenities, every aspect of The Pearl has been carefully curated to create an extraordinary living experience.",
            "Each villa is a testament to timeless design and impeccable craftsmanship, offering you the comfort and luxury you deserve in a tranquil, picturesque setting.",
            "With stunning landscapes and unrivaled amenities, The Pearl is where you can experience the true meaning of fine living.",
          ],
          img: township,
        },
      ],
    },
  ];
  

  const [activeTab, setActiveTab] = useState(tabPanel?.[0]?.name?.replaceAll(" ", "_"));

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="Township">
      <div className="inner sm-flex-column">
        <div className="tab-panel">
          <div className="head">
            <img src={tajlogo} className="w-96" alt="Taj Logo" />
          </div>

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
                <TownshipContent data={e?.data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Township;
