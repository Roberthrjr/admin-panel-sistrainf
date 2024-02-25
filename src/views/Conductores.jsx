import { Link } from "react-router-dom";

const conductores = [
    {
        id: 1,
        foto_conductor: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1228.jpg",
        nombre_conductor: "Juan",
        apellido_conductor: "Pérez",
        dni_conductor: "12345678",
        condicion_conductor: "Activo",
        codigo_carné: "C123",
        modalidad_servicio: "Particular",
        numero_licencia: "L123",
        fecha_emision: "2023-01-01",
        fecha_caducidad: "2025-01-01",
        numero_expediente: "E123",
    },
];

export default function Conductores() {
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
                    Agregar Conductor <i className="fa-solid fa-user-plus"></i>
                </Link>
            </div>

            {/* Tabla de conductores */}
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Foto
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Nombre
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Apellido
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            DNI
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Condición
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Código Carné
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Modalidad Servicio
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Número Licencia
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Fecha Emisión
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Fecha Caducidad
                        </th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Número Expediente
                        </th>
                        <th className="px-6 py-3 bg-gray-100">Opciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {conductores.map((conductor) => (
                        <tr key={conductor.id}>
                            <td className="px-6 py-4 whitespace-no-wrap">
                                <img
                                    src={conductor.foto_conductor}
                                    alt="Foto del conductor"
                                    className="h-12 w-12 rounded-full"
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.nombre_conductor}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.apellido_conductor}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.dni_conductor}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.condicion_conductor}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.codigo_carné}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.modalidad_servicio}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.numero_licencia}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.fecha_emision}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.fecha_caducidad}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{conductor.numero_expediente}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                                <Link className="bg-yellow-500 text-white hover:bg-yellow-600 px-2 py-1 rounded-full">
                                    <i className="fa-solid fa-pen"></i>
                                </Link>
                                <Link className="bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded-full">
                                    <i className="fa-solid fa-trash"></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}