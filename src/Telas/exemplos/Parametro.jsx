import React from "react";
// Hooks.
import { useParams } from "react-router-dom";

const Parametro = (props) => {
    const { id } = useParams();

    return (
        <section>
            <h1>Parametro</h1>
            <p>Valor: {id}!</p>
        </section>
    );
};

export default Parametro;
