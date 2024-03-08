import { useState } from "react";
import { Link } from "react-router-dom";
import useData from "../hooks/useAxios";
import TablaConductores from "../components/TablaConductores";
import Cargando from "../components/Cargando";
import NotFound from "../components/NotFound";

export default function Conductores() {
  const { data, loading, error } = useData(
    `${import.meta.env.VITE_ENDPOINT_BASE}/CarneConductor`
  );

  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <Cargando />;
  if (error)
    return (
      <NotFound
        mensaje={
          "Parece que no podemos recolectar los datos del servidor, espere un momento y vuelva a ingresar"
        }
      />
    );

  const filteredData = data.filter(
    (conductor) =>
      conductor.nombre_conductor
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      conductor.apellido_conductor
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      conductor.dni_conductor.toString().includes(searchTerm) ||
      conductor.codigo_carne.toString().includes(searchTerm)
  );

  return (
    <div className="overflow-x-auto">
      {/* Botón de agregar y campo de búsqueda */}
      <div className=" bg-gray-100 rounded-lg shadow-lg p-4 md:flex md:justify-between md:items-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Conductores
          <i className="ml-2 fa-solid fa-users"></i>
        </h2>
        {/* Botón de agregar conductor */}
        <Link
          to="/agregar-conductor"
          className=" bg-blue-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-3 block md:inline-block"
        >
          Agregar Conductor
          <i className="ml-2 fa-solid fa-user-plus"></i>
        </Link>
        {/* Campo de búsqueda */}
        <input
          type="text"
          placeholder="Buscar conductor..."
          className=" border-gray-300 border-2 rounded py-2 px-4 mb-4 md:ml-4 md:mb-0 block w-full md:w-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabla de conductores */}
      <TablaConductores data={filteredData} />
    </div>
  );
}
