import React from 'react';
import './SolidButton.scss';

interface SolidButtonProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    fontSize?: number;
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: false;
}

const SolidButton: React.FC<SolidButtonProps> = ({ width, height, borderRadius, onClick,children,fontSize,disabled }) => {
    //these styles override the default styles,
    //specified in the HollowButton.scss file
    const SolidButtonStyle = {
        'width':`${width}px`,
        'height': `${height}px`,
        'borderRadius': `${borderRadius}px`,
        'fontSize': `${fontSize}px`
    };

    return (
        <button className="solid-button" style={SolidButtonStyle} disabled={disabled}>
            {children}
        </button>
    );
};

export default SolidButton;