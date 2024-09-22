import React from 'react';
import './InputCheckbox.scss';
const InputCheckbox = ({label, checked, onChange }) => {
    return (
        <div className="subcategory-wrapper">
            <div className="checkbox-wrapper">
                <input
                    type="checkbox"
                    id={label}
                    checked={checked}
                    onChange={onChange}
                />
            </div>
            <label htmlFor={label}><h6>{label}</h6></label>
        </div>
    );
};

export default InputCheckbox;