import React from 'react';
import './SolidButton.scss';

interface SolidButtonProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    fontSize?: number;
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'submit';
}

const SolidButton: React.FC<SolidButtonProps> = ({ width, height, borderRadius, onClick, children, fontSize, disabled=false, type = 'button' }) => {
    //these styles override the default styles,
    //specified in the SolidButton.scss file
    const SolidButtonStyle = {
        'width': `${width}px`,
        'height': `${height}px`,
        'borderRadius': `${borderRadius}px`,
        'fontSize': `${fontSize}px`
    };

    return (
        <button className="solid-button" style={SolidButtonStyle} disabled={disabled} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default SolidButton;