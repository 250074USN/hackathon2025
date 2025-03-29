import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FinnSenter from "../pages/FinnSenter";
import Tjenester from "../pages/Tjenester";
import Timeplan from "../pages/Timeplan";
import BliMedlem from "../pages/BliMedlem";
import Kontakt from "../pages/KontaktOss";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/finn-senter" element={<FinnSenter />} />
            <Route path="/tjenester" element={<Tjenester />} />
            <Route path="/timeplan" element={<Timeplan />} />
            <Route path="/bli-medlem" element={<BliMedlem />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<HomePage />} /> {/* Fallback route */}
        </Routes>
    );
}

export default Routing;
