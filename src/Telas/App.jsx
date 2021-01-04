import React from "react";
// Estilo.
import "./App.css";
// Componentes externo.
import Menu from "../Componentes/layout/Menu/Menu.jsx";
import Conteudo from "../Componentes/layout/Conteudo/Conteudo.jsx";

const App = (props) => (
    <div className="App">
        <Menu />
        <Conteudo />
    </div>
);

export default App;
