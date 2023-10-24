import React from 'react';

import { motion } from 'framer-motion';

const ProgressBar = ({ percentage }) => {
    return (
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
