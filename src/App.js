import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoChibi from "./imagenes/logoChibi.png"
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClcik = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={logoChibi}
        alt='Logo Chibi'
         />

      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>

        <Boton 
          texto = "Click"
          esBotonDeClicks={true}
          manejarClcik={manejarClcik}/>

        <Boton 
        texto="Reiniciar"
        esBotonDeClicks={false}
        manejarClcik={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
