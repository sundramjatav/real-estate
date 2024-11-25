/* eslint-disable react/prop-types */

const TextareaInput = ({
  labelName,
  required,
  value,
  placeholder,
  clsName,
  onChange,
  disabled,
  defaultValue,
  error,
  min,
  max,
  type,
  name
}) => {
  return (
    <>
      <div className={`TextareaInput inputFieldBox ${clsName ? clsName : ""}`}>
        <label className="inputLabel" htmlFor="">
          {labelName}
          <span>{required}</span>
        </label>
        <div className="inputBody">
          <textarea
            name={name}
            minLength={min}
            maxLength={max}
            disabled={disabled}
            onChange={onChange}
            type={type ? type : "text"}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={error && "errorBgBorder"}
          ></textarea>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default TextareaInput;
