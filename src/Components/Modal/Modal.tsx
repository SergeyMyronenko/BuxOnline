import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

/**
 * Custom hook to manage modal state and rendering.
 *
 * @returns {object} An object containing methods to open and close the modal, 
 * and the Modal component itself.
 *
 * @property {function} openModal - Function to open the modal with specified content.
 * @property {function} closeModal - Function to close the modal.
 * @property {JSX.Element} Modal - The Modal component that renders the modal content.
 *
 * @example
 * const { openModal, closeModal, Modal } = useModal();
 *
 * To open the modal with content
 * openModal(<div>Your content here</div>);
 *
 *  To close the modal
 * closeModal();
 *
 * To render the Modal component
 * <Modal />
 */
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
