import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Conductores from "./views/Conductores";
import AgregarConductor from "./views/AgregarConductor";
import NotFound from "./components/NotFound";
import EditarConductor from "./views/EditarConductor";
import Conductor from "./views/Conductor";
import Consultas from "./views/Consultas";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conductores" element={<Conductores />} />
        <Route path="/agregar-conductor" element={<AgregarConductor />} />
        <Route path="/conductores/:id" element={<EditarConductor />} />
        <Route path="/conductores/:id/ver" element={<Conductor />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route
          path="*"
          element={
            <NotFound mensaje={"La página que buscas no se encuentra."} />
          }
        />
      </Routes>
    </Router>
  );
}
