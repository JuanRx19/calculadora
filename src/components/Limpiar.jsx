import React from "react";
import "../stylesheets/Limpiar.css"

function Limpiar({accion}){
    return(
        <button className="limpiar" onClick={accion}>
            Clear
        </button>
    );
    
}

export default Limpiar;