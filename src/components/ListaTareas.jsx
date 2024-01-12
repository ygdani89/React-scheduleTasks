import { useContext } from "react";
import { Contenedor } from "../context/Contenedor";
import TarjetaTareas from "./TarjetaTareas";

function ListaTareas() {
  const { Tareas } = useContext(Contenedor);

  if (Tareas.length === 0) {
    return <h1 className="font-bold text-2xl max-w-md mx-auto text-center"> NO HAY TAREAS</h1>;
  }

  return (
    <div  className="grid grid-cols-4 gap-2   ">
      {Tareas.map((e) => (
      <TarjetaTareas key={e.id} Task={e} />
      ))}
    </div>
  );
}

export default ListaTareas;
