
import React from 'react';
import './InputField.scss';
interface InputFieldProps {
    label: string;
    type: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    onChange?: (event: any) => void;
}

/**
 * InputField component renders a labeled input field.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label text for the input field.
 * @param {string} props.type - The type of the input field (e.g., text, password, email).
 * @param {string} props.id - The unique identifier for the input field.
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 * @returns {JSX.Element} The rendered input field component.
 */
const InputField: React.FC<InputFieldProps> = ({ label, type, id,placeholder,required=true, onChange }) => {
    return (
        <div className='input-wrapper'>
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder}  id={id} required={required} onChange={onChange}/>
        </div>
    );
};

export default InputField;