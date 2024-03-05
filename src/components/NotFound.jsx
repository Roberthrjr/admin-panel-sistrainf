import { Link } from 'react-router-dom'

export default function NotFound({ mensaje }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Error 404</h2>
                <p className="text-lg text-gray-600 mb-6">
                    ¡Parece que te has perdido en la ciudad!
                </p>
                <img
                    src="./src/assets/transito.png"
                    alt="Carro de policía"
                    className="mx-auto h-40"
                />
                <p className="text-lg text-gray-600 mt-6">
                    {mensaje}
                </p>
                <Link
                    to="/"
                    className="block bg-blue-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-8"
                >
                    Regresar al inicio <i className='ml-1 fa-solid fa-house'></i>
                </Link>
            </div>
        </div>
    )
}
