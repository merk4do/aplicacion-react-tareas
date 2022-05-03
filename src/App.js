import './App.css';
import FreeCodeCampLogo from './imagenes/redbull.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={FreeCodeCampLogo}
          alt='logo de FreeCodeCamp' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
