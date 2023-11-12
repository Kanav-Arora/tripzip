import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { ImgWithFallback } from "../../assets/utilities";
import { motion } from "framer-motion";
import InputDialog from "./InputDialog";
import NavBar from "../NavBar/NavBar";
import DateRangeSelector from "../../components/ui/DateRangeSelector/DateRangeSelector"

<style>
    @import
    url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@600&display=swap');
</style>;

export default function Header() {
    const [showDateRangePicker, toggleDateRangePicker] = useState(false);
    const handleDateClick = () => {
        toggleDateRangePicker(!showDateRangePicker);
    };
    const defaultSelected = {
        from: null,
        to: null
    };
    const [range, setRange] = useState(defaultSelected);
    const location = useLocation();
    const isHome = location.pathname === "/";
    const textVariants = [
        "Discover Together",
        "Buddy Up!",
        "Embark on Adventures Together"
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
        <div className="relative">
            <ImgWithFallback
                className="w-full max-h-50 object-cover"
                style={{ maxHeight: isHome ? "375px" : "250px" }}
                src="/images/src/landing_main.webp"
                fallback="/images/fallback/landing_main.jpg"
                alt="Nature Image"
            />
            <NavBar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative overlay-text top-1/2 left-1/2"
            >
                <motion.p
                    key={textVariants[currentTextIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white text-center text-3xl mobile:text-xl"
                >
                    {textVariants[currentTextIndex]}
                </motion.p>
            </motion.div>

            {isHome && <InputDialog togglePicker={handleDateClick} date={range} />}
            {showDateRangePicker &&
                <div className="absolute text-white z-80 right-1/4">
                    <DateRangeSelector range={range} setRange={setRange} />
                </div>
            }
        </div>
    );
}
