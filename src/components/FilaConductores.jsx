import { Link, useNavigate } from "react-router-dom";
import useData from "../hooks/useAxios";
import Swal from "sweetalert2";

export default function FilaConductores({ data }) {
  const {
    error: dataError,
    loading,
    deleteData,
  } = useData(`${import.meta.env.VITE_ENDPOINT_BASE}/CarneConductor`);

  const handleSubmitDelete = async (e, id_conductor, nombre_conductor) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, bórralo",
      })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await deleteData(id_conductor);
              Swal.fire({
                title: "¡Eliminado!",
                text: `El Conductor ${nombre_conductor} ha sido eliminado.`,
                icon: "success",
              }).then(() => {
                window.location.reload();
              });
            } catch (err) {
              console.log(err);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(
        ({
          id_conductor,
          nombre_conductor,
          apellido_conductor,
          dni_conductor,
          codigo_carne,
          fecha_emision,
          fecha_caducidad,
          foto_conductor,
        }) => (
          <tr key={id_conductor}>
            <td className="px-6 py-4 whitespace-no-wrap">
              <img
                src={foto_conductor}
                alt="Foto del conductor"
                className="h-12 w-12 rounded-full"
              />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              {" "}
              {nombre_conductor}{" "}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              {apellido_conductor}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">{dni_conductor}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{codigo_carne}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{fecha_emision}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{fecha_caducidad}</td>
            <td className="px-6 py-4 text-center whitespace-no-wrap">
              <Link
                to={`/conductores/${id_conductor}`}
                className="bg-yellow-500 text-white hover:bg-yellow-600 px-2 py-1 rounded-full"
              >
                <i className="fa-solid fa-pen"></i>
              </Link>
              <Link
                onClick={(e) =>
                  handleSubmitDelete(e, id_conductor, nombre_conductor)
                }
                className="bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded-full"
              >
                <i className="fa-solid fa-trash"></i>
              </Link>
              <Link
                to={`/conductores/${id_conductor}/ver`}
                className="bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 rounded-full"
              >
                <i className="fa-solid fa-eye"></i>
              </Link>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
}
