/* eslint-disable react/prop-types */
const ButtonMain = ({ clsName, name, onclick }) => {
  return (
    <>
      <button onClick={onclick} className={`ButtonMain ${clsName ? clsName : ""}`}>{name}</button>
    </>
  );
};

export default ButtonMain;
