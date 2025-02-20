import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import HowitWorksPage from "./pages/HowitWorksPage";
import Affiliate from "./pages/Affiliate";
import Payouts from "./pages/Payouts";

const AppRoutes = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowitWorksPage />} />
            <Route path="/affiliate-program" element={<Affiliate />} />
            <Route path="/payouts" element={<Payouts />} />
        </Routes>
    );
};

export default AppRoutes;
