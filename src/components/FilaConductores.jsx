import { Link } from "react-router-dom"

export default function FilaConductores({ data }) {
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {data.map(({ id_conductor, nombre_conductor, apellido_conductor, dni_conductor, codigo_carne, fecha_emision, fecha_caducidad, foto_conductor }) => (
                <tr key={id_conductor}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                        <img
                            src={foto_conductor}
                            alt="Foto del conductor"
                            className="h-12 w-12 rounded-full"
                        />
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap" > {nombre_conductor} </td >
                    <td className="px-6 py-4 whitespace-no-wrap">{apellido_conductor}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{dni_conductor}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{codigo_carne}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{fecha_emision}</td>
                    <td className="px-6 py-4 whitespace-no-wrap">{fecha_caducidad}</td>
                    <td className="px-6 py-4 text-center whitespace-no-wrap">
                        <Link className="bg-yellow-500 text-white hover:bg-yellow-600 px-2 py-1 rounded-full">
                            <i className="fa-solid fa-pen"></i>
                        </Link>
                        <Link className="bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded-full">
                            <i className="fa-solid fa-trash"></i>
                        </Link>
                        <Link className="bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 rounded-full">
                            <i className="fa-solid fa-eye"></i>
                        </Link>
                    </td>
                </tr >
            ))}
        </tbody >

    );
}
