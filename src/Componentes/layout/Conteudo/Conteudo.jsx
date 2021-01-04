import React from "react";
// Estilo.
import estilos from "./Conteudo.module.css";
// Componentes da interface.
import Home from "../../../Telas/exemplos/Home.jsx";
import Sobre from "../../../Telas/exemplos/Sobre.jsx";
import Parametro from "../../../Telas/exemplos/Parametro.jsx";
import NotFound from "../../../Telas/exemplos/NotFound.jsx";
// Componentes externos.
import { Switch, Route } from "react-router-dom";

const Conteudo = (props) => (
    <main className={estilos.Conteudo}>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/sobre">
                <Sobre />
            </Route>

            <Route path="/parametro/:id">
                <Parametro />
            </Route>

            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
);

export default Conteudo;
