import React from 'react';
import './HollowButton.scss';

interface HollowButtonProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    fontSize?: number;
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit';
}
const HollowButton: React.FC<HollowButtonProps> = ({ width, height, borderRadius, onClick,children,fontSize,disabled=false,type='button' }) => {
    //these styles override the default styles,
    //specified in the HollowButton.scss file
    const HollowButtonStyle = {
        'width':`${width}px`,
        'height': `${height}px`,
        'borderRadius': `${borderRadius}px`,
        'fontSize': `${fontSize}px`
    };
    if(width===100){HollowButtonStyle.width='100%'}

    return (
        <button className="hollow-button" style={HollowButtonStyle} disabled={disabled} type={type}>
            {children}
        </button>
    );
};

export default HollowButton;