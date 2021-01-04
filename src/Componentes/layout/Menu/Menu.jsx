import React from "react";
// Estilo.
import estilos from "./Menu.module.css";
// Componentes externos.
import { Link } from "react-router-dom";

const Menu = (props) => (
    <aside className={estilos.Menu}>
        <nav>
            <ul>
                <li><Link to="/" >Ínicio</Link></li>
                <li><Link to="sobre" >Sobre</Link></li>
            </ul>
        </nav>
    </aside>
);

export default Menu;
