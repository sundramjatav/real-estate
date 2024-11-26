/* eslint-disable react/prop-types */
const OptionPropertiesCard = ({ data, count }) => {
  return (
    <>
      <div className="OptionPropertiesCard">
            <span>{`0${count+1}`}</span>
        <div className="imgBox border rounded-2xl bg-blue-50">
          <img src={data?.img} className="" alt="" />
        </div>
        <div className="content">
          <h6>{data?.title}</h6>
          <p>{data?.desc}</p>
          <p>{data?.para}</p>
        </div>
      </div>
    </>
  );
};

export default OptionPropertiesCard;
