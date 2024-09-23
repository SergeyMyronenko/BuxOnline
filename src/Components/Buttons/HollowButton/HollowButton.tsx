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

const HollowButton: React.FC<HollowButtonProps> = ({ width, height, borderRadius, onClick, children, fontSize, disabled=false, type = 'button' }) => {
      return (
        <button className="hollow-button" style={{width,height,borderRadius,fontSize}} disabled={disabled} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default HollowButton;