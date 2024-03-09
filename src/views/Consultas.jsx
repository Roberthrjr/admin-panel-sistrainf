import { useState } from "react";
import { Link } from "react-router-dom";
import useData from "../hooks/useAxios";

export default function Consultas() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: result,
    loading,
    error,
    refetch,
  } = useData(
    `${import.meta.env.VITE_ENDPOINT_BASE}/CarneConductor/${searchTerm}`
  );

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Consulta de Conductores
          </h2>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Ingrese DNI o código de carné"
              className="border-gray-300 border-2 rounded py-2 px-4 w-full mr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Buscar
            </button>
          </div>
          {loading && <p>Cargando...</p>}
          {error && <p>Error: {error.message}</p>}
          {result && (
            <div
              className={`border-t border-gray-200 p-4 ${
                result.estado_carne === "Habilitado"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              <p>
                <span className="font-bold">Nombre:</span>{" "}
                {result.nombre_conductor} {result.apellido_conductor}
              </p>
              <p>
                <span className="font-bold">DNI:</span> {result.dni_conductor}
              </p>
              <p>
                <span className="font-bold">Código de Carné:</span>{" "}
                {result.codigo_carne}
              </p>
              <p>
                <span className="font-bold">Estado:</span> {result.estado_carne}
              </p>
              {/* Otros datos del conductor... */}
            </div>
          )}
          {!result && searchTerm && !loading && (
            <p className="text-red-600">
              No se encontró ningún conductor con el DNI o código de carné
              ingresado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
