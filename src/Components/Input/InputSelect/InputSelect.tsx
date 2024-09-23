import React from 'react';
import './InputSelect.scss';

interface InputSelectProps {
    label: string;
    options: string[];
    id?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({ label, options,id }) => {
    return (
        <div className="select-wrapper">
            <label htmlFor={id}>{label}</label>
            <select id={id}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default InputSelect;