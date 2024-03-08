import { useParams } from "react-router-dom";
import useData from "../hooks/useAxios";
import Cargando from "../components/Cargando";
import NotFound from "../components/NotFound";

export default function Conductor() {
  const { id } = useParams();
  const { data, loading, error } = useData(
    `${import.meta.env.VITE_ENDPOINT_BASE}/CarneConductor/${id}`
  );
  if (loading) return <Cargando />;
  if (error)
    return (
      <NotFound
        mensaje={
          "Parece que no podemos recolectar los datos del servidor, espere un momento y vuelva a intentarlo."
        }
      />
    );

  return (
    <div className="md:min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center p-8">
            <img
              className="w-40 h-40 object-cover rounded-full mr-10"
              src={data.foto_conductor}
              alt="Foto del Conductor"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {data.nombre_conductor} {data.apellido_conductor}
              </h2>
              <p className="text-xl text-gray-600">{data.dni_conductor}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 p-8">
            <p>
              <span className="font-bold">Condición:</span>{" "}
              {data.condicion_conductor}
            </p>
            <p>
              <span className="font-bold">Código Carné:</span>{" "}
              {data.codigo_carne}
            </p>
            <p>
              <span className="font-bold">Modalidad de Servicio:</span>{" "}
              {data.modalidad_servicio}
            </p>
            <p>
              <span className="font-bold">Número de Licencia:</span>{" "}
              {data.numero_licencia}
            </p>
            <p>
              <span className="font-bold">Fecha de Emisión:</span>{" "}
              {data.fecha_emision}
            </p>
            <p>
              <span className="font-bold">Fecha de Caducidad:</span>{" "}
              {data.fecha_caducidad}
            </p>
            <p>
              <span className="font-bold">Número de Expediente:</span>{" "}
              {data.numero_expediente}
            </p>
            <p>
              <span className="font-bold">Estado de Carné:</span>{" "}
              <span
                className={
                  data.estado_carne === "Habilitado"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {data.estado_carne}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
