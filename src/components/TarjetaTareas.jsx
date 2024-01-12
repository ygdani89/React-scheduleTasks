import { useContext } from "react";
import { Contenedor } from "../context/Contenedor";

// lineas para utilizar el contexto

// icono basura
import { FaTrashAlt } from "react-icons/fa";

function TarjetaTareas({ Task }) {
  const { eliminarTarea } = useContext(Contenedor);

  return (
    <div className=" bg-slate-800 text-white  p-4 rounded-md">
      <h1 className=" text-xl font-bold capitalize" >{Task.Titulo}</h1>
      <p className="mt-4  text-gray-400 text-sm">{Task.Comentario}</p>
      <button   className="text-red-300 rounded-md  mt-4  hover:text-red-500 " onClick={() => eliminarTarea(Task.id)}>
        {" "}
        <FaTrashAlt />{" "}
      </button>
    </div>
  );
}

export default TarjetaTareas;
