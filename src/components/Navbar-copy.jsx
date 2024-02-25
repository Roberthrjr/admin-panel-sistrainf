import { Link } from "react-router-dom"

export default function Navbar({ onAdd }) {
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-2xl font-bold">SISTRAINF</Link>
                        <div className="ml-6 flex">
                            <a href="/" className="text-white mr-6 hover:text-gray-300">Conductores</a>
                            <a href="/" className="text-white mr-6 hover:text-gray-300">Vehículos</a>
                        </div>
                    </div>
                    <div>
                        <button onClick={onAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
