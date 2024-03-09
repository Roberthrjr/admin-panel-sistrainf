import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oficina de Tránsito
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Bienvenido a la Oficina de Tránsito. Aquí puedes gestionar conductores
          y vehículos.
        </p>
        <div className="mt-4">
          <Link
            to="/conductores"
            className="bg-blue-950 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded block text-center"
          >
            Conductores <i className="ml-1 fa-solid fa-user"></i>
          </Link>
        </div>
        <div className="mt-4">
          <Link
            to="/consultas"
            className="bg-blue-950 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded block text-center"
          >
            Consultar Conductores y Vehículos{" "}
            <i className="ml-1 fa-solid fa-magnifying-glass-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
