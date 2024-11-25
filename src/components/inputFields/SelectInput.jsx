/* eslint-disable react/prop-types */

const SelectInput = ({
  labelName,
  required,
  options,
  onChange,
  defaultValue,
  error,
  disabled,
  clsName,
  name
}) => {
  return (
    <>
      <div className={`SelectInput inputFieldBox ${clsName ? clsName : ""}`}>
        <label className="inputLabel" htmlFor="">
          {labelName}
          <span>{required}</span>
        </label>
        <div className="inputBody">
          <select
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={onChange}
            name={name}
          >
            <option value="">{defaultValue}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default SelectInput;
