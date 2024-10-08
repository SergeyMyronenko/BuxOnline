
import React, { useEffect } from 'react';
import './InputField.scss';
interface InputFieldProps {
    label: string;
    type: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    initialValue?: string;
    onChange?: (event: any) => void;
}
/**
 * InputField component renders a labeled input field with various customizable properties.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label text for the input field.
 * @param {string} [props.type='text'] - The type of the input field (e.g., text, password, email).
 * @param {string} props.id - The unique identifier for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {boolean} [props.required=true] - Whether the input field is required.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @param {string} props.initialValue - The initial value of the input field.
 * @returns {JSX.Element} The rendered InputField component.
 */
const InputField: React.FC<InputFieldProps> = ({ label, type='text', id,placeholder,required=true, onChange,initialValue }) => {
   
    return (
        <div className='input-wrapper'>
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder}  id={id} required={required} onChange={onChange} />
        </div>
    );
   
};

export default InputField;