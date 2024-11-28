import "../../styles/optionProperties/OptionProperties.css";
import img1 from "../../assets/properties/image1.png";
import img2 from "../../assets/properties/image2.png";
import img3 from "../../assets/properties/image3.png";
import img4 from "../../assets/properties/image4.png";
import OptionPropertiesCard from "./OptionPropertiesCard";
const OptionProperties = () => {
  const data = [
    {
      img: img1,
      title: "A Block",
      desc: "A-1 to A-15 - Farmhouse plots A-16 to A-32 - Luxury Villas",
    },
    {
      img: img2,
      title: "B Block",
      desc: "B-1 to B-15 - Semi Commercial/Farmhouse plots B-16 to B-26 - Farmhouse plots",
    },
    {
      img: img3,
      title: "C Block",
      desc: "C-1 to C-23 - Commercial plots C-24 to C-147 - Residential plots",
      para:"includes C-82 to C-92 - Duplex (row houses)"
    },
    {
      img: img4,
      title: "D Block",
      desc: "D-1 to D-32 - Farmhouse plots D-33 to D-43 - Singlex (2BHK)",
    },
  ];
  return (
    <>
      <div className="OptionProperties">
        <div className="section-inner">
          <h4 className="big-heading blck">
            Welcome to our options of properties premium multiple{" "}
          </h4>
          <div className="inner-wrapper">
            {data?.map((e, i) => {
              return <OptionPropertiesCard count={i} key={`option${i}`} data={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionProperties;
