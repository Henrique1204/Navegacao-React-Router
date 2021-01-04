import React from "react";
import estilos from "./Menu.module.css";

const Menu = (props) => (
    <aside className={estilos.Menu}>
        <nav>
            <ul>
                <li><a href="/" >Ínicio</a></li>
                <li><a href="/sobre" >Sobre</a></li>
            </ul>
        </nav>
    </aside>
);

export default Menu;
