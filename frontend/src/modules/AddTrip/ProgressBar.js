import React from 'react';

import { motion } from 'framer-motion';

const ProgressBar = ({ percentage, isLoading }) => {
    return (
        isLoading === true
            ?
            <div className="relative h-1.5 rounded-full bg-orangeaccent-opacity-25">
                <motion.div
                    className="absolute rounded-full h-full bg-orangeaccent"
                    style={{ width: '20%' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
            </div>
            :
            <div
                className="relative h-1.5 rounded-full"
            >
                <motion.div
                    className="absolute rounded-bl-xl inset-y-0 left-0 bg-orangeaccent"
                    style={{ width: `${percentage}%` }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5 }}
                />
                <motion.div
                    className="absolute rounded-br-xl inset-y-0 right-0 bg-orangeaccent opacity-25"
                    style={{ width: `${100 - percentage}%` }}
                    initial={{ width: '100%' }}
                    animate={{ width: `${100 - percentage}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
    );
}

export default ProgressBar;
