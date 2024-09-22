import React from 'react';
import './SelectField.scss';
const SelectField = ({ label, options }) => {
    return (
        <div className="select">
            <label htmlFor="role">{label}</label>
            <select id="role">
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
            ))}
             </select>

           
        </div>
    )
};

export default SelectField;