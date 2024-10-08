import React, { useState } from 'react';
import './MultipleSelect.scss';
import { AiOutlineDelete } from "react-icons/ai";

interface skill {
    id: number;
    name: string;
}

interface Props {
    skills: skill[];
    id?: string;
    onChange?: (value: number[]) => void;
}

/**
 * MultipleSelect component allows users to select multiple skills from a dropdown list.
 * 
 * @component
 * @param {Props} props - The props for the MultipleSelect component.
 * @param {skill[]} props.skills - The list of available skills to select from.
 * @param {(selectedSkills: number[]) => void} props.onChange - Callback function to handle changes in the selected skills.
 * @param {string} props.id - The unique identifier for the component.
 * 
 * @returns {JSX.Element} The rendered MultipleSelect component.
 * 
 * @example
 * <MultipleSelect
 *   skills={[{ id: 1, name: 'JavaScript' }, { id: 2, name: 'TypeScript' }]}
 *   onChange={(selectedSkillIds) => console.log(selectedSkillIds)}
 *   id="skills-select"
 * />
 * 
 * @remarks
 * The component maintains its own state for the selected items, input value, and dropdown visibility.
 * It filters the available skills based on the input value and displays the filtered list in a dropdown.
 * Users can add skills by selecting them from the dropdown and remove them by clicking on the skill's close button.
 * 
 * @typedef {Object} skill
 * @property {number} id - The id of the skill.
 * @property {string} name - The name of the skill.
 */
const MultipleSelect: React.FC<Props> = ({ skills, onChange, id }) => {
    const [selectedItems, setSelectedItems] = useState<skill[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const allItems = skills;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setIsDropdownOpen(true);
    };

    const handleItemSelect = (item: skill) => {
        if (!selectedItems.includes(item)) {
            const newSelectedItems = [...selectedItems, item];
            setSelectedItems(newSelectedItems);
            onChange && onChange(newSelectedItems.map(skill => skill.id));
        }
        setInputValue('');
        setIsDropdownOpen(false);
    };

    const handleItemRemove = (index: number) => {
        const newItems = selectedItems.filter((_, i) => i !== index);
        setSelectedItems(newItems);
        onChange && onChange(newItems.map(skill => skill.id));
    };

    const filteredItems = allItems.filter(item =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className="mult-select-tag">
            <div className="wrapper">
                <div className="skills">
                    {selectedItems.map((item, index) => (
                        <div key={index} className="skill-container">
                            <span className="skill-label">{item.name}</span>
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
                    >
                    </input>
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
                                    {item.name}
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