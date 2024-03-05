import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Conductores from "./views/Conductores";
import AgregarConductor from "./views/AgregarConductor";
import Vehiculos from "./views/Vehiculos";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conductores" element={<Conductores />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/agregar-conductor" element={<AgregarConductor />} />
        <Route path="*" element={<NotFound mensaje={'La página que buscas no se encuentra.'} />} />
      </Routes>
    </Router>
  )
}
