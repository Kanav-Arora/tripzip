import React from "react";

import { useLocation } from "react-router-dom";

import InputDialog from "./InputDialog";
import NavBar from "../NavBar/NavBar";

import ImageWithText from "../../components/feature/Header/ImageWithText";

<style>
    @import
    url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@600&display=swap');
</style>;

export default function Header() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div className="relative">
            <NavBar />
            <ImageWithText />
            {isHome && <InputDialog />}
        </div>
    );
}
