import React from "react";
import "../stylesheets/Botones.css"

function Botones({valor, tipo, accion}){
    return(
        <button className={ tipo ? "numero" : "operador" } onClick={accion}>
            {valor}
        </button>
    );
}

export default Botones;