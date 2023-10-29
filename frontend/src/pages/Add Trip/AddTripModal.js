import React, { useState } from 'react'

import './index.css';

import ProgressBar from '../../components/feature/Add Trip/ProgressBar';
import Page1 from './Page 1/Page1';
import Page2 from './Page 2/Page2';

import { motion } from 'framer-motion';


export default function AddTripModal(props) {
    const [page1Input, setPage1Input] = useState({
        location: '',
        description: '',
    });

    const [page2Input, setPage2Input] = useState([]);

    const steps = [
        <Page1 inputs={page1Input} handler={setPage1Input} />,
        <Page2 inputs={page2Input} handler={setPage2Input} />,
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const CurrentStepComponent = steps[currentStep];

    return (
        <div className='fixed top-0 left-0 w-full h-full blur-bg'>
            <div className='absolute top-1/2 left-1/2 bg-white border rounded-xl flex flex-col flex-start justify-between centered-modal'>
                <motion.div className="flex-1 mx-5 mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {CurrentStepComponent}
                </motion.div>
                <div className="mt-6">
                    <div className='flex flex-row justify-between mx-5'>
                        <button className='mb-4 px-2 py-1 text-sm' onClick={handlePrevious}>Back</button>
                        <div>
                            <button className='mb-4 px-2 py-1 border shadow-sm border-gray-300 rounded-md' onClick={props.onClose}>Close</button>
                            <button className='bg-orangeaccent text-white w-20 ml-2 mb-4 px-3 py-1 shadow-sm rounded-md ' onClick={handleNext}>
                                {currentStep === steps.length - 1 ?
                                    <>Submit</>
                                    :
                                    <>Next</>
                                }
                            </button>
                        </div>
                    </div>
                    <ProgressBar percentage={currentStep === 0 ? 0 : (currentStep / steps.length).toFixed(2) * 100} />
                </div>
            </div>
        </div>
    )
}
