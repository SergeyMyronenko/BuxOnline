import React from 'react';
import './HollowButton.scss';

interface HollowButtonProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    fontSize?: number;
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: false;
}
const HollowButton: React.FC<HollowButtonProps> = ({ width, height, borderRadius, onClick,children,fontSize,disabled }) => {
    //these styles override the default styles,
    //specified in the HollowButton.scss file
    const HollowButtonStyle = {
        'width':`${width}px`,
        'height': `${height}px`,
        'borderRadius': `${borderRadius}px`,
        'fontSize': `${fontSize}px`
    };

    return (
        <button className="hollow-button" style={HollowButtonStyle} disabled={disabled}>
            {children}
        </button>
    );
};

export default HollowButton;