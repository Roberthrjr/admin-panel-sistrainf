import FilaConductores from "./FilaConductores"

export default function TablaConductores({ data }) {
    return (
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
                        Código Carné
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        Fecha Emisión
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        Fecha Caducidad
                    </th>
                    <th className="px-6 py-3 bg-gray-100">Opciones</th>
                </tr>
            </thead>

            <FilaConductores data={data} />

        </table >
    )
}
