import React from 'react';
import './HollowButton.scss';

interface HollowButtonProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    fontSize?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit';
}

// attention, I changed the wsay you pass the styles,
//now you past them the same way you write css
//for example: 
{/* <HollowButton type="submit" width='100%' borderRadius='20px'> Завантажити </HollowButton> */}
//width='value', value is the same value you write in css
//the same way you pass the height, borderRadius, fontSize

/**
 * HollowButton component renders a customizable button with a hollow style.
 *
 * @param {object} props - The properties object.
 * @param {string | number} props.width - The width of the button.
 * @param {string | number} props.height - The height of the button.
 * @param {string | number} props.borderRadius - The border radius of the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick - The click event handler for the button.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string | number} [props.fontSize] - The font size of the button text.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {string} [props.type='button'] - The type of the button.
 *
 * @returns {JSX.Element} The rendered HollowButton component.
 */
const HollowButton: React.FC<HollowButtonProps> = ({ width, height, borderRadius, onClick, children, fontSize, disabled=false, type = 'button' }) => {
      return (
        <button className="hollow-button" style={{width,height,borderRadius,fontSize}} disabled={disabled} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default HollowButton;