import './App.css';
import './stylesheets/boton.css'
import './stylesheets/contador.css'
import Boton from './componentes/Boton';
import logoNike from './imagenes/nike-logo.png';
import Contador from './componentes/Contador';
import { useState } from 'react';
import Tiempo from './componentes/Tiempo';
import { useTiempo } from "./hooks/useTiempo";
import './stylesheets/tiempo.css'

function App() {
  




  const [segundos, setConteo] = useTiempo(10);
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
    setConteo()
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={logoNike}
        alt='Logo del contador de clicks'
        />
      </div>
      <div className='contenedor-contador'>
        <h1 className='titulo'>Contador de Clicks</h1>
        <Contador 
        numClics={numClics}
        />
        <Tiempo
        segundos={segundos}
        setConteo={setConteo}
        />
      </div>
      <div className='contenedor-principal'>
        <Boton 
        texto = 'Click'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        segundos={segundos}/>
        <Boton 
        texto = 'Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
  }

export default App;
