import React from "react";
import "./InputRadioBtn.scss";

interface InputCheckboxProps {
  label?: string;
  id?: string;
  onChange?: (event?: any) => void;
  width?: string;
  height?: string;
  required?: boolean;
}

const InputRadioBtn: React.FC<InputCheckboxProps> = ({
  label,
  onChange,
  id,
  width,
  height,
  required = false,
  isSelected,
}) => {
  return (
    <div className="subcategory-wrapper">
      <div className="radio-wrapper">
        <input
          type="radio"
          //either use the id or the label as the id
          id={id || label}
          checked={isSelected}
          onChange={onChange}
          style={{ width, height }}
          required={required}
        />
      </div>
      <label htmlFor={id || label}>
        <h6>{label}</h6>
      </label>
    </div>
  );
};

export default InputRadioBtn;
