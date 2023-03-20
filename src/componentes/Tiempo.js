import React, { useState } from "react";

function Tiempo({segundos, setConteo}) {



    const [texto, setTexto] = useState('Click acá para empezar el contador!')

    const cambiarTexto = () => {
        setTexto('Tiempo restante: ')
    }

    const onClick = () => {
            cambiarTexto()
            setConteo(true)
            
    }

    return(
        <div className="contenedor-tiempo">
            <div className="reloj">
                <button onClick={onClick}
                  type="button" className="segundos">{texto} {segundos}</button>
            </div>
        </div>
        
    )

}

export default Tiempo;