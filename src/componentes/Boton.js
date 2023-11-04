import React from "react";
import "../Hoja de estilos/Boton.css"

function Boton({ texto, esBotonDeClicks, manejarClcik }){
    return(
        <button
            className={esBotonDeClicks ? "boton-click" : "boton-reiniciar"}
            onClick={manejarClcik}>
            {texto}
        </button>
    )
}

export default Boton;