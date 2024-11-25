/* eslint-disable react/prop-types */

const TextInput = ({
  labelName,
  optional,
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
  icon,
  name
}) => {
  return (
    <>
      <div className={`textInput inputFieldBox ${clsName ? clsName : ""}`}>
        <label className="inputLabel" htmlFor="">
          {labelName} <p>{optional}</p>
          <span>{required}</span>
        </label>
        <div className="inputBody">
          <input
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
          />
          {icon && <div className="icon">{icon}</div>}
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default TextInput;
