import './App.css';
import logoChibi from "./imagenes/logoChibi.png"

function App() {
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

      </div>
    </div>
  );
}

export default App;
