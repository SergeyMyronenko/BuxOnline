import React from 'react';
import './InputCheckbox.scss';

interface InputCheckboxProps {
    label: string;
    id?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    height?: string;
}

/**
 * InputCheckbox component renders a customizable checkbox input with a label.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label text for the checkbox.
 * @param {function} props.onChange - The function to call when the checkbox state changes.
 * @param {string} [props.id] - The optional id for the checkbox input. If not provided, the label will be used as the id.
 * @param {string} [props.width] - The optional width of the checkbox input.
 * @param {string} [props.height] - The optional height of the checkbox input.
 *
 * @example
 * <InputCheckbox
 *   label="Accept Terms and Conditions"
 *   onChange={handleCheckboxChange}
 *   id="termsCheckbox"
 *   width="20px"
 *   height="20px"
 * />
 */
const InputCheckbox: React.FC<InputCheckboxProps> = ({ label, onChange, id, width, height }) => {
    return (
        <div className="subcategory-wrapper">
            <div className="checkbox-wrapper">
                <input
                    type="checkbox"
                    //either use the id or the label as the id
                    id={id || label}
                    onChange={onChange}
                    style={{ width, height }}
                />
            </div>
            <label htmlFor={id || label}><h6>{label}</h6></label>
        </div>
    );
};

export default InputCheckbox;
