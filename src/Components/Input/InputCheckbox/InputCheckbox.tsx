import React from "react";
import "./InputCheckbox.scss";

interface InputCheckboxProps {
  label?: string;
  id?: string;
  name?: string;
  onClick?: (event?: any) => void;
  width?: string;
  height?: string;
  required?: boolean;
  value?: string | number;
  checked: boolean;
}

/**
 * InputCheckbox component renders a customizable checkbox input with a label.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label for the checkbox.
 * @param {function} props.onChange - The function to call when the checkbox state changes.
 * @param {string} [props.id] - The id for the checkbox input. If not provided, the label will be used as the id.
 * @param {string | number} [props.width] - The width of the checkbox input.
 * @param {string | number} [props.height] - The height of the checkbox input.
 * @param {boolean} [props.required=false] - Whether the checkbox input is required.
 * @returns {JSX.Element} The rendered InputCheckbox component.
 */
const InputCheckbox: React.FC<InputCheckboxProps> = ({
  label,
  onClick,
  id,
  width,
  height,
  required = false,
  name,
  value,
  checked,
}) => {
  return (
    <div className="subcategory-wrapper">
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          //either use the id or the label as the id
          id={id || label}
          onChange={onClick}
          style={{ width, height }}
          required={required}
          name={name}
          value={value}
          checked={checked}
        />
      </div>
      <label htmlFor={id || label}>
        <h6>{label}</h6>
      </label>
    </div>
  );
};

export default InputCheckbox;
