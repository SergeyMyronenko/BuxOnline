import React from 'react';
import './SubCategory.scss';
const SubCategory = ({label, checked, onChange }) => {
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
            <label htmlFor={label}>{label}</label>
        </div>
    );
};

export default SubCategory;