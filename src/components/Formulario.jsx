import { useContext, useState } from "react";
import { Contenedor } from "../context/Contenedor";

function Formulario() {
  const [Texto, setTexto] = useState("");
  const [Comentario, setComentario] = useState("");

  const { crearTarea } = useContext(Contenedor);

  function capturar(e) {
    e.preventDefault();

    if (Texto == "" || Comentario == "") {
      alert("Por favor Complete todos los campos");
    } else {
      crearTarea(Texto, Comentario);
    }

    setTexto("");
    setComentario("");
  }

  return (
    <fieldset className=" max-w-md mx-auto p-3">
      <form
        className="bg-green-600 rounded-md p-10 mb-4  opacity-2"
        onSubmit={capturar}
      >
        <h1 className="pb-2 font-bold text-center text-white text-xl">
          {" "}
          CREA TU TAREA :
        </h1>
        <input
          className="bg-slate-200  opacity-3 rounded-md p-3 w-full"
          placeholder="Escribe Titulo"
          onChange={(e) => setTexto(e.target.value)}
          value={Texto}
        />
        <textarea
          className="bg-slate-200 opacity-3  rounded-md p-3 w-full mt-2"
          placeholder="Descripcion"
          onChange={(e) => setComentario(e.target.value)}
          value={Comentario}
        ></textarea>
        <button className="bg-slate-100 rounded-md p-2  hover:text-white hover:bg-slate-400 ">
          Guardar
        </button>
      </form>
    </fieldset>
  );
}

export default Formulario;
