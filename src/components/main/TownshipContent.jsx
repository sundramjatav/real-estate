import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TownshipContent = ({ data ,name }) => {
  const content = data?.[0];
  return (
    <>
      <div className="TownshipContent sm-flex-column">
        <div className="left sm-w-100">
          <h4 className="heading2">
            {name} <span>{content?.heading}</span>{" "}
          </h4>
          <h1 className="subHeading">{content?.subHeading}</h1>
          {content?.details?.map((e, i) => {
            return (
              <p key={`para${i}`} className="para">
                {e}
              </p>
            );
          })}
          <h1 className="ylwTag">{content?.tagline}</h1>
          <Link to={'/details-page'}>
          <button>Learn More</button>
          </Link>
        </div>
        <div className="right sm-w-100">
          <img src={content?.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default TownshipContent;
