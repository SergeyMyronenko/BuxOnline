import React from "react";
import "./Accordion.scss";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import clsx from "clsx";

/**
 * Accordion component that displays a collapsible section with a title.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.accordionTitle - The title of the accordion.
 * @param {React.ReactNode} props.children - The content to be displayed inside the accordion.
 *
 * @example
 * <Accordion accordionTitle="Section 1">
 *   <p>This is the content of the accordion.</p>
 * </Accordion>
 *
 * @returns {JSX.Element} The rendered Accordion component.
 */
const Accordion = ({ accordionTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div className="accordion-title">
        <h5 onClick={() => setIsOpen(!isOpen)}>{accordionTitle}</h5>
        <div
          className={`accordion-button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaAngleDown></FaAngleDown>
          <FaAngleDown></FaAngleDown>
        </div>
      </div>

      <ul className={`accordion-list ${isOpen ? "open" : ""}`}>
        <div className="accordion-items-wrapper">
          {React.Children.map(children, (child, index) => (
            <li className="accordion-item" key={index}>
              {child}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Accordion;
