import React from 'react';
import './SolidButton.scss';

interface SolidButtonProps {
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
{/* <SolidButton type="submit" width='100%' borderRadius='20px'> Завантажити </SolidButton> */}
//width='value', value is the same value you write in css
//the same way you pass the height, borderRadius, fontSize

const SolidButton: React.FC<SolidButtonProps> = ({ width, height, borderRadius, onClick, children, fontSize, disabled=false, type = 'button' }) => {
      return (
        <button className="solid-button" style={{width,height,borderRadius,fontSize}} disabled={disabled} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default SolidButton;