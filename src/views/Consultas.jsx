import { useState } from "react";
import { Link } from "react-router-dom";

export default function Consultas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  // Función para manejar la búsqueda
  const handleSearch = () => {
    // Realizar la lógica de búsqueda aquí, por ejemplo, hacer una solicitud al servidor
    // Aquí puedes poner la lógica de búsqueda según el DNI o el código de carné
    // Supongamos que tienes una función `buscarConductor` que realiza la búsqueda
    const conductorEncontrado = buscarConductor(searchTerm);
    setResult(conductorEncontrado);
  };

  // Función simulada para buscar conductor
  const buscarConductor = (term) => {
    // Aquí simulas la búsqueda basada en el término (DNI o código de carné)
    // Por ejemplo, puedes buscar en una lista de conductores o hacer una solicitud al servidor
    // Devuelve los datos del conductor encontrado o null si no se encontró
    // Esto es solo un ejemplo simulado, debes adaptarlo a tu lógica de backend
    const conductorEncontrado = conductores.find(
      (conductor) => conductor.dni === term || conductor.codigo_carne === term
    );
    return conductorEncontrado;
  };

  // Datos simulados de conductores
  const conductores = [
    {
      nombre: "Juan",
      apellido: "Perez",
      dni: "12345678",
      codigo_carne: "CARN-123",
      // Otros datos del conductor...
    },
    // Otros conductores...
  ];
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
          {result && (
            <div className="border-t border-gray-200 p-4">
              <p>
                <span className="font-bold">Nombre:</span> {result.nombre}{" "}
                {result.apellido}
              </p>
              <p>
                <span className="font-bold">DNI:</span> {result.dni}
              </p>
              <p>
                <span className="font-bold">Código de Carné:</span>{" "}
                {result.codigo_carne}
              </p>
              {/* Otros datos del conductor... */}
            </div>
          )}
          {!result && searchTerm && (
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
