import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoChibi from "./imagenes/logoChibi.png"

function App() {

  const manejarClcik = () => {
    console.log("Click")
  }

  const reiniciarContador = () => {
    console.log("Reiniciar")
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
        <Contador numClicks={4}/>

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
