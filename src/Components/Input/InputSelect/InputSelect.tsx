import React from 'react';
import './InputSelect.scss';

interface InputSelectProps {
    label: string;
    options: string[];
    id?: string;
}

/**
 * InputSelect component renders a labeled select dropdown.
 *
 * @component
 * @param {InputSelectProps} props - The props for the InputSelect component.
 * @param {string} props.label - The label for the select dropdown.
 * @param {string[]} props.options - The options to be displayed in the select dropdown.
 * @param {string} props.id - The id for the select element.
 * @returns {JSX.Element} The rendered InputSelect component.
 */
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