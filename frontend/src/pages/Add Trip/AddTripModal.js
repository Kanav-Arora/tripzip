import React, { useState } from 'react';

import './index.css';

import { motion } from 'framer-motion';
import axios from 'axios';

import ProgressBar from '../../modules/AddTrip/ProgressBar';
import Page1 from './Page 1/Page1';
import Page2 from './Page 2/Page2';
import { backendOrigin } from '../../frontend.config';
import { useAddTrip } from './useAddTrip';
import Modal from '../../modules/ui/Modal/Modal';

import { Container, ButtonBar, Wrapper } from './AddTripModalStyles';

export default function AddTripModal() {
    const {
        nextPage,
        prevPage,
        getAddTripState,
        isAddTripModalVisible,
        closeAddTripModal,
    } = useAddTrip();
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const steps = [<Page1 />, <Page2 />];
    const handleNext = () => {
        nextPage();
    };
    const handlePrevious = () => {
        prevPage();
    };

    const handleSubmit = async () => {
        setButtonsDisabled(true);
        const data = {
            startDate: new Date(),
            endDate: new Date(),
            description: getAddTripState.description,
            city: getAddTripState.location,
            state: getAddTripState.location,
            pincode: getAddTripState.location,
            itinerary: 'Something',
        };
        try {
            const result = await axios.post(backendOrigin + '/trips', data, {
                headers: { 'Content-Type': 'application/json' },
            });
            if (result.status === 201) {
                setButtonsDisabled(false);
                closeAddTripModal();
                console.log('Trip created');
            } else {
                console.error('Unexpected status code:', result.status);
            }
        } catch (error) {
            console.log('Unexpected error');
        }
    };

    const CurrentStepComponent =
        steps[
            getAddTripState.currentStep < steps.length
                ? getAddTripState.currentStep
                : steps.length - 1
        ];

    return (
        <Modal
            isVisible={isAddTripModalVisible}
            width="65%"
            height="75%"
            onClose={closeAddTripModal}
        >
            <Wrapper>
                <Container>
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {CurrentStepComponent}
                    </motion.div>
                    <ButtonBar>
                        <button
                            className="mb-4 px-2 py-1 text-sm"
                            onClick={handlePrevious}
                            disabled={buttonsDisabled}
                        >
                            Back
                        </button>
                        <div>
                            <button
                                className="mb-4 px-2 py-1 border shadow-sm border-gray-300 rounded-md"
                                onClick={closeAddTripModal}
                                disabled={buttonsDisabled}
                            >
                                Close
                            </button>
                            <button
                                className="bg-orangeaccent text-white w-20 ml-2 mb-4 px-3 py-1 shadow-sm rounded-md "
                                onClick={
                                    getAddTripState.currentStep ===
                                    steps.length - 1
                                        ? handleSubmit
                                        : handleNext
                                }
                                disabled={buttonsDisabled}
                            >
                                {getAddTripState.currentStep ===
                                steps.length - 1 ? (
                                    <>Submit</>
                                ) : (
                                    <>Next</>
                                )}
                            </button>
                        </div>
                    </ButtonBar>
                </Container>
            </Wrapper>
        </Modal>
    );
}
