import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ImgWithFallback } from '../../assets/utilities';
import { motion } from 'framer-motion';
import {
    ImageContainer,
    TextContainer,
    StyledText,
} from './ImageWithTextStyle';

const ImageWithText = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const textVariants = [
        'Discover Together',
        'Buddy Up!',
        'Embark on Adventures Together',
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTextIndex((prevIndex) =>
                prevIndex === textVariants.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentTextIndex, textVariants.length]);

    return (
        <ImageContainer isHome={isHome}>
            <ImgWithFallback
                className="max-h-50 object-cover w-full"
                style={{ maxHeight: isHome ? '375px' : '250px' }}
                src="/images/src/landing_main.webp"
                fallback="/images/fallback/landing_main.jpg"
                alt="Nature Image"
            />
            {isHome && (
                <TextContainer>
                    <StyledText
                        key={textVariants[currentTextIndex]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-white text-center text-3xl mobile:text-xl"
                    >
                        {textVariants[currentTextIndex]}
                    </StyledText>
                </TextContainer>
            )}
        </ImageContainer>
    );
};

export default ImageWithText;
