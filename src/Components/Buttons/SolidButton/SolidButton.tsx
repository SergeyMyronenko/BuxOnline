import React from 'react';
import './SolidButton.scss';
import { FormEvent } from 'react';
interface SolidButtonProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    fontSize?: string;
    onClick?: (event?:any) => void;
    children?: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit';
}

// attention, I changed the wsay you pass the styles,
//now you past them the same way you write css
//for example: 
{/* <SolidButton type="submit" width='100%' borderRadius='20px'> Завантажити </SolidButton> */}
//width='value', value is the same value you write in css
//the same way you pass the height, borderRadius, fontSize

/**
 * SolidButton component renders a customizable button with solid styling.
 *
 * @param {object} props - The properties object.
 * @param {string | number} props.width - The width of the button.
 * @param {string | number} props.height - The height of the button.
 * @param {string | number} props.borderRadius - The border radius of the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick - The click event handler for the button.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string | number} [props.fontSize] - The font size of the button text.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {string} [props.type='button'] - The type attribute of the button.
 *
 * @returns {JSX.Element} The rendered button component.
 */
const SolidButton: React.FC<SolidButtonProps> = ({ width, height, borderRadius, onClick, children, fontSize, disabled=false, type = 'button' }) => {
      return (
        <button className="solid-button" style={{width,height,borderRadius,fontSize}} disabled={disabled} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default SolidButton;