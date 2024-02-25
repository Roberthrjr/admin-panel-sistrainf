import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onAdd }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-2xl font-bold">SISTRAINF</Link>
                        <div className="ml-6 md:hidden">
                            <button onClick={toggleMenu} className="block text-white hover:text-gray-300 focus:outline-none">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <a href="/" className="text-white mr-6 hover:text-gray-300">Conductores</a>
                        <a href="/" className="text-white mr-6 hover:text-gray-300">Vehículos</a>
                    </div>
                    <div className="hidden md:flex">
                        <button onClick={onAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className="block text-white hover:text-gray-300">Conductores</a>
                    <a href="/" className="block text-white hover:text-gray-300">Vehículos</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
