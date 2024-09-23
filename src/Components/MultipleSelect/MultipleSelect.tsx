import React, { useState } from 'react';
import './MultipleSelect.scss';
import { AiOutlineDelete } from "react-icons/ai";

interface Props {
    skills: string[];
    id?: string;
}

const MultipleSelect: React.FC<Props> = ({ skills }) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const allItems = skills;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setIsDropdownOpen(true);
    };

    const handleItemSelect = (item: string) => {
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        }
        setInputValue('');
        setIsDropdownOpen(false);
    };

    const handleItemRemove = (index: number) => {
        const newItems = selectedItems.filter((_, i) => i !== index);
        setSelectedItems(newItems);
    };

    const filteredItems = allItems.filter(item =>
        item.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className="mult-select-tag">
            <div className="wrapper">
                <div className="all-skills">
                    {selectedItems.map((item, index) => (
                        <div key={index} className="skill-container">
                            <span className="skill-label">{item}</span>
                            <div className="skill-close" onClick={() => handleItemRemove(index)}>
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3327 11.8332L1.66602 1.1665M12.3327 1.1665L1.66602 11.8332" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    ))}
                    {/* displayed only when at least 1 item is selected */}
                    {selectedItems.length > 0 && (
                        <div key="delete" className="skill-container clear" onClick={() => setSelectedItems([])}>
                            <AiOutlineDelete />
                        </div>
                    )}
                </div>
                <div className="input-body">
                    <input
                        type="text"
                        className="input"
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={() => setIsDropdownOpen(true)}
                        placeholder='Введіть назву навички...'
                    />
                    <div className="btn-container">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} type='button'>
                            {isDropdownOpen ? (
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.542 8.5H0.457031" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            ) : (
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.542 8.5H0.457031M7.9995 0.957528V16.0425" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                    <ul>
                        {filteredItems.length === 0 ? (
                            <li className='no-results'>No items found</li>
                        ) : (
                            filteredItems.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleItemSelect(item)}
                                    className={`list-item ${selectedItems.includes(item) ? 'selected' : ''}`}
                                >
                                    {item}
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
            <div className={`overlay ${isDropdownOpen ? 'active' : ''}`} onClick={() => setIsDropdownOpen(false)}></div>
        </div>
    );
};

export default MultipleSelect;