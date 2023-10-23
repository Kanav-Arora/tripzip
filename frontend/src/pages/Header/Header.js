import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import { ImgWithFallback } from "../../assets/utilities";
import InputDialog from "./InputDialog";
import NavBar from "../NavBar/NavBar";
import DateRangeSelector from "../../components/DateRangeSelector/DateRangeSelector"

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
    return (
        <div className="relative">
            <ImgWithFallback
                className="w-full max-h-50 object-cover"
                style={{ maxHeight: isHome ? "450px" : "250px" }}
                src="/images/src/landing_main.webp"
                fallback="/images/fallback/landing_main.jpg"
                alt="Nature Image"
            />
            <NavBar />
            <div className="relative overlay-text top-1/2 left-1/2">
                <p className="text-white text-center text-3xl mobile:text-xl">
                    Embark on Adventures Together
                </p>
            </div>
            {isHome && <InputDialog togglePicker={handleDateClick} date={range} />}
            {showDateRangePicker &&
                <div className="absolute left-1/2 transform -translate-x-1/2 text-white z-80">
                    <DateRangeSelector range={range} setRange={setRange} />
                </div>
            }
        </div>
    );
}
