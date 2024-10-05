import React from 'react';
import './InputSelect.scss';

interface InputSelectProps {
    label: string|number;
    options: {name:string,value:string|number}[];
    id?: string;
    onChange?: (event: any) => void;
}

/**
 * InputSelect component renders a labeled select dropdown.
 *
 * @component
 * @param {Object}  - The props for the InputSelect component.
 * @param {string}  - The label for the select dropdown.
 * @param {string[]}- The array of options to be displayed in the dropdown.ment} The rendered InputSelect component.
 * @param {function onChange(event:React.ChangeEvent<HTMLSelectElement>)} - The function to be called when the value of the select dropdown changes.
 * @example <InputSelect label="Тип компанії" options={["Компанія", "Агентство"]} onChange={handleSelectInput}></InputSelect>
        
 * 
    
 }}
 */
const InputSelect: React.FC<InputSelectProps> = ({ label, options,id,onChange }) => {
    return (
        <div className="select-wrapper">
            <label htmlFor={id}>{label}</label>
            <select id={id} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default InputSelect;