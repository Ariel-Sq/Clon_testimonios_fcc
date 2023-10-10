import './App.css';
import Testimonio from "./componentes/testimonio.jsx"
import testimonios from "./datos"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
      {testimonios.map((testimonio, index) => (
          <Testimonio
            key={testimonio.id}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))} 
      </div>
    </div>
  );
}

export default App;
