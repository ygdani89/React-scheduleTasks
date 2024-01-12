// Dentro de un componente iran mas componentes como elementos Hijos . {props.children}

// 1 importo createContex
// 2 le Pongo nombre al contexto "Contenido"
import { bdatos  } from "../data/data.js"; 
import { createContext, useState , useEffect } from "react";

// Almacena datos
export const Contenedor = createContext();




// componente que engloba al resto de componentes
export function ContenedorProvaider(props) {
  const [Tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(bdatos);
  }, []);
   
  
  function crearTarea(Titulo, Comentario) {
    setTareas([
      ...Tareas,
      { id: Tareas.length, Titulo: Titulo, Comentario: Comentario },
    ]);
  }
  
  function eliminarTarea(id) {
    setTareas(Tareas.filter((Tarea) => Tarea.id !== id));
  } 

  return (
    // desde Contenedor voy a estar creando un provaidr
    <Contenedor.Provider value={{ Tareas, crearTarea, eliminarTarea }}>
      {props.children}
    </Contenedor.Provider>
  );
}
