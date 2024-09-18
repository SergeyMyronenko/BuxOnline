
import React from 'react';
import './InputField.scss';
interface InputFieldProps {
    label: string;
    type: string;
    id: string;
    placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, id,placeholder }) => {
    return (
        <div className='input-wrapper'>
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder}  id={id} />
        </div>
    );
};

export default InputField;