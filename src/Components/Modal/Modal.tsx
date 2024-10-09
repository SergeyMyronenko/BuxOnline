import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<React.ReactNode>(null);

    const openModal = (modalContent: React.ReactNode) => {
         setContent(modalContent);
         setIsOpen(true);
    
       
    };

    const closeModal = () => {
        setIsOpen(false);
        setContent(null);
    };
    
    const Modal = () => {
        if (!isOpen) return null;

        return ReactDOM.createPortal(
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content">
                    {content}
                    <button onClick={closeModal}>X</button>
                </div>

            </div>,
            document.getElementById('modal') as HTMLElement
        );
    };
    
    return {
        openModal,
        closeModal,
        Modal,
    };
};
