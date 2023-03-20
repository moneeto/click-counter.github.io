import React, { useConteo, useEffect } from 'react';

function Boton({texto, esBotonDeClic, manejarClic, segundos}){ // en vez de usar props, uso la sintaxis de desestructuración para referirme directamente al objeto sin tener que definirlo

	return (
		<div className='contenedor-botones'>
		<button 
		className={esBotonDeClic ? segundos === 0 ? 'boton boton-clic disabled': 'boton boton-clic' : 'boton boton-reiniciar'}
		disabled={segundos === 0}
		onClick={manejarClic}
		type='button'>
			{texto}
		</button>
		</div>
		
	)
}

export default Boton;