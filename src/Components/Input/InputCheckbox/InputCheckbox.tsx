import React from 'react';
import './InputCheckbox.scss';

interface InputCheckboxProps {
    label: string;
    id?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    height?: string;
}

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
