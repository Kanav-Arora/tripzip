import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Cross } from '../../../assets/ext-icon'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: ${(props) => props.width || '400px'};
  height: ${(props) => props.height || 'auto'};
  min-width: 500px;
  min-height: 300px; 
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  overflow-y: ${(props) => (props.scroll ? 'auto' : 'hidden')};
  
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
`;

const CloseButton = styled.button`
  cursor: pointer;
  color: black;
  background: none;
  border: none;
  padding: 0;
`;

const Modal = ({ children, isVisible, width, height, onClose, scroll = false, showDialogCross = true }) => {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    const handleOverlayClick = (e) => {
        if (isVisible && e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isVisible && (
                <ModalWrapper onClick={handleOverlayClick}>
                    <ModalContent width={width} height={height} scroll={scroll}>
                        {showDialogCross && <CloseButton onClick={onClose}><Cross size={5} /></CloseButton>}
                        {children}
                    </ModalContent>
                </ModalWrapper>
            )}
        </>
    );
};

export default Modal;
