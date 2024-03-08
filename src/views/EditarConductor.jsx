import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import uploadFile from "../services/storageService";
import Cargando from "../components/Cargando";
import Swal from "sweetalert2";
import useData from "../hooks/useAxios";

let imagenConductor;

export default function EditarConductor() {
  const [formData, setFormData] = useState({
    nombre_conductor: "",
    apellido_conductor: "",
    dni_conductor: "",
    condicion_conductor: "",
    codigo_carne: "",
    modalidad_servicio: "",
    numero_licencia: "",
    fecha_emision: "",
    fecha_caducidad: "",
    numero_expediente: "",
    estado_carne: "",
    foto_conductor: "",
  });

  const { id } = useParams();
  const { data, loading, error, updateData } = useData(
    `${import.meta.env.VITE_ENDPOINT_BASE}/CarneConductor/${id}`
  );

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/conductores");
  };

  useEffect(() => {
    if (data) {
      setFormData({
        nombre_conductor: data.nombre_conductor,
        apellido_conductor: data.apellido_conductor,
        dni_conductor: data.dni_conductor,
        condicion_conductor: data.condicion_conductor,
        codigo_carne: data.codigo_carne,
        modalidad_servicio: data.modalidad_servicio,
        numero_licencia: data.numero_licencia,
        fecha_emision: data.fecha_emision,
        fecha_caducidad: data.fecha_caducidad,
        numero_expediente: data.numero_expediente,
        estado_carne: data.estado_carne,
        foto_conductor: data.foto_conductor,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const copyStateForm = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(copyStateForm);
  };

  const handleFileChange = (e) => {
    imagenConductor = e.target.files[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validar que los campos contengan solo letras
      const lettersRegex = /^[a-zA-Z\s]+$/;
      if (!lettersRegex.test(formData.nombre_conductor)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El nombre debe contener solo letras",
        });
        throw new Error("El nombre debe contener solo letras.");
      }
      if (!lettersRegex.test(formData.apellido_conductor)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El apellido debe contener solo letras",
        });
        throw new Error("El apellido debe contener solo letras.");
      }
      if (!lettersRegex.test(formData.condicion_conductor)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "La condición debe contener solo letras",
        });
        throw new Error("La condición debe contener solo letras.");
      }
      if (!lettersRegex.test(formData.modalidad_servicio)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "La modalidad debe contener solo letras",
        });
        throw new Error("La modalidad debe contener solo letras.");
      }
      if (!lettersRegex.test(formData.estado_carne)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El estado de la carne debe contener solo letras",
        });
        throw new Error("El estado de la carne debe contener solo letras.");
      }

      // Validar que el DNI contenga solo números
      const dniRegex = /^[0-9]+$/;
      if (!dniRegex.test(formData.dni_conductor)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El DNI debe contener solo números",
        });
        throw new Error("El DNI debe contener solo números.");
      }

      // Validar que el número de carne y número de licencia contengan solo números, letras y guiones
      const alphanumericHyphenRegex = /^[a-zA-Z0-9-]+$/;
      if (!alphanumericHyphenRegex.test(formData.numero_licencia)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El número de licencia debe contener solo números, letras y guiones",
        });
        throw new Error(
          "El número de licencia debe contener solo números, letras y guiones."
        );
      }
      if (!alphanumericHyphenRegex.test(formData.codigo_carne)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El número de carné debe contener solo números, letras y guiones",
        });
        throw new Error(
          "El número de carné debe contener solo números, letras y guiones."
        );
      }
      if (!alphanumericHyphenRegex.test(formData.numero_expediente)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El número de expediente debe contener solo números, letras y guiones",
        });
        throw new Error(
          "El número de expediente debe contener solo números, letras y guiones."
        );
      }
      useR;

      // Validar las fechas
      const fechaEmision = new Date(formData.fecha_emision);
      const fechaCaducidad = new Date(formData.fecha_caducidad);
      if (isNaN(fechaEmision.getTime()) || isNaN(fechaCaducidad.getTime())) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las fechas de emisión y caducidad no son válidas",
        });
        throw new Error("Las fechas de emisión y caducidad no son válidas.");
      }

      // Validar que la fecha de emisión sea menor que la fecha de caducidad
      if (fechaEmision >= fechaCaducidad) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "La fecha de emisión debe ser anterior a la fecha de caducidad",
        });
        throw new Error(
          "La fecha de emisión debe ser anterior a la fecha de caducidad."
        );
      }

      // Validar que se haya seleccionado una imagen de conductor
      if (!imagenConductor) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debe seleccionar una imagen de conductor",
        });
        throw new Error("Debe seleccionar una imagen de conductor.");
      }

      uploadFile(imagenConductor, "conductores")
        .then((response) => {
          console.log(response);
          return updateData(id, { ...formData, foto_conductor: response });
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Conductor agregado exitosamente",
            showConfirmButton: true,
          });
        })
        .then(() => {
          navigate("/conductores");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <Cargando />;
  if (error)
    return (
      <NotFound
        mensaje={
          "Parece que no podemos recolectar los datos del servidor, espere un momento y vuelva a ingresar"
        }
      />
    );

  return (
    <div className="bg-gray-100 p-5">
      <div className=" mx-auto my-auto bg-white shadow-md rounded-lg overflow-hidden">
        <form className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <h2 className="text-xl font-semibold mb-4 col-span-full">
            Editar Conductor
            <i className="ml-2 fa-solid fa-user-plus"></i>
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nombre_conductor"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="apellido_conductor"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dni_conductor"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="condicion_conductor"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="codigo_carne"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="modalidad_servicio"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="numero_licencia"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fecha_emision"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fecha_caducidad"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="numero_expediente"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="estado_carne"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="foto_conductor"
            >
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
            <p className="form-text">
              Actualmente la imagen de este producto es:{" "}
              {formData.foto_conductor}
            </p>
          </div>

          <div className="flex items-center justify-start">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-950 hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
            >
              Guardar Conductor
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
