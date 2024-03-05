import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadFile from "../services/storageService";
import Cargando from "../components/Cargando";
import Swal from "sweetalert2";
import useData from "../hooks/useAxios";

let imagenConductor;

export default function AgregarConductor() {

    const [formData, setFormData] = useState({
        nombre_conductor: "",
        apellido_conductor: "",
        dni_conductor: 0,
        condicion_conductor: "",
        codigo_carne: "",
        modalidad_servicio: "",
        numero_licencia: "",
        fecha_emision: "",
        fecha_caducidad: "",
        numero_expediente: "",
        estado_carne: "",
        foto_conductor: ""
    });

    const { addData, loading, error } = useData(`${import.meta.env.VITE_ENDPOINT_BASE}/CarneConductor`);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        imagenConductor = e.target.files[0];
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            uploadFile(imagenConductor, "conductores")
            .then(response => {
                return addData({...formData, foto_conductor: response})
            })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Conductor agregado exitosamente',
                    showConfirmButton: true,
                });
            })
            .then(() => {
                navigate('/conductores');
            })
            .catch(error => {
                console.log(error);
            })
            // const file = e.target.foto_conductor.files[0];
            // const fileName = await uploadFile(file);
            // formData.foto_conductor = fileName;
            // await addData(formData);
            // Swal.fire({
            //     icon: 'success',
            //     title: 'Conductor agregado exitosamente',
            //     showConfirmButton: false,
            //     timer: 1500
            // });
            // navigate('/conductores');
        } catch (error) {
            console.log(error);
        }
    }

    // if (loading) return <Cargando />
    if (error) return <NotFound mensaje={'Parece que no podemos recolectar los datos del servidor, espere un momento y vuelva a ingresar'} />

    return (
        <div className="bg-gray-100 p-5">
            <div className=" mx-auto my-auto bg-white shadow-md rounded-lg overflow-hidden">
                <form onSubmit={handleSubmit} className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <h2 className="text-xl font-semibold mb-4 col-span-full">
                        Agregar Nuevo Conductor
                        <i className="ml-2 fa-solid fa-user-plus"></i>
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre_conductor">
                            Nombres:
                        </label>
                        <input
                            type="text"
                            id="nombre_conductor"
                            name="nombre_conductor"
                            value={formData.nombre_conductor}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            placeholder="Nombre del conductor"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido_conductor">
                            Apellidos:
                        </label>
                        <input
                            type="text"
                            id="apellido_conductor"
                            name="apellido_conductor"
                            value={formData.apellido_conductor}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            placeholder="Apellido del conductor"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni_conductor">
                            DNI:
                        </label>
                        <input
                            type="text"
                            id="dni_conductor"
                            name="dni_conductor"
                            value={formData.dni_conductor}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            placeholder="Número de DNI"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="condicion_conductor">
                            Condición:
                        </label>
                        <input
                            type="text"
                            id="condicion_conductor"
                            name="condicion_conductor"
                            value={formData.condicion_conductor}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            placeholder="Condición del conductor"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codigo_carne">
                            Código Carné:
                        </label>
                        <input
                            type="text"
                            id="codigo_carne"
                            name="codigo_carne"
                            value={formData.codigo_carne}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            placeholder="Código del carné"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modalidad_servicio">
                            Modalidad Servicio:
                        </label>
                        <input
                            type="text"
                            id="modalidad_servicio"
                            name="modalidad_servicio"
                            value={formData.modalidad_servicio}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            placeholder="Modalidad del servicio"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numero_licencia">
                            Número de Licencia:
                        </label>
                        <input
                            type="text"
                            id="numero_licencia"
                            name="numero_licencia"
                            value={formData.numero_licencia}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            placeholder="Número de licencia"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha_emision">
                            Fecha de Emisión:
                        </label>
                        <input
                            type="date"
                            id="fecha_emision"
                            name="fecha_emision"
                            value={formData.fecha_emision}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha_caducidad">
                            Fecha de Caducidad:
                        </label>
                        <input
                            type="date"
                            id="fecha_caducidad"
                            name="fecha_caducidad"
                            value={formData.fecha_caducidad}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numero_expediente">
                            Número de Expediente:
                        </label>
                        <input
                            type="text"
                            id="numero_expediente"
                            name="numero_expediente"
                            value={formData.numero_expediente}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            placeholder="Número de expediente"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estado_carne">
                            Estado Carné:
                        </label>
                        <input
                            type="text"
                            id="estado_carne"
                            name="estado_carne"
                            value={formData.estado_carne}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            placeholder="Estado del carné"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foto_conductor">
                            Foto del Conductor:
                        </label>
                        <input
                            type="file"
                            id="foto_conductor"
                            name="foto_conductor"
                            // value={formData.foto_conductor}
                            onChange={handleFileChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleSubmit}
                        >
                            Guardar Conductor
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
