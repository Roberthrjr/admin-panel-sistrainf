import { Link } from "react-router-dom";
import useData from "../hooks/useAxios";
import TablaConductores from "../components/TablaConductores";

export default function Conductores() {

    const { data, loading, error, refetch } = useData(`${import.meta.env.VITE_ENDPOINT_BASE}/CarneConductor`);
    // console.log(`${import.meta.env.VITE_ENDPOINT_BASE}/CarneConductor`);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="overflow-x-auto">

            {/* Botón de agregar y campo de búsqueda */}
            <div className="items-center mb-4 mt-4">
                <input
                    type="text"
                    placeholder="Buscar conductor..."
                    className="ml-4 border-gray-300 border-2 rounded py-2 px-4"
                />
                <Link
                    to="/agregar-conductor"
                    className="ml-3 bg-blue-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    Agregar Conductor
                    <i className="ml-2 fa-solid fa-user-plus"></i>
                </Link>
            </div>

            {/* Tabla de conductores */}
            <TablaConductores data={data} />
        </div>
    )
}