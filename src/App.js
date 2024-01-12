import "./App.css";
import Formulario from "../src/components/Formulario.jsx";
import ListaTareas from "../src/components/ListaTareas.jsx";

import { useState, useEffect } from "react";

function App() {
  return (
    <main className="bg-blue-300 h-screen">
      <div className="container mx-auto">
        <Formulario />
        <ListaTareas />
      </div>
    </main>
  );
}

export default App;
