import React from 'react';
import './Accordion.scss';

const Accordion = ({ accordionTitle, children }) => {
    return (
        <div className='accordion-wrapper'>
            <div className="accordion-title">
                <h3 >{accordionTitle}</h3>
                <div>{'\u{1F893}'}</div>
            </div>

            <ul className='accordion-list'>
                {React.Children.map(children, (child, index) => (                    
                    <li className='accordion-item' key={index}>
                        <input type="checkbox" name="" id="" />
                        {child}                   
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accordion;
