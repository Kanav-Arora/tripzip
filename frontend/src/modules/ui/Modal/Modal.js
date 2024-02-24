import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
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
    background: ${(props) =>
        props.hasBackdrop === true ? 'rgba(0, 0, 0, 0.2)' : ''};
    z-index: 999;
`;

const AnimatedModalContent = styled(motion.div)`
    background: white;
    border-radius: 12px;
    box-shadow: ${Theme.boxShadow.xl};
    border-radius: ${Theme.border.radius['2xl']};
    width: ${(props) =>
        props.width === 'fit' ? 'fit-content' : props.width || '400px'};
    height: ${(props) =>
        props.height === 'fit' ? 'fit-content' : props.height || 'auto'};
    max-width: ${(props) => (props.width === 'fit' ? '100%' : 'none')};
    max-height: ${(props) => (props.height === 'fit' ? '100%' : 'none')};
`;

const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${Theme.spacing(3)};
    border-bottom: 1px solid #d8d8d8;
`;

const ModalBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: ${Theme.spacing(3)};
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
    color: ${Theme.color.gray60};
    background: none;
    border: none;
    margin-bottom: 8px;
`;

const StyledModalTitle = styled.div`
    font-weight: ${Theme.font.weight.semibold};
`;

const Modal = ({
    children,
    isVisible,
    width,
    height,
    onClose,
    showDialogCross,
    modalTitle,
    hasBackdrop = true,
    animate = false,
    scroll = false,
}) => {
    const controls = useAnimation();

    useEffect(() => {
        if (animate && isVisible) {
            controls.start({ scale: 1, opacity: 1 });
        }
    }, [animate, isVisible, controls]);

    const handleOverlayClick = (e) => {
        if (isVisible && e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isVisible && (
                <ModalWrapper
                    onClick={handleOverlayClick}
                    hasBackdrop={hasBackdrop}
                >
                    {animate ? (
                        <AnimatedModalContent
                            width={width}
                            height={height}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={controls}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            {showDialogCross && (
                                <ModalHeader>
                                    <StyledModalTitle>
                                        {modalTitle}
                                    </StyledModalTitle>
                                    <CloseButton onClick={onClose}>
                                        <IconProvider
                                            size={1.25}
                                            Icon={Cross}
                                        />
                                    </CloseButton>
                                </ModalHeader>
                            )}
                            <ModalBody scroll={scroll}>{children}</ModalBody>
                        </AnimatedModalContent>
                    ) : (
                        <AnimatedModalContent width={width} height={height}>
                            {showDialogCross && (
                                <ModalHeader>
                                    <StyledModalTitle>
                                        {modalTitle}
                                    </StyledModalTitle>
                                    <CloseButton onClick={onClose}>
                                        <IconProvider
                                            size={1.25}
                                            Icon={Cross}
                                        />
                                    </CloseButton>
                                </ModalHeader>
                            )}
                            <ModalBody scroll={scroll}>{children}</ModalBody>
                        </AnimatedModalContent>
                    )}
                </ModalWrapper>
            )}
        </>
    );
};

export default Modal;
