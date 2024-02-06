import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Heading from '../../../modules/ui/Heading';
import { ShareMini, HeartIcon, PersonMini } from '../../../assets/ext-icon';
import { motion } from 'framer-motion';
import { backendOrigin, frontendOrigin } from '../../../frontend.config';
import Modal from '../../../modules/ui/Modal/Modal';

import ShareModal from '../../../modules/Trip/ShareModal/ShareModal';
import PeopleGoingModal from '../../../modules/Trip/PeopleGoingModal/PeopleGoingModal';

import axios from 'axios';
import { useAuth } from '../../../context/Auth/useAuth';
import { useAuthModal } from '../../../modules/ui/LoginSignupModal/hooks/useAuthModal';
import { IconProvider } from '../../../modules/ui/IconProvider/IconProvider';
import {
    PeopleModalText,
    HeaderButtons,
    StyledWrapper,
    SubHeader,
    SubHeaderSectionA,
    SubHeaderSectionB,
} from './TripHeaderStyles';
import { useIsMobile } from '../../../modules/ui/hooks/useIsMobile';

const popAnimation = {
    pop: { scale: [1, 1.4, 1], transition: { duration: 0.3 } },
    default: { scale: 1 },
};

export default function TripHeader({
    title,
    city,
    state,
    maxSize,
    isInterested,
    peopleGoing,
}) {
    const { tripID } = useParams();
    const instance = axios.create({
        withCredentials: true,
        baseURL: backendOrigin,
    });
    const location = useLocation();
    const { authStateValue } = useAuth();
    const { openAuthModal } = useAuthModal();

    const authRouteHandler = () => {
        if (authStateValue.isAuthenticated === false) {
            openAuthModal({ visible: true, type: 'LOGIN' });
            return false;
        }
        return true;
    };

    const currentUrl = `${frontendOrigin}${location.pathname}${location.search}`;
    const [interested, setInterested] = useState(isInterested);
    const interestedHandler = async () => {
        if (!authRouteHandler()) {
            return;
        }
        try {
            setInterested((prevInterested) => !prevInterested);
            const response = await instance.patch(
                `/trips/interested/${tripID}`
            );
            if (response.status === 201) {
                console.log('interest toggled');
                return;
            } else {
                setInterested((prevInterested) => !prevInterested);
                console.error('Trip interest toggle failed:', response);
            }
        } catch (error) {
            setInterested((prevInterested) => !prevInterested);
            console.error('Error toggling trip interest:', error.message);
        }
    };

    const [PeopleGoingModalState, togglePeopleGoingModal] = useState(false);

    const openPeopleGoingModal = () => {
        togglePeopleGoingModal(true);
    };

    const closePeopleGoingModal = () => {
        togglePeopleGoingModal(false);
    };

    const [ShareModalState, toggleShareModal] = useState(false);

    const openShareModal = () => {
        toggleShareModal(true);
    };

    const closeShareModal = () => {
        toggleShareModal(false);
    };

    const currentSize = peopleGoing.length;
    const isMobile = useIsMobile();
    return (
        <>
            <StyledWrapper>
                <Heading text={title} />
                <SubHeader>
                    <SubHeaderSectionA>
                        <div>{`${city}, ${state}`}</div>·
                        <PeopleModalText
                            onClick={
                                currentSize > 0 ? openPeopleGoingModal : null
                            }
                            currentSize={currentSize}
                        >
                            <IconProvider Icon={PersonMini} size={1} />
                            {isMobile
                                ? 'Going'
                                : `${currentSize}
                                ${maxSize !== -1 ? ` / ${maxSize}` : ''} Going`}
                        </PeopleModalText>
                    </SubHeaderSectionA>

                    <SubHeaderSectionB>
                        <HeaderButtons onClick={openShareModal}>
                            <IconProvider Icon={ShareMini} size={1} />
                            {!isMobile && 'Share'}
                        </HeaderButtons>
                        <HeaderButtons onClick={interestedHandler}>
                            <motion.div
                                variants={popAnimation}
                                animate={interested ? 'pop' : 'default'}
                            >
                                <IconProvider
                                    Icon={HeartIcon}
                                    size={1}
                                    fill={
                                        interested === true ? '#ef4444' : 'none'
                                    }
                                    stroke={interested === true ? 0.25 : 1}
                                />
                            </motion.div>
                            {!isMobile && 'Interested'}
                        </HeaderButtons>
                    </SubHeaderSectionB>
                </SubHeader>
            </StyledWrapper>

            {currentSize >= 0 ? (
                <Modal
                    isVisible={PeopleGoingModalState}
                    width="30%"
                    height="50%"
                    onClose={closePeopleGoingModal}
                    scroll={true}
                    showDialogCross={true}
                >
                    <PeopleGoingModal peopleGoing={peopleGoing} />
                </Modal>
            ) : (
                <></>
            )}
            <Modal
                isVisible={ShareModalState}
                width="40%"
                height="fit"
                onClose={closeShareModal}
                scroll={true}
                showDialogCross={true}
            >
                <ShareModal url={currentUrl} />
            </Modal>
        </>
    );
}
