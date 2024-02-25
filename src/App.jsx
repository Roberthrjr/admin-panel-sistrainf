import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Conductores from "./views/Conductores";
import Vehiculos from "./views/Vehiculos";
import NotFound from "./views/NotFound";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conductores" element={<Conductores />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
