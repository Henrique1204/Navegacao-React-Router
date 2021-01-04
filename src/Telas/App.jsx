import React from "react";
// Estilo.
import "./App.css";
// Componentes externos.
import { BrowserRouter } from "react-router-dom"
// Componentes da interface.
import Menu from "../Componentes/layout/Menu/Menu.jsx";
import Conteudo from "../Componentes/layout/Conteudo/Conteudo.jsx";

const App = (props) => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Conteudo />
        </BrowserRouter>
    </div>
);

export default App;
