import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Cross } from '../../../assets/ext-icon';
import { IconProvider } from '../IconProvider/IconProvider';
import { Theme } from '../Theme/theme';

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
    border-radius: ${Theme.border.radius['2xl']};
    width: ${(props) =>
        props.width === 'fit' ? 'fit-content' : props.width || '400px'};
    height: ${(props) =>
        props.height === 'fit' ? 'fit-content' : props.height || 'auto'};
    max-width: ${(props) => (props.width === 'fit' ? '100%' : 'none')};
    max-height: ${(props) => (props.height === 'fit' ? '100%' : 'none')};
`;

const ModalHeader = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid #d8d8d8;
`;

const ModalBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
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
    margin-bottom: 8px;
`;

const Modal = ({
    children,
    isVisible,
    width,
    height,
    onClose,
    showDialogCross,
    scroll = false,
}) => {
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
                    <ModalContent width={width} height={height}>
                        {showDialogCross && (
                            <ModalHeader>
                                <CloseButton onClick={onClose}>
                                    <IconProvider size={1.25} Icon={Cross} />
                                </CloseButton>
                            </ModalHeader>
                        )}
                        <ModalBody scroll={scroll}>{children}</ModalBody>
                    </ModalContent>
                </ModalWrapper>
            )}
        </>
    );
};

export default Modal;
